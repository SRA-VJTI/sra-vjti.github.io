'use client';

import { useEffect, useRef, useState } from 'react';

// An open-source hardware model, rendered with three.js. One of three is
// shown per load (see MODELS below):
//
//   arm  - SO-ARM100 (github.com/TheRobotStudio/SO-ARM100), assembled from
//          its URDF at a fixed joint pose.
//   hand - Pollen Robotics Amazing Hand (github.com/pollen-robotics/
//          AmazingHand), assembled from its MuJoCo model.
//   pcb  - the Customboot-32 board, built at runtime from its KiCad file.
//
// The two meshes are simplified with quadric edge collapse and quantised to
// a compact binary:
// [uint32 vertCount][uint32 faceCount][int16 xyz * verts][uint16 abc * faces].
//
// WebGL is doing the work that matters here: a real depth buffer. Sorting
// triangles on the CPU (painter's algorithm) cannot resolve interpenetrating
// geometry, which is what made the earlier canvas version flicker and look
// see-through.

// Each entry carries its own rest orientation, since the source models do
// not share an up axis: URDF is Z-up, the hand's MuJoCo frame is not.
const MODELS = {
  arm: {
    url: '/models/so-arm100.bin',
    // URDF is Z-up, the viewer is Y-up: stand the arm upright.
    rest: [['x', -Math.PI / 2]],
    label: 'SO-ARM100',
    href: 'https://github.com/TheRobotStudio/SO-ARM100',
  },
  hand: {
    url: '/models/amazing-hand.bin',
    // Palm to the camera, fingers up.
    rest: [['y', Math.PI / 2], ['z', Math.PI / 2]],
    // The mesh is Pollen Robotics' Amazing Hand; the link points at SRA's
    // own EEG-controlled bionic hand project.
    label: 'Bionic Hand',
    href: 'https://github.com/sahilapage/Bionic-Hand-Controlled-Over-EEG',
  },
  // Built at runtime from the KiCad board rather than shipped as a mesh:
  // the outline extrudes cleanly and the artwork is a texture, so the whole
  // board costs ~70KB instead of a few hundred.
  pcb: {
    url: '/models/pcb.json',
    kind: 'pcb',
    textures: { front: '/models/pcb-front.png', back: '/models/pcb-back.png' },
    rest: [],
    label: 'Customboot-32',
    href: 'https://github.com/avm1234567/Customboot-32',
  },
};

const AXES = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };

