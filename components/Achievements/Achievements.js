import { Achievementlist } from '../../data';
import Hero from '../Hero/Hero';
import styles from './Achievements.module.scss';

const Achievements = () => {
  return (
    <>
      <Hero
        imgName={'achievements-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Achievements</>}
        subtitleList={["What we're proud of!"]}
        isHome={false}
      />
      <div className={styles.achievements} id='is'>
        {Achievementlist.map((achYear, idx) => {
          return (
            <div className={styles.achYear} key={`year_${idx}`}>
              <h3>{achYear.year}</h3>
              <div className={styles.achList}>
                {achYear.achs.map((ach, idx) => {
                  return (
                    <div className={styles.ach} key={`achievement_${idx}`}>
                      <div
                        style={{
                          backgroundImage: `url("/static/images/${ach.imgName}")`,
                        }}
                        className={styles.achImg}
                      ></div>
                      <div className={styles.achName}>{ach.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Achievements;
