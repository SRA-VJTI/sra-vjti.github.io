import styles from './Sponsors.module.scss';
import Hero from '../Hero/Hero';
import {
  SponsorListImages,
  SponsorLinks,
  platinumSponsors,
  goldSponsors,
  silverSponsors,
  levelImages,
} from '../../data/sponsors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Sponsors = () => {
  return (
    <>
      <Hero
        imgName={'sponsors-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Sponsors us</>}
        subtitleList={[
          'Our sponsors helps us maintain our legacy of excellence',
        ]}
        isHome={false}
      />
      <div className={styles.activityList} id='is'>
        <div className={styles.reach}>
          <a
            href='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf'
            target={'_blank'}
            download={'brochure'}
          >
            <button>
              Download Brochure{' '}
              <span>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </button>
          </a>
          <h1>Sponsors</h1>
          <img
            src={`/static/images/sponsors/sponsorsLevel/${levelImages[0]}`}
            alt=''
            className={styles.levelImage}
            key={`level_1`}
          ></img>
          <div className={styles.reachGroup}>
            {platinumSponsors.map((item, idx) => {
              return (
                <a href={`${SponsorLinks[idx]}`}>
                  <img
                    src={`/static/images/sponsors/${item.image}`}
                    alt=''
                    className={styles.platinumImg}
                    key={`alumni_reach_${idx}`}
                  ></img>
                </a>
              );
            })}
          </div>
          <img
            src={`/static/images/sponsors/sponsorsLevel/${levelImages[1]}`}
            alt=''
            className={styles.levelImage}
            key={`level_1`}
          ></img>
          <div className={styles.reachGroup}>
            {goldSponsors.map((item, idx) => {
              return (
                <a href={`${SponsorLinks[idx]}`}>
                  <img
                    src={`/static/images/sponsors/${item.image}`}
                    alt=''
                    className={styles.goldImg}
                    key={`alumni_reach_${idx}`}
                  ></img>
                </a>
              );
            })}
          </div>
          <img
            src={`/static/images/sponsors/sponsorsLevel/${levelImages[2]}`}
            alt=''
            className={styles.levelImage}
            key={`level_1`}
          ></img>
          <div className={styles.reachGroup}>
            {silverSponsors.map((item, idx) => {
              return (
                <a href={`${SponsorLinks[idx]}`}>
                  <img
                    src={`/static/images/sponsors/${item.image}`}
                    alt=''
                    className={styles.silverImg}
                    key={`alumni_reach_${idx}`}
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

export default Sponsors;
