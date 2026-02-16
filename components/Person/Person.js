import styles from './Person.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Person = ({ index, imgName, name, sub, linkedInLink, githubLink }) => {
  return (
    <div className={index % 2 == 0 ? styles.person : styles.personr}>
      <div
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        className={styles.personImg}
      ></div>
      <div className={styles.personCont}>
        <div className={styles.personContName}>{name}</div>
        <div className={styles.personContSub}>{sub}</div>
        <div className={styles.links}>
          <LinkedInLink linkedInLink={linkedInLink} />
          <GitHubLink githubLink={githubLink} />
        </div>
      </div>
    </div>
  );
};

const LinkedInLink = ({ linkedInLink }) => {
  if (linkedInLink !== '') {
    return (
      <a href={linkedInLink} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    );
  } else {
    return null;
  }
};

const GitHubLink = ({ githubLink }) => {
  if (githubLink !== '') {
    return (
      <a href={githubLink} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    );
  } else {
    return null;
  }
};
export default Person;
