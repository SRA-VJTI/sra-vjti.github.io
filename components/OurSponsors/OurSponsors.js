import SponsorListImages from '../../data/sponsors';
import styles from './OurSponsors.module.scss';

const OurSponsors = () => {
  return (
    <>
      <div className={styles.reach}>
        <h1>Our Sponsors</h1>
        <div className={styles.reachGroup}>
          {SponsorListImages.map((name, idx) => {
            return (
              <img
                src={`/static/images/sponsors/${name}`}
                alt=''
                className={styles.reachImg}
                key={`alumni_reach_${idx}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurSponsors;
