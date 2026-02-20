import styles from './Publications.module.scss';
import CatScratchZone from '../CatScratchZone/CatScratchZone';
import Footer from '../Footer/Footer';
import { PublicationsList } from '../../data';

const Publications = () => {
  return (
    <CatScratchZone>
      {/* ── Page header ─────────────────────────────────────────────────────── */}
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Research &amp; Innovation</p>
        <h1 className={styles.pageTitle}>Publications</h1>
        <p className={styles.pageSubtitle}>
          Research is looking in great depths, flying to new heights,
          imagining the unimagined.
        </p>
      </header>

      {/* ── Publication sections ─────────────────────────────────────────────── */}
      <div className={styles.publicationsList} id='is'>
        {PublicationsList.map((publicationSec, idx) => (
          <section className={styles.publicationsSection} key={`section_${idx}`}>
            <div className={styles.inner}>
              <p className={styles.sectionEyebrow}>SRA VJTI</p>
              <h2 className={styles.sectionTitle}>{publicationSec.name}</h2>
              <div className={styles.cardsGroup}>
                {publicationSec.publications.map((pub, pidx) => (
                  <PublicationCard {...pub} key={`pub_${pidx}`} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </CatScratchZone>
  );
};

const PublicationCard = ({ title, photo, author, time, short, externalLink }) => (
  <div
    className={styles.card}
    onClick={() => window.open(externalLink, '_blank', 'noopener')}
    role='link'
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && window.open(externalLink, '_blank', 'noopener')}
  >
    {photo && (
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${photo})` }}
      />
    )}
    <div className={styles.cardDetails}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardAuthor}>{author}</div>
      <div className={styles.cardTime}>{time}</div>
      <div className={styles.cardShort}>{short}</div>
      <span className={styles.cardCta}>
        Read paper&nbsp;<span aria-hidden='true'>→</span>
      </span>
    </div>
  </div>
);

export default Publications;
