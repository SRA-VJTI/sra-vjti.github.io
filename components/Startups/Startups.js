import styles from './Startups.module.scss';
import Hero from '../Hero/Hero';
import { StartupsList } from '../../data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Startups = () => {
  return (
    <>
      <Hero
        imgName={'startups-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Startups</>}
        subtitleList={['lorem ipsum dolor sit am']}
        isHome={false}
      />
      <div className={styles.startupsList} id='is'>
        {StartupsList.map((startupSec, idx) => {
          return (
            <>
              <div className={styles.startupSection} key={`activity_${idx}`}>
                <div className={styles.startupsSectionTitle}>
                  {startupSec.name}
                </div>
                {startupSec.startups.map((activity, idx) => {
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

const ActivityCard = ({ imgName, name, sub, externalLink }) => {
  return (
    <div onClick={() => window.location = externalLink} className={styles.activity}>
      <div
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        className={styles.activityImg}
      ></div>
      <div className={styles.activityCont}>
        <div className={styles.activityContName}>
          {name}
          {/* <div className={styles.activityIcon}>
            <ExternalLink externalLink={externalLink} />
          </div> */}
        </div>
        <div className={styles.activityContSub}>{sub}</div>
      </div>
    </div>
  );
};

// const ExternalLink = ({ externalLink }) => {
//   if (externalLink !== '') {
//     return (
//       <a href={externalLink} target='blank'>
//         <FontAwesomeIcon icon={faExternalLinkAlt} />
//       </a>
//     );
//   } else {
//     return null;
//   }
// };

export default Startups;
