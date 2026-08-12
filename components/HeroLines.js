'use client';

import { useEffect, useRef } from 'react';

// Contour lines traced through a slowly drifting sine field, in the spirit of
// the topographic background on landonorris.com. The field is the same one the
// dither version used; the difference is that instead of thresholding it into
// dots, marching squares walks each iso-level and emits smooth polylines.

const CELL = 14; // sampling grid, in px. Coarser reads as smoother curves.
const LEVELS = 18; // number of contour rings; spacing is BAND / LEVELS
// The field's values cluster around 0.5, so the levels are packed into a band
// around the middle. Spreading them evenly over 0..1 leaves the outer rings
// almost never crossed, which renders as three lonely lines.
const BAND = 0.75;
const FPS = 30; // the drift is slow enough that 60fps buys nothing

export default function HeroLines() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const TAU = Math.PI * 2;
    const rand = (a, b) => a + Math.random() * (b - a);

    // Several independent ripple sources rather than one. The first three are
    // broad basins, the rest are tighter local ripples, and centres are allowed
    // to sit slightly off-canvas so some rings only partly enter the frame.
    const sources = Array.from({ length: 6 }, (_, k) => {
      const tight = k >= 3;
      return {
        cx: rand(-0.15, 1.15),
        cy: rand(-0.15, 0.9),
        freq: tight ? rand(9, 16) : rand(3, 6),
        amp: tight ? rand(0.35, 0.6) : rand(0.9, 1.3),
        phase: Math.random() * TAU,
        speed: rand(0.6, 1.4) * (k % 2 ? 1 : -1), // alternate drift direction
      };
    });

    // Two shallow planar waves keep the whole field slowly meandering.
    const p1 = Math.random() * TAU;
    const p2 = Math.random() * TAU;

    // Normaliser, so the summed field still lands in roughly 0..1.
    const total = sources.reduce((s, o) => s + o.amp, 0) + 1.4;

    let cols = 0;
    let rows = 0;
    let field = new Float32Array(0);
    let raf = 0;
    let last = 0;
    const start = performance.now();

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL) + 1;
      rows = Math.ceil(height / CELL) + 1;
      field = new Float32Array(cols * rows);
    };

    const draw = (now) => {
      raf = requestAnimationFrame(draw);

      if (now - last < 1000 / FPS) return;
      last = now;

      const t = ((now - start) / 1000) * 0.12; // slow drift
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const aspect = height / width || 1;

      // Sample the field once per frame; every level reuses these values.
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const x = (i * CELL) / width;
          const y = ((j * CELL) / height) * aspect;

          let v =
            Math.sin(x * 2.2 + t * 0.5 + p1) * 0.7 +
            Math.sin((x + y) * 1.8 - t * 0.4 + p2) * 0.7;

          for (let s = 0; s < sources.length; s++) {
            const o = sources[s];
            const d = Math.hypot(x - o.cx, y - o.cy);
            v += Math.sin(d * o.freq - t * o.speed + o.phase) * o.amp;
          }

          field[j * cols + i] = 0.5 + v / (2 * total);
        }
      }

      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

      for (let l = 0; l < LEVELS; l++) {
        const level = 0.5 + (l / (LEVELS - 1) - 0.5) * BAND;

        // Every fourth ring picks up a trace of the accent; the rest stay
        // near-invisible so the contours never compete with the headline.
        ctx.strokeStyle =
          l % 4 === 0 ? 'rgba(156, 35, 39, 0.42)' : 'rgba(242, 241, 239, 0.14)';
        ctx.beginPath();

        for (let j = 0; j < rows - 1; j++) {
          for (let i = 0; i < cols - 1; i++) {
            const tl = field[j * cols + i];
            const tr = field[j * cols + i + 1];
            const br = field[(j + 1) * cols + i + 1];
            const bl = field[(j + 1) * cols + i];

            let idx = 0;
            if (tl > level) idx |= 8;
            if (tr > level) idx |= 4;
            if (br > level) idx |= 2;
            if (bl > level) idx |= 1;
            if (idx === 0 || idx === 15) continue;

            const x = i * CELL;
            const y = j * CELL;

            // Linear interpolation along each crossed edge is what keeps the
            // curve smooth instead of stair-stepping on the grid.
            const T = [x + ((level - tl) / (tr - tl)) * CELL, y];
            const R = [x + CELL, y + ((level - tr) / (br - tr)) * CELL];
            const B = [x + ((level - bl) / (br - bl)) * CELL, y + CELL];
            const L = [x, y + ((level - tl) / (bl - tl)) * CELL];

            const seg = (a, b) => {
              ctx.moveTo(a[0], a[1]);
              ctx.lineTo(b[0], b[1]);
            };

            switch (idx) {
              case 1: case 14: seg(L, B); break;
              case 2: case 13: seg(B, R); break;
              case 3: case 12: seg(L, R); break;
              case 4: case 11: seg(T, R); break;
              case 6: case 9: seg(T, B); break;
              case 7: case 8: seg(T, L); break;
              case 5: seg(T, L); seg(B, R); break;
              case 10: seg(T, R); seg(L, B); break;
            }
          }
        }

        ctx.stroke();
      }
    };

    resize();
    window.addEventListener('resize', resize);

    if (reduceMotion) {
      draw(performance.now());
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__lines" aria-hidden="true" />;
}
