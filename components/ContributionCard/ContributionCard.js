import styles from './ContributionCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

const ContributionCard = ({
  repoName,
  repoIcon,
  description,
  prLink,
  githubLink,
  contributor,
  competition,
}) => {
  const hasIcons = (githubLink && githubLink !== '') || (prLink && prLink !== '');

  return (
    <div className={styles.card}>
      {/* ── Header strip with overhanging avatar ─────────────────── */}
      <div className={styles.header}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${repoIcon})` }}
        />
      </div>

      {/* ── Text body ────────────────────────────────────────────── */}
      <div className={styles.body}>
        <div className={styles.name}>{contributor}</div>

        {/* Repo — always visible */}
        {repoName && (
          <div className={styles.section}>
            <div className={styles.sectionLabel}>Repo</div>
            <div className={styles.pills}>
              <span className={styles.pill}>{repoName}</span>
            </div>
          </div>
        )}

        {/* Program tag — always visible */}
        {competition && (
          <div className={styles.section}>
            <div className={styles.sectionLabel}>Program</div>
            <div className={styles.pills}>
              <span className={styles.pill}>{competition}</span>
            </div>
          </div>
        )}

        {/* Description — revealed on card hover */}
        {description && (
          <div className={styles.descSection}>
            <div className={styles.sectionLabel}>Contribution</div>
            <p className={styles.desc}>{description}</p>
          </div>
        )}

        {/* Social icons — revealed on card hover */}
        {hasIcons && (
          <div className={styles.icons}>
            {githubLink && githubLink !== '' && (
              <a href={githubLink} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} size='lg' />
              </a>
            )}
            {prLink && prLink !== '' && (
              <a href={prLink} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faCodePullRequest} size='lg' />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContributionCard;