// `model="random"` picks a different one on each load. The choice is made
// inside the effect, not during render: picking during render would differ
// between the server and the client and trip a hydration mismatch.
export default function HeroModel({ model = 'random' }) {
  // The stage is display:none below 900px. Without this gate the component
  // would still download the model and run a WebGL loop for an element that
  // is never painted.
  const [wide, setWide] = useState(false);
  const mountRef = useRef(null);
  const linkRef = useRef(null);
  // Whether the pointer is actually over the model, not just over the
  // stage rectangle. Read by the click handler.
  const overRef = useRef(false);
  // Which model got picked, so the caption can name and link it. Set from
  // the effect, so it stays empty during SSR.
  const [pick, setPick] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)');
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !wide) return;

    const keys = Object.keys(MODELS);
    const key =
      model === 'random'
        ? keys[Math.floor(Math.random() * keys.length)]
        : MODELS[model]
          ? model
          : 'hand';
    const spec = MODELS[key];
    setPick(key);

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import('three');
      if (disposed) return;

      const isPcb = spec.kind === 'pcb';

      let buf, board;
      try {
        const res = await fetch(spec.url);
        if (!res.ok) throw new Error(`model ${res.status}`);
        if (isPcb) board = await res.json();
        else buf = await res.arrayBuffer();
      } catch {
        return; // hero just renders without the model
      }
      if (disposed) return;

      // ---- Build subject ---------------------------------------------
      const disposables = [];
      let subject; // the thing that gets spun

      if (isPcb) {
        const MM = 1 / Math.max(board.widthMm, board.heightMm); // fit to 1 unit
        const W = board.widthMm;
        const H = board.heightMm;

        // KiCad Y grows downward; flip it so the board reads right way up.
        const toXY = ([x, y]) => new THREE.Vector2((x - W / 2) * MM, -(y - H / 2) * MM);

        const shape = new THREE.Shape(board.outline.map(toXY));
        for (const hole of board.holes) {
          shape.holes.push(new THREE.Path(hole.map(toXY)));
        }

        const group = new THREE.Group();
        const t = board.thicknessMm * MM;

        // Substrate: extruded outline, plain FR4 edge colour.
        const body = new THREE.ExtrudeGeometry(shape, {
          depth: t,
          bevelEnabled: false,
        });
        body.translate(0, 0, -t / 2);
        const bodyMat = new THREE.MeshStandardMaterial({
          color: 0x14351f,
          roughness: 0.85,
          metalness: 0.05,
        });
        group.add(new THREE.Mesh(body, bodyMat));
        disposables.push(body, bodyMat);

        // Artwork: a flat face on each side carrying the baked layers.
        const loader = new THREE.TextureLoader();
        const faceW = W * MM;
        const faceH = H * MM;

        for (const side of ['front', 'back']) {
          const face = new THREE.ShapeGeometry(shape);
          // Planar UVs. v is measured from the board's top edge because the
          // texture's first row is KiCad y = 0. The back face mirrors u, so
          // its silkscreen reads correctly when seen from behind.
          const pos = face.attributes.position;
          const uv = new Float32Array(pos.count * 2);
          for (let i = 0; i < pos.count; i++) {
            const px = pos.getX(i);
            const py = pos.getY(i);
            const u = 0.5 + px / faceW;
            uv[i * 2] = side === 'front' ? u : 1 - u;
            uv[i * 2 + 1] = 0.5 + py / faceH;
          }
          face.setAttribute('uv', new THREE.BufferAttribute(uv, 2));

          const tex = loader.load(spec.textures[side]);
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.anisotropy = 4;
          const mat = new THREE.MeshStandardMaterial({
            map: tex,
            roughness: 0.6,
            metalness: 0.15,
          });
          const m = new THREE.Mesh(face, mat);
          m.position.z = side === 'front' ? t / 2 + 0.0004 : -t / 2 - 0.0004;
          if (side === 'back') m.rotation.y = Math.PI;
          group.add(m);
          disposables.push(face, mat, tex);
        }

        // Components as blocks, sized from their F.Fab body outlines. Not
        // courtyards: those are clearance zones, and the ESP32's reserves
        // half the board for its antenna.
        const partMat = new THREE.MeshStandardMaterial({
          color: 0x2b2a2a,
          roughness: 0.55,
          metalness: 0.35,
        });
        disposables.push(partMat);

        for (const c of board.components) {
          const g = new THREE.BoxGeometry(c.w * MM, c.h * MM, c.z * MM);
          const m = new THREE.Mesh(g, partMat);
          m.position.set(
            (c.x - W / 2) * MM,
            -(c.y - H / 2) * MM,
            (c.side === 'F' ? 1 : -1) * (t / 2 + (c.z * MM) / 2)
          );
          group.add(m);
          disposables.push(g);
        }

        subject = group;
      } else {
        const head = new Uint32Array(buf, 0, 2);
        const vertCount = head[0];
        const faceCount = head[1];

        const raw = new Int16Array(buf, 8, vertCount * 3);
        const src = new Float32Array(vertCount * 3);
        for (let i = 0; i < src.length; i++) src[i] = raw[i] / 32767;

        const faces = new Uint16Array(buf, 8 + vertCount * 6, faceCount * 3);

        // Indexed: the material's flatShading derives face normals in the
        // fragment shader, so there is no need to split vertices per face.
        // Expanding instead would upload 6x the vertex data.
        const geometry = new THREE.BufferGeometry();
        geometry.setIndex(new THREE.BufferAttribute(faces, 1));
        geometry.setAttribute('position', new THREE.BufferAttribute(src, 3));
        geometry.computeVertexNormals();
        geometry.center();

        const material = new THREE.MeshStandardMaterial({
          color: 0xf2f1ef,
          roughness: 0.42,
          metalness: 0.28,
          flatShading: true,
        });
        subject = new THREE.Mesh(geometry, material);
        disposables.push(geometry, material);
      }

      // ---- Scene -----------------------------------------------------
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.set(0, 0, 3.1);

      const mesh = subject;

      // Rest orientation, applied as explicit world-axis turns so the
      // meaning does not depend on Euler order. Set on the mesh inside the
      // pivot so the animated spin still runs about the tilted axis.
      for (const [axis, angle] of spec.rest) {
        mesh.rotateOnWorldAxis(new THREE.Vector3(...AXES[axis]), angle);
      }

      // pivot spins; tilt holds it at an angle. Because the spin happens
      // inside the tilted group, the rotation axis is tilted too, so the arm
      // turns about a leaned-over axis rather than a bolt-upright one.
      const pivot = new THREE.Group();
      pivot.add(mesh);

      const tilt = new THREE.Group();
      tilt.rotation.z = 0.32; // ~18 degrees
      tilt.rotation.x = 0.1;
      // 1.25 is the practical ceiling: through a full turn the model reaches
      // 0.612 units, and the camera's half-height here is 0.889 once the
      // float is accounted for.
      tilt.scale.setScalar(1.25);
      tilt.add(pivot);
      scene.add(tilt);

      // Key light off to the left, a dim fill, and a red rim that ties the
      // object to the page palette.
      scene.add(new THREE.AmbientLight(0xffffff, 0.55));

      const key = new THREE.DirectionalLight(0xffffff, 2.4);
      key.position.set(-2.2, 2.4, 3);
      scene.add(key);

      const fill = new THREE.DirectionalLight(0xffffff, 0.5);
      fill.position.set(3, -1.5, 1.5);
      scene.add(fill);

      const rim = new THREE.DirectionalLight(0x9c2327, 3.2);
      rim.position.set(1.5, 0.5, -2.5);
      scene.add(rim);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true, // sit on the page background, no clear colour
        powerPreference: 'low-power',
      });
      renderer.setClearAlpha(0);
      mount.appendChild(renderer.domElement);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.domElement.style.display = 'block';

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = mount;
        if (!w || !h) return;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();

      const ro = new ResizeObserver(resize);
      ro.observe(mount);

      // ---- Hit testing -----------------------------------------------
      // The stage is a big rectangle but the model fills only part of it,
      // so clicks are gated on a raycast against the geometry itself.
      const raycaster = new THREE.Raycaster();
      const ndc = new THREE.Vector2();

      const hits = (ev) => {
        const r = renderer.domElement.getBoundingClientRect();
        if (!r.width || !r.height) return false;
        ndc.x = ((ev.clientX - r.left) / r.width) * 2 - 1;
        ndc.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
        raycaster.setFromCamera(ndc, camera);
        return raycaster.intersectObject(subject, true).length > 0;
      };

      const setOver = (v) => {
        if (overRef.current === v) return;
        overRef.current = v;
        renderer.domElement.style.cursor = v ? 'pointer' : 'default';
        if (linkRef.current) linkRef.current.classList.toggle('is-over', v);
      };

      const onMove = (ev) => setOver(hits(ev));
      const onLeave = () => setOver(false);

      renderer.domElement.addEventListener('pointermove', onMove);
      renderer.domElement.addEventListener('pointerleave', onLeave);

      // ---- Animate ---------------------------------------------------
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      let raf = 0;
      let prev = performance.now();
      let elapsed = 0; // accumulated only while on screen, so pausing never jumps

      const frame = (now) => {
        raf = requestAnimationFrame(frame);
        elapsed += (now - prev) / 1000;
        prev = now;

        // Spin about the world vertical only; no tilt.
        pivot.rotation.y = elapsed * 0.3;
        pivot.position.y = Math.sin(elapsed * 0.7) * 0.06; // the float

        renderer.render(scene, camera);
      };

      const play = () => {
        if (raf || reduceMotion) return;
        prev = performance.now();
        raf = requestAnimationFrame(frame);
      };
      const pause = () => {
        if (!raf) return;
        cancelAnimationFrame(raf);
        raf = 0;
      };

      // Stop rendering once the hero scrolls away; the rest of the page
      // should not pay for a canvas nobody can see.
      const io = new IntersectionObserver(
        ([e]) => (e.isIntersecting ? play() : pause()),
        { threshold: 0 }
      );
      io.observe(mount);

      if (reduceMotion) renderer.render(scene, camera);
      else play();

      cleanup = () => {
        pause();
        io.disconnect();
        renderer.domElement.removeEventListener('pointermove', onMove);
        renderer.domElement.removeEventListener('pointerleave', onLeave);
        ro.disconnect();
        for (const d of disposables) d.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [model, wide]);

  const shown = pick ? MODELS[pick] : null;

  // The anchor is always rendered, even before the pick resolves, so the
  // stage div keeps its DOM identity: swapping the wrapper would detach the
  // canvas that three.js appended to it.
  return (
    <a
      ref={linkRef}
      className="hero__object"
      // Clicks outside the model's silhouette do nothing.
      onClick={(e) => {
        if (!overRef.current) e.preventDefault();
      }}
      href={shown ? shown.href : undefined}
      target="_blank"
      rel="noopener noreferrer"
      title={shown ? `${shown.label} on GitHub` : undefined}
      aria-label={shown ? `${shown.label} on GitHub` : undefined}
    >
      <div ref={mountRef} className="hero__object-stage" aria-hidden="true" />
    </a>
  );
}
