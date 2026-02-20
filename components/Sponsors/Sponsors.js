import styles from './Sponsors.module.scss';
import CatScratchZone from '../CatScratchZone/CatScratchZone';
import { saveAs } from 'file-saver';
import {
  allSponsors,
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
  faHandHoldingDollar,
  faDonate,
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
    saveAs(`/static/documents/PR_brochure_24-25.pdf`, `SRA_Brochure_2k24.pdf`);
  };

  return (
    <>
      <CatScratchZone>
        <div className={styles.pageHeader}>
          <p className={styles.eyebrow}>SRA VJTI</p>
          <h1 className={styles.pageTitle}>Sponsor Us</h1>
          <p className={styles.pageSubtitle}>
            Help us maintain our legacy of excellence!
          </p>
        </div>
      <div className={styles.activityList} id='is'>
        <div className={styles.reach}>
          <div className={styles.textCard}>
            <h1>Why Sponsor Us?</h1>
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
            <p className={styles.subText}>{sponsorsSubText}</p>
          </div>
          <div className={styles.ctaRow}>
            <button className={styles.ctaBtn} onClick={saveFile}>
              Download Brochure&nbsp;
              <FontAwesomeIcon icon={faExternalLink} />
            </button>
            <a href='https://pages.razorpay.com/support-sra' target='_blank'>
              <button className={`${styles.ctaBtn} ${styles.ctaBtnAccent}`}>
                Donate Now&nbsp;
                <FontAwesomeIcon icon={faDonate} />
              </button>
            </a>
          </div>
          <h1>Sponsors</h1>
          <hr />
          <div className={styles.reachGroup}>
            {allSponsors.map((item, idx) => {
              return (
                <a href={item.link} key={`sponsor_${idx}`}>
                  <img
                    src={`/static/images/sponsors/${item.image}`}
                    alt=''
                  ></img>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      </CatScratchZone>
    </>
  );
};

export default Sponsors;
