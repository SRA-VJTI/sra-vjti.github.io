import { AlumniReachImgNames, AlumniReachLinks } from '../../data';
import styles from './HomeReach.module.scss';

const OurReach = () => {
  return (
    <>
      <div className={styles.reach}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Our footprint</p>
          <h1>University Reach</h1>
          <div className={styles.reachGroup}>
            {AlumniReachImgNames.map((name, idx) => {
              return (
                <a
                  href={`${AlumniReachLinks[idx]}`}
                  key={`alumni_reach_${idx}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={`/static/images/reach/${name}`}
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

export default OurReach;
