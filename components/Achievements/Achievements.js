import { achsList } from '../../data/SiteData';
import Hero from '../Hero/Hero';
import styles from './Achievements.module.scss'

const Achievements = () => {

  return (
    <>
      <Hero imgName={"achievements-hero-final.jpg"} backgroundPosition={"center top"} title={<>Achievements</>} subtitleList={["What we're proud of!"]} isHome={false}/>
      <div className={styles.achievements} id="is">
        {
          achsList.map((achYear, index) => {
            return <div className={styles.achYear}>
              <h3>{achYear.year}</h3>
              <div className={styles.achList}>
                {
                  achYear.achs.map((ach, _) => {
                    return <div className={styles.ach}>
                      <div style={{backgroundImage: `url("/static/images/${ach.imgName}")`}} className={styles.achImg}></div>
                      <div className={styles.achName}>{ach.name}</div>
                    </div>
                  })
                }
              </div>
            </div>
          })
        }
      </div>
    </>
  );
}

export default Achievements;