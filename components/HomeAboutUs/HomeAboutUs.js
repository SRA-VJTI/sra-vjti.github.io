import {
  AboutUsText,
  AboutVJTI,
  AboutUsTeamText,
  AboutUsAlumniText,
  AboutUsImages,
} from '../../data';
import styles from './HomeAboutUs.module.scss';
import Link from 'next/link';
import {
  AboutUsCurrentTextLeft,
  AboutUsCurrentTextRight,
} from '../../data/aboutus';

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
        <div className={styles.aboutUsCurrent} id='notifs'>
          <h1> What is currently going on in SRA? </h1>
          <div className={styles.aboutUsFlex}>
            <div className={styles.left}>
              <div className={styles.notifsMain}>
                {AboutUsCurrentTextLeft.map((notif, idx) => {
                  return (
                    <div className={styles.notif} key={`notification_${idx}`}>
                      {notif}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.notifsMain}>
                {AboutUsCurrentTextRight.map((notif, idx) => {
                  return (
                    <div className={styles.notif} key={`notification_${idx}`}>
                      {notif}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ourProjects}>
        <h1>Our Projects</h1>
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
