import styles from './OngoingProjects.module.scss';
import Link from 'next/link';
import { OngoingProjectsData } from '../../../data';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            />
          );
        })}
      </div>
    </>
  );
};

const OngoingProjectCard = ({ imgName, name, sub, githubLink }) => {
  return (
    <div className={styles.ongoingProj}>
      <div
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        className={styles.ongoingProjImg}
      ></div>
      <div className={styles.ongoingProjCont}>
        <div className={styles.ongoingProjContName}>{name}</div>
        <div className={styles.ongoingProjContSub}>{sub}</div>
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
