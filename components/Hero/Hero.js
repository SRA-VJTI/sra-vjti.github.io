import styles from './Hero.module.scss';
import { useEffect, useState } from 'react';
import MayaViewer from '../MayaViewer/MayaViewer';

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
        <a href='#is'>
          <div className={styles.scrollIndicator}></div>
        </a>
      </div>
      {isHome && <MayaViewer />}
    </>
  );
}

export default Hero;
