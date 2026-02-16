import styles from './Hero.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from 'react';

function Hero({
  imgName,
  title,
  subtitleList,
  isHome,
  backgroundPosition = 'center',
}) {
  const [isLoad, setIsLoad] = useState('none');
  useEffect(() => {
    setTimeout(() => {
      setIsLoad('');
    }, 2000);
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0.15),
                            rgba(0, 0, 0, 0.25),
                            rgba(0, 0, 0, 0.15)), url("/static/images/hero/${imgName}")`,
          backgroundPosition: backgroundPosition,
        }}
        className={styles.hero}
      >
        <div className={styles.heroHead}>{title}</div>
        <div className={styles.heroSub}>
          {subtitleList.map((heroTag, index) => {
            return subtitleList.length !== index + 1 ? (
              <span key={`hero_${index}`}>
                {heroTag}&nbsp;&nbsp;&bull;&nbsp;&nbsp;
              </span>
            ) : (
              <span key={`hero_${index}`}>{heroTag}</span>
            );
          })}
        </div>
      </div>
      {isHome && (
        <div className={styles.is} id='is'>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)),
		url("/static/images/ideate.png")`,
            }}
            className={styles.caption}
          >
            <div className={styles.captionHead}>Ideate</div>
            <div className={styles.captionSub}>
              Changing the world, one solution at a time.
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)),
		url("/static/images/innovate.png")`,
            }}
            className={styles.caption}
          >
            <div className={styles.captionHead}>Innovate</div>
            <div className={styles.captionSub}>
              Creativity is thinking up new things. Innovation is doing new
              things.
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)),
		url("/static/images/inspire.png")`,
            }}
            className={styles.caption}
          >
            <div className={styles.captionHead}>Inspire</div>
            <div className={styles.captionSub}>
              Don't inspire by being perfect, inspire by embracing your
              imperfections.
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
