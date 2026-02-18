import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Card = ({
  index,
  imgName,
  name,
  sub,
  linkedInLink,
  githubLink,
  isAlumni,
  previous,
  current,
}) => {
  const hasStatusData = isAlumni && (previous || current);

  return (
    <div className={`${styles.cont} ${isAlumni ? styles.alumni : ''}`}>
      <div className={styles.top}>
        <div
          className={styles.personImg}
          style={{ backgroundImage: `url("/static/images/${imgName}")` }}
        ></div>
      </div>
      <div className={styles.txtCont}>
        <div className={styles.name}>{name}</div>
        {hasStatusData ? (
          <div className={styles.statusContent}>
            {current && current.length > 0 && (
              <div className={styles.statusSection}>
                <div className={styles.statusLabel}>Now</div>
                <div className={styles.pills}>
                  {current.map((item, i) => (
                    <span
                      key={`c-${i}`}
                      className={`${styles.pill} ${styles.highlight}`}
                    >
                      {item.t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {previous && previous.length > 0 && (
              <div className={`${styles.statusSection} ${styles.hoverOnlySection}`}>
                <div className={styles.statusLabel}>Previously</div>
                <div className={styles.pills}>
                  {previous.map((item, i) => (
                    <span
                      key={`p-${i}`}
                      className={`${styles.pill} ${styles.highlight}`}
                    >
                      {item.t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.desc}>{sub}</div>
        )}
        <div className={styles.icons}>
          <GitHubLink githubLink={githubLink} />
          <LinkedInLink linkedInLink={linkedInLink} />
        </div>
      </div>
    </div>
  );
};

const LinkedInLink = ({ linkedInLink }) => {
  if (linkedInLink !== '') {
    return (
      <a href={linkedInLink} target='blank'>
        <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
      </a>
    );
  } else {
    return null;
  }
};

const GitHubLink = ({ githubLink }) => {
  if (githubLink !== '') {
    return (
      <a href={githubLink} target='blank'>
        <FontAwesomeIcon icon={faGithub} size='lg' />
      </a>
    );
  } else {
    return null;
  }
};
export default Card;
