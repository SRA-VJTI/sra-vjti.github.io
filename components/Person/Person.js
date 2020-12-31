import styles from './Person.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Person = ({index, imgName, name, sub, linkedInLink, githubLink}) => {
  return (
    <div className={(index%2==0) ? styles.person : styles.personr}>
      <div style={{backgroundImage: `url("/static/images/${imgName}")`}} className={styles.personImg}></div>
      <div className={styles.personCont}>
        <div className={styles.personContName}>{name}</div>
        <div className={styles.personContSub}>
          {sub}
        </div>
        <div className={styles.links}>
          <a href={linkedInLink}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={githubLink}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Person;