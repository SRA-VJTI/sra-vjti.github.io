import styles from './ContributionCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

const ContributionCard = ({
  index,
  repoName,
  repoIcon,
  description,
  language,
  languageColor,
  prBadge,
  prLink,
  githubLink,
  contributor,
  competition,
}) => {
  return (
    <div className={styles.cont}>
      <div className={styles.top}>
        <img className={styles.repoImg} src={repoIcon} alt={contributor} />
      </div>
      <div className={styles.txtCont}>
        <div className={styles.name}>{contributor}</div>
        <div className={styles.contributor}>{repoName}</div>
        <div className={styles.desc}>{description}</div>
        <div className={styles.meta}>
          <span className={styles.competition}>{competition}</span>
        </div>
        <div className={styles.icons}>
          <GitHubLink githubLink={githubLink} />
          <PRLink prLink={prLink} />
        </div>
      </div>
    </div>
  );
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

const PRLink = ({ prLink }) => {
  if (prLink !== '') {
    return (
      <a href={prLink} target='blank'>
        <FontAwesomeIcon icon={faCodePullRequest} size='lg' />
      </a>
    );
  } else {
    return null;
  }
};

export default ContributionCard;
