import { AboutUsText, AboutVJTI } from '../../data';
import styles from './HomeAboutUs.module.scss';
import Link from 'next/link';

const HomeAboutUs = () => {
  return (
    <>
      <div className={styles.aboutUs} id='About-us'>
        <div className={styles.aboutCards}>
          <div className={styles.aboutCard}>
            <p className={styles.eyebrow}>Who we are</p>
            <h2>About Us</h2>
            <p>{AboutUsText}</p>
          </div>
          <div className={styles.aboutCard}>
            <p className={styles.eyebrow}>Our institution</p>
            <h2>About VJTI</h2>
            <p>{AboutVJTI}</p>
          </div>
        </div>
      </div>
      <div className={styles.ourProjects}>
        <p className={styles.eyebrow}>What we build</p>
        <h1>Projects</h1>
        <div className={styles.ctaGroup}>
          <Link href='/projects/eklavya'>
            <button>
              Eklavya Projects &nbsp;<span>&#8594;</span>
            </button>
          </Link>
          <Link href='/projects/ongoing'>
            <button>
              Ongoing Projects &nbsp;<span>&#8594;</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeAboutUs;
