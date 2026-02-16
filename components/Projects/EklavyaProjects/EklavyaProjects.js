import React, { useRef, useState, useEffect } from 'react';
import styles from './EklavyaProjects.module.scss';
import Link from 'next/link';
import { EklavyaProjectList } from '../../../data';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EklavyaProjects = () => {
  const [activeYear, setActiveYear] = useState('2025');

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
            <span
              key={`year_${idx}`}
              className={`${styles.eklavyaYearTag} ${
                activeYear === year.year ? styles.activeYearTag : ''
              }`}
              onClick={() => setActiveYear(year.year)}
              style={{ cursor: 'pointer' }}
            >
              {year.year}
            </span>
          ))}
        </div>
      </div>
      {EklavyaProjectList.filter((year) => year.year === activeYear).map(
        (year) => (
          <div
            className={`${styles.eklavyaYear} ${styles.animate}`}
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
        )
      )}
    </div>
  );
};

const ProjectCard = ({ name, imgName, sub, githubLink }) => {
  const cardRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle or Set state based on hover
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.clipPath = isOpen
        ? 'circle(120% at 50% 50%)' // Fully open
        : 'circle(0% at 90.75% 8%)'; // Fully hidden (no ball)
    }
  }, [isOpen]);

  return (
    <div
      className={styles.eklavyaProj}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        className={styles.projPhoto}
      ></div>
      <div className={styles.projName}>{name}</div>
      <div
        ref={cardRef}
        className={`${styles.iCard} ${isOpen ? styles.open : ''}`}
      >
        <div className={styles.iInfo}>{sub}</div>
        <a className={styles.iLink} href={githubLink}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default EklavyaProjects;
