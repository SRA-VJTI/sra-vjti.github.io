import styles from './ProjectSelection.module.scss';
import Link from 'next/link';

const ProjectSelection = () => {
  return (
    <div className={styles.projSelect}>
			<h1>Our projects</h1>
			<div className={styles.projSelList}>
				<Link href="/projects/flagship"><a>Flagship Projects</a></Link>
				<Link href="/projects/eklavya"><a>Eklavya Projects</a></Link>
			</div>
		</div>
  );
}

export default ProjectSelection;