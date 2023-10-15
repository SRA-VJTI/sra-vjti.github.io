import styles from './Publications.module.scss';
import Hero from '../Hero/Hero';
import { PublicationsList } from '../../data';

const Publications = () => {
  return (
    <>
      <Hero
        imgName={'publications-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Publications</>}
        subtitleList={['Research is looking in great depths, flying to new heights, Imagining the unimagined!']}
        isHome={false}
      />
      <div className={styles.publicationsList} id='is'>
        {PublicationsList.map((publicationSec, idx) => {
          return (
            <>
              <div className={styles.publicationsSection} key={`publication_${idx}`}>
                <div className={styles.publicationsSectionTitle}>
                  {publicationSec.name}
                </div>

                {publicationSec.publications.map((startup, idx) => {
                  return (
                    <PublicationCard {...startup} key={`publication_card_${idx}`} />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};


const PublicationCard = ({ title, photo, author, time, short, externalLink }) => {
  return (
    <div onClick={() => (window.location = externalLink)}>
      <div className={styles.publications}>
        <div
          className={styles.publicationsImage}
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className={styles.publicationsDetails}>
          <div className={styles.publicationsTitle}>{title}</div>
          <div className={styles.publicationsAuthor}>{author}</div>
          <div className={styles.publicationsTime}>
            <em>{time}</em>
          </div>
          <div className={styles.publicationsShort}>{short}</div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
