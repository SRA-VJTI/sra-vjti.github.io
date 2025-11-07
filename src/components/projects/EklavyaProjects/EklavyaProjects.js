import React, { useRef, useState, useEffect } from 'react';
import styles from './EklavyaProjects.module.scss';
import Link from 'next/link';
import { EklavyaProjectList } from '@/data';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Hero from '@/components/common/Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EklavyaProjects = () => {
  return (
    <div className={styles.eklavyaProjectsContainer}>
      <Hero
        imgName={'eklavya-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Eklavya Projects</>}
        subtitleList={['Nurturing the future']}
        isHome={false}
      />
      <div className={styles.eklavyaTotal} id='is'>
        <div className={styles.eklavyaYearCloud}>
          {EklavyaProjectList.map((year, idx) => (
            <a
              key={`year_${idx}`}
              className={styles.eklavyaYearTag}
              href={`#${year.year}`}
            >
              {year.year}
            </a>
          ))}
        </div>
      </div>
      {EklavyaProjectList.map((year) => (
        <div
          className={styles.eklavyaYear}
          id={year.year}
          key={`eklavya_projects_${year.year}`}
        >
          <h2>{year.year}</h2>
          <div className={styles.eklavyaYearList}>
            {year.projects.map((proj, idx) => (
              <ProjectCard
                {...proj}
                key={`eklavya_project_${year.year}_${idx}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProjectCard = ({ name, imgName, sub, githubLink }) => {
  const cardRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.clipPath = isOpen
        ? 'circle(120% at 50% 50%)'
        : 'circle(4% at 90.75% 8%)';
    }
  }, [isOpen]);

  return (
    <div className={styles.eklavyaProj}>
      <div
        style={{ backgroundImage: `url("/images/${imgName}")` }}
        className={styles.projPhoto}
      ></div>
      <div className={styles.projName}>{name}</div>
      <div
        ref={cardRef}
        className={`${styles.iCard} ${isOpen ? styles.open : ''}`}
        onClick={toggleCard}
        onMouseEnter={toggleCard}
        onMouseLeave={toggleCard}
      >
        <div className={styles.iButton}>i</div>
        <div className={styles.iInfo}>{sub}</div>
        <a className={styles.iLink} href={githubLink}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default EklavyaProjects;
