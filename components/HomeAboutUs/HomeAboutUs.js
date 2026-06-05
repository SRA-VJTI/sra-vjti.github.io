import {
  AboutUsText,
  AboutVJTI,
  AboutUsTeamText,
  AboutUsAlumniText,
  AboutUsImages,
} from '../../data';
import styles from './HomeAboutUs.module.scss';
import Link from 'next/link';

const HomeAboutUs = () => {
  return (
    <div className={styles.container} id='About-us'>
      <div className={styles.card}>
        <h2>About Us</h2>
        <p>{AboutUsText}</p>
      </div>
      <div className={styles.card}>
        <h2>Projects</h2>
        <div className={styles.buttonGroup}>
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
    </div>
  );
};

export default HomeAboutUs;
