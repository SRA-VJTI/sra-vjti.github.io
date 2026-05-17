import styles from './TopBar.module.scss';
import Link from 'next/link';

const tabs = [
  { name: 'About Us', link: '/#About-us', external: false },
  { name: 'People', link: 'https://sravjti.in/webring/', external: true },
  { name: 'Work', link: '/projects/ongoing/', external: false },
];

const TopBar = () => (
  <div className={styles.topBar}>
    {tabs.map((tab, idx) =>
      tab.external ? (
        <a
          key={idx}
          href={tab.link}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.tab}
        >
          {tab.name}
        </a>
      ) : (
        <Link key={idx} href={tab.link} className={styles.tab}>
          {tab.name}
        </Link>
      )
    )}
  </div>
);

export default TopBar;
