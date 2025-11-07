import styles from './OngoingProjects.module.scss';
import Link from 'next/link';
import React, { useState } from 'react';
import { OngoingProjectsData } from '@/data';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Hero from '@/components/common/Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OngoingProjects = () => {
  const [selectedProject, setSelectedProject] = useState(
    OngoingProjectsData[0]
  );

  return (
    <>
      <Hero
        imgName={'ongoing-hero.jpg'}
        title={<>Ongoing Projects</>}
        subtitleList={['Ingenuinity in progress.']}
        isHome={false}
      />
      <div className={styles.projectSelector}>
        {OngoingProjectsData.map((proj, idx) => (
          <button
            key={idx}
            className={`${styles.projectName} ${proj === selectedProject ? styles.active : ''}`}
            onClick={() => setSelectedProject(proj)}
          >
            {proj.name}
          </button>
        ))}
      </div>
      <div className={styles.ongoingProjects}>
        <OngoingProjectCard
          key={selectedProject.name}
          imgName={selectedProject.imgName}
          name={selectedProject.name}
          sub={selectedProject.sub}
          githubLink={selectedProject.githubLink}
          modelLink={selectedProject.modelLink}
        />
      </div>
    </>
  );
};

const OngoingProjectCard = ({ imgName, name, sub, githubLink, modelLink }) => {
  return (
    <div className={styles.ongoingProj}>
      <div className={styles.ongoingProjCont}>
        <div className={styles.ongoingProjContName}>{name}</div>
        <div className={styles.ongoingProjContSub}>{sub}</div>
        <div className={styles.ongoingProjContLinks}>
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      {imgName && (
        <div
          className={styles.ongoingProjImg}
          style={{
            backgroundImage: `url("/images/${imgName}")`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '400px',
            width: '45%',
          }}
        ></div>
      )}
      {modelLink && (
        <div className={styles.ongoingProjModel}>
          <iframe
            className={styles.iframeModel}
            allowfullscreen
            width='640'
            height='480'
            loading='lazy'
            frameborder='1'
            src={modelLink}
          ></iframe>
        </div>
      )}
    </div>
  );
};
export default OngoingProjects;
