import {reachImgNames} from '../../data/SiteData'
import styles from './HomeReach.module.scss';

const HomeReach = () => {

  return (
    <>
      <div className={styles.reach}>
        <h1>Our Reach</h1>
        <div className={styles.reachGroup}>
          {
            reachImgNames.map((name, i) => {
              return <img src={`/static/images/reach/${name}`} alt="" className={styles.reachImg} />
            })
          }
        </div>
      </div>
    </>
    
  )
}

export default HomeReach;