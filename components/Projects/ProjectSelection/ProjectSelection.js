import styles from './ProjectSelection.module.scss';
import Link from 'next/link';
import CatScratchZone from '../../CatScratchZone/CatScratchZone';
import Footer from '../../Footer/Footer';

const ProjectSelection = () => {
  return (
    <CatScratchZone>
      <section className={styles.projSelect}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>SRA VJTI</p>
          <h1 className={styles.pageTitle}>Projects</h1>
          <p className={styles.pageSubtitle}>Innovation · Research · Impact</p>
          <div className={styles.cardRow}>
            <Link href='/projects/eklavya' className={styles.card}>
              <p className={styles.cardEyebrow}>Mentorship Program</p>
              <h2 className={styles.cardTitle}>Eklavya Projects</h2>
              <p className={styles.cardBody}>
                Student-mentored robotics projects nurturing the next generation
                of engineers through hands-on learning.
              </p>
              <span className={styles.ctaLink}>Explore →</span>
            </Link>

            <Link href='/projects/ongoing' className={styles.card}>
              <p className={styles.cardEyebrow}>Active Research</p>
              <h2 className={styles.cardTitle}>Ongoing Projects</h2>
              <p className={styles.cardBody}>
                Cutting-edge research and development projects currently in
                progress at SRA VJTI.
              </p>
              <span className={styles.ctaLink}>Explore →</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </CatScratchZone>
  );
};

export default ProjectSelection;
