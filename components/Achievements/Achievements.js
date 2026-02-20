import { Achievementlist } from '../../data';
import { useEffect, useRef } from 'react';
import styles from './Achievements.module.scss';

const Achievements = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      const maxShift = 120;
      const progress = Math.min(
        scrollY / (document.body.scrollHeight - window.innerHeight),
        1
      );
      bgRef.current.style.transform = `translateY(-${progress * maxShift}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* Sticky parallax background */}
      <div className={styles.stickyBg}>
        <div
          ref={bgRef}
          className={styles.bgImage}
          style={{
            backgroundImage: `url('/static/images/sra_board_2026.png')`,
          }}
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Page content */}
      <div className={styles.content}>
        {/* Page header */}
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>SRA VJTI</p>
          <h1 className={styles.pageTitle}>Achievements</h1>
          <p className={styles.pageSubtitle}>What we&apos;re proud of.</p>
        </header>

        {/* Year sections */}
        <div className={styles.achievements}>
          {Achievementlist.map((achYear, idx) => (
            <section className={styles.achYear} key={`year_${idx}`}>
              <div className={styles.yearLabel}>
                <span className={styles.yearLine} />
                <span className={styles.yearText}>{achYear.year}</span>
                <span className={styles.yearLine} />
              </div>
              <div className={styles.achGrid}>
                {achYear.achs.map((ach, i) => (
                  <div className={styles.achCard} key={`ach_${i}`}>
                    <div
                      className={styles.achImg}
                      style={{
                        backgroundImage: `url('/static/images/${ach.imgName}')`,
                      }}
                    />
                    <div className={styles.achName}>{ach.name}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
