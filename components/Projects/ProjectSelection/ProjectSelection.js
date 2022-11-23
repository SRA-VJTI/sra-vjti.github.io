import styles from './ProjectSelection.module.scss';
import Link from 'next/link';

const ProjectSelection = () => {
  return (
    <>
      <div className={styles.projSelect}>
        <h1>Projects</h1>
        <div className={styles.projSelList}>
          <Link href='/projects/flagship' className={styles.link}>
            Flagship Projects
          </Link>
          <Link href='/projects/eklavya' className={styles.link}>
            Eklavya Projects
          </Link>
          <Link href='/projects/ongoing' className={styles.link}>
            Ongoing Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectSelection;
