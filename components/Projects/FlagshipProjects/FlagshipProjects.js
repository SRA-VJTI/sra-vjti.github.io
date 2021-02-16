import styles from './FlagshipProjects.module.scss';
import Link from 'next/link';
import { FlagshipProjectsData } from '../../../data';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlagshipProjects = () => {
  return (
    <>
      <Hero
        imgName={'flagship-hero-final.jpg'}
        title={<>Flagship Projects</>}
        subtitleList={['Innovation exemplified.']}
        isHome={false}
      />
      <div className={styles.flagshipProjects} id='is'>
        {FlagshipProjectsData.map((proj, idx) => {
          return (
            <FlagshipProjectCard
              key={`flagship_project_${idx}`}
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

const FlagshipProjectCard = ({ imgName, name, sub, githubLink }) => {
  return (
    <div className={styles.flagshipProj}>
      <div
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        className={styles.flagshipProjImg}
      ></div>
      <div className={styles.flagshipProjCont}>
        <div className={styles.flagshipProjContName}>{name}</div>
        <div className={styles.flagshipProjContSub}>{sub}</div>
        <div className={styles.flagshipProjContLinks}>
          <a href={githubLink}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlagshipProjects;
