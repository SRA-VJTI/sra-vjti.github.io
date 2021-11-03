import styles from './Activities.module.scss';
import Hero from '../Hero/Hero';
import { ActivitiesList } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const Activities = () => {
  return (
    <>
      <Hero
        imgName={'activities-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Activities</>}
        subtitleList={['All the fun, passed all along.']}
        isHome={false}
      />
      <div className={styles.activityList} id='is'>
        {ActivitiesList.map((activitySec, idx) => {
          return (
            <>
              <div className={styles.activitySection} key={`activity_${idx}`}>
                <div className={styles.activitySectionTitle}>
                  {activitySec.name}
                </div>
                {activitySec.activities.map((activity, idx) => {
                  return (
                    <ActivityCard {...activity} key={`activity_card_${idx}`} />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const ActivityCard = ({ imgName, name, sub, githubLink, youtubeLink }) => {
  return (
    <div className={styles.activity}>
      <div
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        className={styles.activityImg}
      ></div>
      <div className={styles.activityCont}>
        <div className={styles.activityContName}>
          {name}
          <div className={styles.activityIcon}>
            <YoutubeLink youtubeLink={youtubeLink} />
            <GitHubLink githubLink={githubLink} />
          </div>
        </div>
        <div className={styles.activityContSub}>{sub}</div>
      </div>
    </div>
  );
};

const YoutubeLink = ({ youtubeLink }) => {
  if (youtubeLink !== '') {
    return (
      <a href={youtubeLink} target='blank'>
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    );
  } else {
    return null;
  }
};

const GitHubLink = ({ githubLink }) => {
  if (githubLink !== '') {
    return (
      <a href={githubLink} target='blank'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    );
  } else {
    return null;
  }
};

export default Activities;
