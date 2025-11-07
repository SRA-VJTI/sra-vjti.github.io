import { AlumniReachImgNames, AlumniReachLinks } from '../../data';
import styles from './HomeReach.module.scss';

const OurReach = () => {
  return (
    <>
      <div className={styles.reach}>
        <h1>University Reach</h1>
        <div className={styles.reachGroup}>
          {AlumniReachImgNames.map((name, idx) => {
            return (
              <a href={`${AlumniReachLinks[idx]}`}>
                <img
                  src={`/static/images/reach/${name}`}
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

export default OurReach;
