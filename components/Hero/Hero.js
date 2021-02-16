import styles from './Hero.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { HeroTags } from '../../data/SiteData';

const Hero = ({
  imgName,
  title,
  subtitleList,
  isHome,
  backgroundPosition = 'center',
}) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.5)), url("/static/images/${imgName}")`,
          backgroundPosition: backgroundPosition,
        }}
        className={styles.hero}
      >
        <div className={styles.heroHead}>{title}</div>
        <div className={styles.heroSub}>
          {subtitleList.map((heroTag, index) => {
            return subtitleList.length !== index + 1 ? (
              <span>{heroTag}&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
            ) : (
              <span>{heroTag}</span>
            );
          })}
        </div>
        <a href='#is'>
          <div className={styles.scrollIndicator}></div>
        </a>
        {isHome && (
          <a href='#notifs' className={styles.notif}>
            <FontAwesomeIcon icon={faBell} />
          </a>
        )}
      </div>
      {isHome && (
        <div className={styles.is} id='is'>
          <div
            style={{
              backgroundImage: `linear-gradient(#00000081, #00000081),
		url("/static/images/ideate-final2.jpg")`,
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
              backgroundImage: `linear-gradient(#00000098, #00000098),
		url("/static/images/innovate-final2.jpg")`,
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
              backgroundImage: `linear-gradient(#00000081, #00000081),
		url("/static/images/inspire-final2.jpg")`,
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
};

export default Hero;
