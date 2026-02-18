import { useState, useEffect, useCallback } from 'react';
import styles from './OngoingProjects.module.scss';
import { OngoingProjectsData } from '../../../data';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Hero from '../../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OngoingProjects = () => {
  const [current, setCurrent] = useState(0);
  const total = OngoingProjectsData.length;

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

  const proj = OngoingProjectsData[current];

  return (
    <>
      <Hero
        imgName={'ongoing-hero.jpg'}
        title={<>Ongoing Projects</>}
        subtitleList={['Ingenuinity in progress.']}
        isHome={false}
      />
      <div className={styles.projectBar}>
        {OngoingProjectsData.map((proj, idx) => (
          <span
            key={idx}
            className={`${styles.projectTag} ${idx === current ? styles.activeTag : ''}`}
            onClick={() => setCurrent(idx)}
          >
            {proj.name}
          </span>
        ))}
      </div>

      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={prev} aria-label="Previous project">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className={styles.card}>
          {proj.imgNames ? (
            <div className={styles.cardImage}>
              <div className={styles.cardImageGrid}>
                <img src={`/static/images/${proj.imgNames[0]}`} alt={`${proj.name} 1`} className={styles.cardImageTop} />
                <div className={styles.cardImageRow}>
                  {proj.imgNames.slice(1).map((name, i) => (
                    <img key={i} src={`/static/images/${name}`} alt={`${proj.name} ${i + 2}`} />
                  ))}
                </div>
              </div>
            </div>
          ) : proj.imgName && (
            <div className={styles.cardImage}>
              <img
                src={`/static/images/${proj.imgName}`}
                alt={proj.name}
              />
            </div>
          )}
          <div className={styles.cardBody}>
            <h2>{proj.name}</h2>
            <p>{proj.sub}</p>
            <div className={styles.cardLinks}>
              {proj.githubLink && (
                <a href={proj.githubLink} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
              {proj.notionLink && (
                <a href={proj.notionLink} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
            </div>
          </div>
        </div>

        <button className={styles.arrowRight} onClick={next} aria-label="Next project">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className={styles.dots}>
          {OngoingProjectsData.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OngoingProjects;

/* ===== OLD GRID-BASED COMPONENT (commented out) =====

const OngoingProjects = () => {
  return (
    <>
      <Hero
        imgName={'ongoing-hero.jpg'}
        title={<>Ongoing Projects</>}
        subtitleList={['Ingenuinity in progress.']}
        isHome={false}
      />
      <div className={styles.cardGrid}>
        {OngoingProjectsData.map((proj, idx) => (
          <OngoingProjectCard
            key={idx}
            name={proj.name}
            sub={proj.sub}
            githubLink={proj.githubLink}
            notionLink={proj.notionLink}
          />
        ))}
      </div>
    </>
  );
};

const OngoingProjectCard = ({ name, sub, githubLink, notionLink }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <h3>{name}</h3>
        <p>{sub}</p>
        <div className={styles.cardLinks}>
          {githubLink && (
            <a href={githubLink} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {notionLink && (
            <a href={notionLink} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

===== END OLD COMPONENT ===== */
