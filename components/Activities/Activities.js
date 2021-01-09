import styles from './Activities.module.scss';
import Hero from '../Hero/Hero';
import { activitiesList } from '../../data/SiteData';

const Activities = () => {
  return (
    <>
      <Hero imgName={"activities.jpg"} backgroundPosition={"center top"} title={<>Activities</>} subtitleList={["All the fun, passed all along."]} isHome={false}/>
      <div className={styles.activityList} id="is">
        {
          activitiesList.map((activitySec, index) => {
            return (<>
              <div className={styles.activitySection}>
                <div className={styles.activitySectionTitle}>{activitySec.name}</div>
                {
                  activitySec.activities.map((activity, _) => {
                    return <ActivityCard {...activity}/>
                  })
                }
              </div>
            </>)
          })
        }
      </div>
    </>
  );
}

const ActivityCard = ({imgName, name, sub}) => {
  return (
    <div className={styles.activity}>
      <div style={{backgroundImage: `url("/static/images/${imgName}")`}} className={styles.activityImg}></div>
      <div className={styles.activityCont}>
        <div className={styles.activityContName}>{name}</div>
        <div className={styles.activityContSub}>
          {sub}
        </div>
      </div>
    </div>
  );
}

export default Activities;