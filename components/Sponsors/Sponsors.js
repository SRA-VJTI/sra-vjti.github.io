import styles from './Sponsors.module.scss';
import Hero from '../Hero/Hero';
import { saveAs } from 'file-saver';
import {
  diamondSponsors,
  goldSponsors,
  silverSponsors,
  levelImages,
  sponsorsText_1,
  sponsorsText_2,
  sponsorsSubText,
  SponsorshipBrochure,
} from '../../data/sponsors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLink,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { faOpencart, faOpenid } from '@fortawesome/free-brands-svg-icons';
import useWindowSize from '../../utils/ResizeHook';
import { useEffect, useState } from 'react';

const Sponsors = () => {
  const [mobileView, setMobileView] = useState(false);
  const [visiblePara, setvisiblePara] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 780) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  }, [size.width]);

  useEffect(() => {
    if (mobileView) {
      setvisiblePara(false);
    } else {
      setvisiblePara(true);
    }
  }, [mobileView]);

  const saveFile = () => {
    saveAs(`/static/documents/${SponsorshipBrochure[0]}`);
  };

  return (
    <>
      <Hero
        imgName={'sponsors-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Sponsor us</>}
        subtitleList={['Help us maintain our legacy of excellence!']}
        isHome={false}
      />
      <div className={styles.activityList} id='is'>
        <div className={styles.reach}>
          <h1>Why Sponsor Us ?</h1>
          <p>{sponsorsText_1}</p>
          {visiblePara ? <p>{sponsorsText_2}</p> : <></>}
          {mobileView ? (
            <button
              className={styles.more}
              onClick={() => setvisiblePara((visiblePara) => !visiblePara)}
            >
              {visiblePara ? (
                <>
                  {'Read Less '}
                  <span>
                    <FontAwesomeIcon icon={faAngleUp} />
                  </span>
                </>
              ) : (
                <>
                  {'Read More '}
                  <span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </>
              )}
            </button>
          ) : (
            <></>
          )}
          <p>
            <b>{sponsorsSubText}</b>
          </p>
          <a>
            <button onClick={saveFile}>
              Brochure{' '}
              <span>
                <FontAwesomeIcon icon={faExternalLink} />
              </span>
            </button>
          </a>
          <h1>Sponsors</h1>
          <img
            src={`/static/images/sponsors/sponsorsLevel/${levelImages[0]}`}
            alt=''
            className={styles.levelImage1}
            key={`level_1`}
          ></img>
          <hr />
          <div className={styles.reachGroup}>
            {diamondSponsors.map((item, idx) => {
              return (
                <a href={item.link}>
                  <img
                    src={`/static/images/sponsors/${item.image}`}
                    alt=''
                    className={styles.diamondImg}
                    key={`alumni_reach_${idx}`}
                  ></img>
                </a>
              );
            })}
          </div>
          <img
            src={`/static/images/sponsors/sponsorsLevel/${levelImages[1]}`}
            alt=''
            className={styles.levelImage2}
            key={`level_2`}
          ></img>
          <hr />
          <div className={styles.reachGroup}>
            {goldSponsors.map((item, idx) => {
              return (
                <a href={item.link}>
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
            alt='Silver Tier'
            className={styles.levelImage3}
            key={`level_3`}
          ></img>
          <hr />
          <div className={styles.reachGroup}>
            {silverSponsors.map((item, idx) => {
              return (
                <a href={item.link}>
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
