import styles from './CorporateSupport.module.scss';
import Hero from '../Hero/Hero';
import { Carousel } from 'react-responsive-carousel';
import { saveAs } from 'file-saver';
import {
  CorpListImages,
  CorpLinks,
  changesMadeThroughCSR,
  CorpSupport,
  CorpText_1,
  CorpText_2,
  MessageToCurrentCorp_1,
} from '../../data/corporateSupport';
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

  return (
    <>
      <Hero
        imgName={'corporate_support.jpg'}
        backgroundPosition={'center top'}
        title={<>Corporate Support</>}
        subtitleList={[
          'Grateful for the corporate champions who empower researchers to turn dreams into discoveries, and ideas into impact',
        ]}
        isHome={false}
      />
      <div className={styles.activityList} id='is'>
        <div className={styles.reach}>
          <h1>We are now updated!</h1>
          <p>{CorpText_1}</p>
          {visiblePara ? <p>{CorpText_2}</p> : <></>}
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
            <b>{CorpText_1}</b>
          </p>
          <h1>Our Corporate Partners</h1>
          <img
            src={`/static/images/corporateSupport/logo/${CorpListImages[0]}`}
            alt=''
            className={styles.CorpImage}
            key={`level_1`}
          ></img>
          <hr />
          <Carousel>
            <div className={styles.reachGroup}>
              {changesMadeThroughCSR.map((item, idx) => {
                return (
                  <a href={item.link}>
                    <img
                      src={`/static/images/corporateSupport/facilityUpdate/${item.image}`}
                      alt=''
                      className={styles.diamondImg}
                      key={`alumni_reach_${idx}`}
                    ></img>
                  </a>
                );
              })}
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
