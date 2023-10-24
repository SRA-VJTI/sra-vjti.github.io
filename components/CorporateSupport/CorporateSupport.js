import styles from './CorporateSupport.module.scss';
import Hero from '../Hero/Hero';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
  faCaretRight,
  faCaretLeft,
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
        imgName={'corpSupport.webp'}
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
          <Carousel
            showIndicators={true}
            // renderIndicator={(onClickHandler, isSelected, index, label) => {}}
            showThumbs={false}
            showStatus={false}
            swipeable={true}
            autoPlay={true}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <div onClick={onClickHandler}>
                  <a
                    className={`control-arrow`}
                    style={{
                      marginTop: '25%',
                      marginBottom: '37%',
                      marginLeft: '2%',
                      opacity: 0.9,
                      hover: {
                        background: 'none',
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faCaretLeft} size='2x' />
                  </a>
                </div>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <div onClick={onClickHandler}>
                  <a
                    className={`control-arrow`}
                    style={{
                      marginTop: '25%',
                      marginBottom: '37%',
                      marginRight: '2%',
                      right: '0',
                      opacity: 0.9,
                    }}
                  >
                    <FontAwesomeIcon icon={faCaretRight} size='2x' />
                  </a>
                </div>
              )
            }
          >
            {changesMadeThroughCSR.map((item, idx) => {
              return (
                <div key={`csr_${idx}`}>
                  <img
                    src={`/static/images/corporateSupport/facilityUpdate/${item.image}`}
                    alt=''
                    className={styles.diamondImg}
                  ></img>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
