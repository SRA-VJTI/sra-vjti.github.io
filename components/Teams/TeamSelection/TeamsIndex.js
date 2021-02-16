import Link from 'next/link';
import styles from './TeamsIndex.module.scss';

const TeamsIndex = () => {
  return (
    <div className={styles.teamSelect}>
      <h1>Teams</h1>
      <div className={styles.teamSelList}>
        <Link href='teams/teacherincharge'>
          <a>Teachers Incharge</a>
        </Link>
        <Link href='teams/alumni'>
          <a>Alumni</a>
        </Link>
        <Link href='teams/current'>
          <a>Current Team</a>
        </Link>
      </div>
    </div>
  );
};

export default TeamsIndex;
