import styles from './Faculty.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const faculty = ({ index, imgName, name, sub, linkedInLink }) => {
  return (
    <div className={index % 2 == 0 ? styles.faculty : styles.facultyr}>
      <div
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        className={styles.facultyImg}
      ></div>
      <div className={styles.facultyCont}>
        <div className={styles.facultyContName}>{name}</div>
        <div className={styles.facultyContSub}>{sub}</div>
        <div className={styles.links}>
          <a href={linkedInLink}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default faculty;
