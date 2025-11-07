import Image from 'next/image';
import styles from './Person.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { memo } from 'react';

const Person = memo(
  ({ index, imgName, name, sub, linkedInLink, githubLink }) => {
    return (
      <div className={index % 2 === 0 ? styles.person : styles.personr}>
        <div className={styles.personImg}>
          <Image
            src={`/static/images/${imgName}`}
            alt={`${name} - ${sub}`}
            width={200}
            height={200}
            loading='lazy'
            quality={85}
            style={{ objectFit: 'cover' }}
          />
        </div>
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
  }
);

const LinkedInLink = memo(({ linkedInLink }) => {
  if (!linkedInLink) return null;
  return (
    <a
      href={linkedInLink}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='LinkedIn Profile'
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
  );
});

const GitHubLink = memo(({ githubLink }) => {
  if (!githubLink) return null;
  return (
    <a
      href={githubLink}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='GitHub Profile'
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  );
});

Person.displayName = 'Person';
LinkedInLink.displayName = 'LinkedInLink';
GitHubLink.displayName = 'GitHubLink';

export default Person;
