import styles from './OngoingProjects.module.scss';
import React, { useState } from 'react';
import Link from 'next/link';
import { OngoingProjectsData } from '../../../data';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const OngoingProjects = () => {
  const [selectedProject, setSelectedProject] = useState(OngoingProjectsData[0]);

  return (
    <>
      <Hero
        imgName={'ongoing-hero.jpg'}
        title={<>Ongoing Projects</>}
        subtitleList={['Ingenuity in progress.']}
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
          model_src={selectedProject.model_src}
          model_link={selectedProject.model_link}
        />
      </div>
    </>
  );
};


const OngoingProjectCard = ({ imgName, name, sub, githubLink, model_src, model_link }) => {
  return (
    <div className={styles.ongoingProj}>
      <div className={styles.ongoingProjCont}>
        <div className={styles.ongoingProjContName}>{name}</div>
        <div className={styles.ongoingProjContSub}>{sub}</div>
        <div className={styles.ongoingProjContLinks}>
          <a href={githubLink}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        
        <div 
            style={{ backgroundImage: `url("/static/images/${imgName}")` } }
            
            className={styles.ongoingProjImg}
          ></div> 
          
          {model_link && model_src && (
            <div className="sketchfab-embed-wrapper" align="center">
              <iframe
                title={name}
                frameborder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                width="590"
                height="360"
                src={model_src}
              ></iframe>
              <p align="center">
                <a href={model_link} target="_blank" rel="nofollow">3D model of {name}</a>
              </p>
            </div>
          )}
         
        </div>
        
        
      
    </div>
  );
};
export default OngoingProjects;
