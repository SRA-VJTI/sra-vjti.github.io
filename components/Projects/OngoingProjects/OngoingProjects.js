import styles from './OngoingProjects.module.scss';
import Link from 'next/link';
import React, { useState } from 'react';
import { OngoingProjectsData } from '../../../data';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OngoingProjects = () => {
  const [selectedProject, setSelectedProject] = useState(OngoingProjectsData[0])

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
  )
}

const OngoingProjectCard = ({ imgName, name, sub, githubLink, modelLink }) => {
  return (
    <div className={styles.ongoingProj}>
      <div className={styles.ongoingProjCont}>
        <div className={styles.ongoingProjContName}>{name}</div>
        <div className={styles.ongoingProjContSub}>{sub}</div>
        <div className={styles.ongoingProjContLinks}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      {imgName && ( <div
        className={styles.ongoingProjImg}
        style={{
          backgroundImage: `url("/static/images/${imgName}")`,
          backgroundPosition: 'center',
          backgroundSize: 'contain', // Adjust if needed (can use 'cover' too)
          backgroundRepeat: 'no-repeat',
          height: '400px', // Ensure the container has a fixed height
          width: '45%', // Ensure the image takes up a certain width of the container
        }}

      ></div>)}
      {modelLink && (
        <div style={{ paddingRight: 50}}>
        <iframe 
          allowfullscreen  
          width="640"
          height="480" 
          loading="lazy" 
          frameborder="1" 
          src={modelLink}>
            </iframe>
        </div>)}
      
    </div>
  )
}
export default OngoingProjects;
