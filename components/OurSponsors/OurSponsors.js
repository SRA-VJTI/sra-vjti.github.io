import { SponsorListImages, SponsorLinks } from '../../data/sponsors';
import styles from './OurSponsors.module.scss';
const OurSponsors = () => {
  return (
    <>
      <div className={styles.reach}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Powered by</p>
          <h1>Sponsors</h1>
          <div className={styles.reachGroup}>
            {SponsorListImages.map((name, idx) => {
              return (
                <a href={`${SponsorLinks[idx]}`} key={`sponsor_${idx}`}>
                  <img
                    src={`/static/images/sponsors/${name}`}
                    alt=''
                    className={styles.reachImg}
                  ></img>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSponsors;
