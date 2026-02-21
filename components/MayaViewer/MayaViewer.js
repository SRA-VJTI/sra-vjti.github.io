import styles from './MayaViewer.module.scss';

const CARDS = [
  {
    head: 'Ideate',
    sub: 'Changing the world, one solution at a time.',
  },
  {
    head: 'Innovate',
    sub: 'Creativity is thinking up new things. Innovation is doing new things.',
  },
  {
    head: 'Inspire',
    sub: "Don't inspire by being perfect, inspire by embracing your imperfections.",
  },
];

export default function MayaViewer() {
  return (
    <section className={styles.section} id='is'>
      <div className={styles.cards}>
        {CARDS.map(({ head, sub }) => (
          <div key={head} className={styles.card}>
            <h2 className={styles.cardHead}>{head}</h2>
            <p className={styles.cardSub}>{sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
