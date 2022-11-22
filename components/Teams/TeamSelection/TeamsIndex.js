import Link from 'next/link';
import styles from './TeamsIndex.module.scss';
import Head from 'next/head';

const TeamsIndex = () => {
  return (
    <>
      <Head>
        <title>Team | SRA VJTI</title>
      </Head>
      <div className={styles.teamSelect}>
        <h1>Teams</h1>
        <div className={styles.teamSelList}>
          <Link href='teams/teacherincharge' className={styles.link}>
            Teachers Incharge
          </Link>
          <Link href='teams/alumni' className={styles.link}>
            Alumni
          </Link>
          <Link href='teams/current' className={styles.link}>
            Current Team
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeamsIndex;
