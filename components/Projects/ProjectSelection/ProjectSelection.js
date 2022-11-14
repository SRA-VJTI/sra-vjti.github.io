import styles from './ProjectSelection.module.scss';
import Link from 'next/link';

const ProjectSelection = () => {
  return (
    <div className={styles.projSelect}>
      <h1>Projects</h1>
      <div className={styles.projSelList}>
        <Link href='/projects/flagship'>
          Flagship Projects
        </Link>
        <Link href='/projects/eklavya'>
          Eklavya Projects
        </Link>
        <Link href='/projects/ongoing'>
          Ongoing Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectSelection;
