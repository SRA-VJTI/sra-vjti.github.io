import Link from 'next/link';
import styles from './TeamsIndex.module.scss';

const TeamsIndex = () => {
  return (
    <div className={styles.teamSelect}>
      <h1>Teams</h1>
      <div className={styles.teamSelList}>
        <Link href='teams/teacherincharge'>
          Teachers Incharge
        </Link>
        <Link href='teams/alumni'>
          Alumni
        </Link>
        <Link href='teams/current'>
          Current Team
        </Link>
      </div>
    </div>
  );
};

export default TeamsIndex;
