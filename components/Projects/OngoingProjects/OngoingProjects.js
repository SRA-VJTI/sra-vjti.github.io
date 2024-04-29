import styles from './OngoingProjects.module.scss';
import Link from 'next/link';
import { OngoingProjectsData } from '../../../data';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {model_render} from '../../../data';



const OngoingProjects = () => {
  return (
    <>
      <Hero
        imgName={'ongoing-hero.jpg'}
        title={<>Ongoing Projects</>}
        subtitleList={['Ingenuinity in progress.']}
        isHome={false}
      />
      <div className={styles.ongoingProjects} id='is'>
        {OngoingProjectsData.map((proj, idx) => {
          return (
            <OngoingProjectCard
              key={`ongoing_project_${idx}`}
              imgName={proj.imgName}
              name={proj.name}
              sub={proj.sub}
              githubLink={proj.githubLink}
              model_src={proj.model_src}
              model_link={proj.model_link}
            />
          
            );
        })}
      </div>
       
    </>
  );
};



const OngoingProjectCard = ({ imgName, name, sub, githubLink, model_src, model_link }) => {
  return (
    <div className={styles.ongoingProj}>
      <div
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        className={styles.ongoingProjImg}
      ></div>
      <div className={styles.ongoingProjCont}>
        <div className={styles.ongoingProjContName}>{name}</div>
        <div className={styles.ongoingProjContSub}>{sub}</div>
        {model_link && model_src && (
          <div class="sketchfab-embed-wrapper" align="center" >
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
              <a href={model_link} target="_blank" rel="nofollow">
                3d model of {name}
              </a>
            </p>
          </div>
        )}
        <div className={styles.ongoingProjContLinks}>
          <a href={githubLink}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
       
      </div>
    </div>
  );
};
export default OngoingProjects;
