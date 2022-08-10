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
    <>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsMain}>
          <h1>About Us</h1>
          <p>{AboutUsText}</p>
          <h1>About VJTI</h1>
          <p>{AboutVJTI}</p>
        </div>
        <div className={styles.aboutUsTeam}>
          <p>{AboutUsTeamText}</p>
          <img
            src={`/static/images/${AboutUsImages.newgroup}`}
            alt='SRA Team group photo'
          />
        </div>
        <div className={styles.aboutUsAlumni}>
          <p>{AboutUsAlumniText}</p>
          <img
            src={`/static/images/${AboutUsImages.oldGroup}`}
            alt='SRA Team group photo'
          />
        </div>
      </div>
      <div className={styles.ourProjects}>
        <h1>Projects</h1>
        <Link href='/projects/flagship'>
          <button>
            Flagship Projects &nbsp;<span>&#8594;</span>
          </button>
        </Link>
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
    </>
  );
};

export default HomeAboutUs;
