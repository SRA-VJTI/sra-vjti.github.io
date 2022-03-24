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
        subtitleList={['Launching... into space!']}
        isHome={false}
      />
      <div className={styles.startupsList} id='is'>
        {StartupsList.map((startupSec, idx) => {
          return (
            <>
              <div className={styles.startupSection} key={`startup_${idx}`}>
                <div className={styles.startupsSectionTitle}>
                  {startupSec.name}
                </div>
                {startupSec.startups.map((startup, idx) => {
                  return (
                    <StartupCard {...startup} key={`startup_card_${idx}`} />
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

const StartupCard = ({ imgName, name, sub, externalLink }) => {
  return (
    <div
      onClick={() => (window.location = externalLink)}
      className={styles.startup}
    >
      <div
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        className={styles.startupImg}
      ></div>
      <div className={styles.startupCont}>
        <div className={styles.startupContName}>
          {name}
          {/* <div className={styles.startupIcon}>
            <ExternalLink externalLink={externalLink} />
          </div> */}
        </div>
        <div className={styles.startupContSub}>{sub}</div>
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
