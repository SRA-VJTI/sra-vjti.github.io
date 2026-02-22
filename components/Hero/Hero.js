import styles from './Hero.module.scss';

function Hero({
  imgName,
  title,
  subtitleList,
  isHome,
  backgroundPosition = 'center',
}) {
  return (
    <div
      style={{
        backgroundImage: `url("/static/images/hero/${imgName}")`,
        backgroundPosition: backgroundPosition,
      }}
      className={`${styles.hero} ${styles.centeredHero}`}
    >
      <div className={styles.heroHead}>{title}</div>
      <div className={styles.heroSub}>
        {subtitleList.map((heroTag, index) => {
          return <span key={`hero_${index}`}>{heroTag}</span>;
        })}
      </div>
      <a href={isHome ? '#About-us' : '#is'}>
        <div className={styles.scrollIndicator}></div>
      </a>
    </div>
  );
}

export default Hero;
