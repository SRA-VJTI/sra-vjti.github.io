import { useState, useEffect, useCallback } from 'react';
import styles from './Activities.module.scss';
import Hero from '../Hero/Hero';
import { ActivitiesList } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faChevronLeft, faChevronRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const CardLinks = ({ card }) => (
  <div className={styles.cardLinks}>
    {card.youtubeLink && (
      <a href={card.youtubeLink} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    )}
    {card.githubLink && (
      <a href={card.githubLink} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    )}
    {card.blogLink && (
      <a href={card.blogLink} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faBlog} />
      </a>
    )}
    {card.notionLink && (
      <a href={card.notionLink} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    )}
  </div>
);

const Activities = () => {
  const [current, setCurrent] = useState(0);
  const total = ActivitiesList.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  const act = ActivitiesList[current];

  return (
    <>
      <Hero
        imgName={'activities-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Activities</>}
        subtitleList={['All the fun, passed all along.']}
        isHome={false}
      />

      <div className={styles.projectBar}>
        {ActivitiesList.map((item, idx) => (
          <span
            key={idx}
            className={`${styles.projectTag} ${idx === current ? styles.activeTag : ''}`}
            onClick={() => setCurrent(idx)}
          >
            {item.shortName || item.name}
          </span>
        ))}
      </div>

      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={prev} aria-label="Previous activity">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {act.cards ? (
          <div className={styles.cardGroup}>
            {act.cards.map((card, i) => (
              <div key={i} className={styles.card}>
                {card.imgNames ? (
                  <div className={styles.cardImage}>
                    <div className={styles.cardImageGrid}>
                      <img src={`/static/images/${card.imgNames[0]}`} alt={`${card.name} 1`} className={styles.cardImageTop} />
                      <div className={styles.cardImageRow}>
                        {card.imgNames.slice(1).map((name, j) => (
                          <img key={j} src={`/static/images/${name}`} alt={`${card.name} ${j + 2}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : card.imgName && (
                  <div className={styles.cardImage}>
                    <img src={`/static/images/${card.imgName}`} alt={card.name} />
                  </div>
                )}
                <div className={styles.cardBody}>
                  <h2>{card.name}</h2>
                  <p>{card.sub}</p>
                  <CardLinks card={card} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.card}>
            {act.imgName && (
              <div className={styles.cardImage}>
                <img src={`/static/images/${act.imgName}`} alt={act.name} />
              </div>
            )}
            <div className={styles.cardBody}>
              <h2>{act.name}</h2>
              <p>{act.sub}</p>
              <CardLinks card={act} />
            </div>
          </div>
        )}

        <button className={styles.arrowRight} onClick={next} aria-label="Next activity">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className={styles.dots}>
          {ActivitiesList.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to activity ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Activities;
