import { useEffect, useRef } from 'react';
import styles from './CatScratchZone.module.scss';

// Parallax travel: image shifts up by this many pixels over the full scroll
const PARALLAX_RANGE = 120;

const CatScratchZone = ({ children }) => {
  const zoneRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const img = imgRef.current;
    if (!zone || !img) return;

    const onScroll = () => {
      const rect = zone.getBoundingClientRect();
      const zoneHeight = zone.offsetHeight;
      const vh = window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const totalScrollable = Math.max(1, zoneHeight - vh);
      const progress = Math.min(1, scrolled / totalScrollable);
      // Shift image upward as user scrolls — creates a gentle parallax
      img.style.transform = `translateY(${progress * -PARALLAX_RANGE}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={zoneRef} className={styles.catZone}>
      {/* ── Sticky board-photo background ─────────────────────────────── */}
      <div className={styles.stickyBg} aria-hidden='true'>
        <img
          ref={imgRef}
          src='/static/images/sra_board_2026.png'
          className={styles.boardImg}
          alt=''
          draggable={false}
        />
        {/* Dark gradient overlay for readability */}
        <div className={styles.overlay} />
      </div>

      {/* ── Sectioned content sits on top ─────────────────────────────── */}
      <div className={styles.catContent}>{children}</div>
    </div>
  );
};

export default CatScratchZone;
