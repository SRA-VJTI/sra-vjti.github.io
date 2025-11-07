import { CorporateReachImgNames, CorporateReachLinks } from '../../data';
import styles from './OurCorporates.module.scss';

const OurCorporates = () => {
  return (
    <>
      <div className={styles.reach}>
        <h1>Industrial Reach</h1>
        <div className={styles.reachGroup}>
          {CorporateReachImgNames.map((name, idx) => {
            return (
              <a href={`${CorporateReachLinks[idx]}`}>
                <img
                  src={`/static/images/corporates/${name}`}
                  alt=''
                  className={styles.reachImg}
                  key={`alumni_reach_${idx}`}
                ></img>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurCorporates;
