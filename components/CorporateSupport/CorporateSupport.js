import styles from './CorporateSupport.module.scss';
import Hero from '../Hero/Hero';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { saveAs } from 'file-saver';
import {
  CorpListImages,
  CorpLinks,
  changesMadeThroughCSR,
  CorpSupport,
  CorporateSupport,
  VoteOfThanks,
  facilities,
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
import { useEffect, useState, useRef } from 'react';
import { CSSProperties } from 'react';

const arrowStylesLeft = {
  position: 'absolute',
  top: '.7em',
  bottom: 'auto',
  padding: '0em 0.6em 0em 0.4em',
  backgroundColor: '#131516',
  borderRadius: '20%',
  borderColor: 'black',
  zIndex: 2,
};
const arrowStylesRight = {
  position: 'absolute',
  top: '.7em',
  bottom: 'auto',
  padding: '0em 0.7em 0em 0.3em',
  backgroundColor: '#131516',
  borderRadius: '20%',
  borderColor: 'black',
  zIndex: 2,
};
const Sponsors = () => {
  const [mobileView, setMobileView] = useState(false);
  const [visiblePara, setvisiblePara] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 650) {
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
        title={<>CSR Support</>}
        subtitleList={[
          'Nurturing Minds, Igniting Discovery, Building Nations: Corporate Support for Education and Research Excellence.',
        ]}
        isHome={false}
      />
      <div className={styles.activityList} id='is'>
        <div className={styles.reach}>
          <h1>Join Our Expedition: Our Spark, Your Impact!</h1>
          {visiblePara ? <p>{CorporateSupport}</p> : <></>}
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
          <h1>Our Corporate Partners</h1>
          <hr />
          <div>
            {CorpListImages.map((item_i, idx_i) => {
              return (
                <div>
                  <div className={styles.CorpDiv} key={`corp_${idx_i}`}>
                    <img
                      src={`/static/images/corporateSupport/logo/${item_i.image}`}
                      alt=''
                      className={styles.CorpImage}
                    ></img>
                    <div className={styles.vl} />
                    <a className={styles.CorpText}>{item_i.msg}</a>
                  </div>

                  <div className={styles.Carousel}>
                    <div
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {
                        // For webview
                        !mobileView ? (
                          <Carousel
                            renderIndicator={(
                              clickHandler,
                              isSelected,
                              index
                            ) => {
                              return (
                                <li
                                  onClick={clickHandler}
                                  className={`ind ${
                                    isSelected ? 'active' : ''
                                  }`}
                                  key={index}
                                  role='button'
                                />
                              );
                            }}
                            pauseOnHover={true}
                            showIndicators={true}
                            // renderIndicator={(onClickHandler, isSelected, index, label) => {}}
                            showThumbs={false}
                            showStatus={false}
                            swipeable={true}
                            autoPlay={true}
                            infiniteLoop={true}
                            renderArrowPrev={(onClickHandler, hasPrev) =>
                              hasPrev && (
                                <div onClick={onClickHandler}>
                                  <a
                                    className={`control-arrow`}
                                    style={{
                                      ...arrowStylesLeft,
                                      marginTop: '25%',
                                      left: '1em',
                                      opacity: 0.9,
                                    }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faCaretLeft}
                                      size='2x'
                                    />
                                  </a>
                                </div>
                              )
                            }
                            renderArrowNext={(onClickHandler, hasNext) =>
                              hasNext && (
                                <div onClick={onClickHandler}>
                                  <a
                                    className={`control-arrow`}
                                    style={{
                                      ...arrowStylesRight,
                                      marginTop: '25%',
                                      right: '1em',
                                      opacity: 0.9,
                                    }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faCaretRight}
                                      size='2x'
                                    />
                                  </a>
                                </div>
                              )
                            }
                          >
                            {facilities.map((item, idx) => {
                              return (
                                <div
                                  key={`csr_${idx}`}
                                  className={styles.CaroImg}
                                >
                                  <div>
                                    <img
                                      src={`/static/images/corporateSupport/facilityUpdate/${item.image}`}
                                      alt=''
                                      className={styles.facilitiesUpdate}
                                    ></img>
                                  </div>
                                  {isHovered && (
                                    <a
                                      className={styles.hoverText}
                                      onMouseEnter={() => setIsHovered(true)}
                                    >
                                      {item.Description}
                                    </a>
                                  )}
                                </div>
                              );
                            })}
                          </Carousel>
                        ) : (
                          // For mobile view, we don't render large arrows
                          <CorpCard
                            {...facilities}
                            key={`csr_mobile`}
                          ></CorpCard>
                        )
                      }
                    </div>

                    <p className={styles.equipments}>
                      Some of the new equipments and facilities added
                    </p>

                    <div className={styles.Carousel_items}>
                      {
                        // For webview
                        !mobileView ? (
                          <Carousel
                            renderIndicator={(
                              clickHandler,
                              isSelected,
                              index
                            ) => {
                              return (
                                <li
                                  onClick={clickHandler}
                                  className={`ind ${
                                    isSelected ? 'active' : ''
                                  }`}
                                  key={index}
                                  role='button'
                                />
                              );
                            }}
                            pauseOnHover={true}
                            showIndicators={true}
                            // renderIndicator={(onClickHandler, isSelected, index, label) => {}}
                            showThumbs={false}
                            showStatus={false}
                            swipeable={true}
                            autoPlay={true}
                            infiniteLoop={true}
                            renderArrowPrev={(onClickHandler, hasPrev) =>
                              hasPrev && (
                                <div onClick={onClickHandler}>
                                  <a
                                    className={`control-arrow`}
                                    style={{
                                      ...arrowStylesLeft,
                                      marginTop: '20%',
                                      left: '0.2em',
                                      opacity: 0.4,
                                    }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faCaretLeft}
                                      size='1x'
                                    />
                                  </a>
                                </div>
                              )
                            }
                            renderArrowNext={(onClickHandler, hasNext) =>
                              hasNext && (
                                <div onClick={onClickHandler}>
                                  <a
                                    className={`control-arrow`}
                                    style={{
                                      ...arrowStylesRight,
                                      marginTop: '20%',
                                      right: '0.2em',
                                      opacity: 0.4,
                                    }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faCaretRight}
                                      size='1x'
                                    />
                                  </a>
                                </div>
                              )
                            }
                          >
                            {facilities.map((item, idx) => {
                              return (
                                <div
                                  key={`csr_${idx}`}
                                  className={styles.CSR_Facility}
                                >
                                  <div>
                                    <img
                                      src={`/static/images/corporateSupport/facilityUpdate/${item.image}`}
                                      alt=''
                                      className={styles.changesMadeThroughCSR}
                                    ></img>

                                    <a>{item.Description}</a>
                                  </div>
                                </div>
                              );
                            })}
                          </Carousel>
                        ) : (
                          // For mobile view, we don't render large arrows

                          <Carousel
                            showIndicators={false}
                            // renderIndicator={(onClickHandler, isSelected, index, label) => {}}
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}
                            swipeable={true}
                            autoPlay={true}
                            infiniteLoop={true}
                            transitionTime={100}
                          >
                            {changesMadeThroughCSR.map((item, idx) => {
                              return (
                                <div
                                  key={`csr_${idx}`}
                                  className={styles.CSR_Facility}
                                >
                                  <img
                                    src={`/static/images/corporateSupport/facilityUpdate/${item.image}`}
                                    alt=''
                                    className={styles.changesMadeThroughCSR}
                                  ></img>
                                  <a>{item.Description}</a>
                                </div>
                              );
                            })}
                          </Carousel>
                        )
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const CorpCard = ({ image, Description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onIClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      swipeable={true}
      autoPlay={isOpen ? false : true}
      infiniteLoop={true}
      showArrows={false}
    >
      {facilities.map((item, idx) => {
        return (
          <div key={`csr_${idx}`}>
            <div className={styles.CorpSupportMob}>
              <div
                style={{
                  backgroundImage: `url("/static/images/corporateSupport/facilityUpdate/${item.image}")`,
                }}
                className={styles.facilitiesPic}
              ></div>
              <div
                className={styles.iCard}
                style={
                  isOpen
                    ? { clipPath: 'circle(120% at 86% 10%)' }
                    : { clipPath: 'circle(4% at 86% 10%)' }
                }
                onTouchStartCapture={onIClick}
              >
                <div className={styles.iButton}>i</div>
                <div className={styles.iInfo}>{item.Description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Sponsors;
