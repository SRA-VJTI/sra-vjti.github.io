import styles from './EklavyaProjects.module.scss';
import Link from 'next/link';
import { EklavyaProjectList } from '../../../data';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

const EklavyaProjects = () => {
  return (
    <>
      <Hero
        imgName={'eklavya-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Eklavya Projects</>}
        subtitleList={['Nurturing the future']}
        isHome={false}
      />
      <div className={styles.eklavyaTotal} id='is'>
        <div className={styles.eklavyaYearCloud}>
          {EklavyaProjectList.map((year, idx) => {
            return (
              <a
                key={`year_${idx}`}
                className={styles.eklavyaYearTag}
                href={`#${year.year}`}
              >
                {year.year}
              </a>
            );
          })}
        </div>
      </div>

      {EklavyaProjectList.map((year, idx) => {
        return (
          <div
            className={styles.eklavyaYear}
            id={year.year}
            key={`eklavya_projects_${year.year}`}
          >
            <h2>{year.year}</h2>
            <div className={styles.eklavyaYearList}>
              {year.projects.map((proj, idx) => {
                return (
                  <ProjectCard
                    {...proj}
                    key={`eklavya_project_${year.year}_${idx}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

const ProjectCard = ({ name, imgName, sub, githubLink }) => {
  const cardRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const onIClick = () => {
    if (isOpen) {
      cardRef.current.style.clipPath = 'circle(4% at 90.75% 8%)';
      setIsOpen(false);
    } else {
      cardRef.current.style.clipPath = 'circle(120% at 90.75% 8%)';
      setIsOpen(true);
    }
  };

  return (
    <div className={styles.eklavyaProj}>
      <div
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        className={styles.projPhoto}
      ></div>
      <div className={styles.projName}>{name}</div>
      <div
        ref={cardRef}
        className={styles.iCard}
        onMouseEnter={onIClick}
        onMouseLeave={onIClick}
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
