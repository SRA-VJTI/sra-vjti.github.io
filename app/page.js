import Link from 'next/link';
import { getPage } from '../lib/content';
import HeroLines from '../components/HeroLines';
import HeroModel from '../components/HeroModel';
import ReachMarquee from '../components/ReachMarquee';
import SponsorsRow from '../components/SponsorsRow';
import AboutEvents from '../components/AboutEvents.js';
import AboutProjects from '../components/AboutProjects.js';

// Homepage uses the site title verbatim (no "— suffix").
const site = getPage('site');
export const metadata = { title: site.title };

export default function Home() {
  const { hero, ctas, about } = getPage('home');

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HeroLines />
        <div className="container hero__grid">
          <div className="hero__copy">
          <p className="hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">
            {hero.title.split('\n').filter(Boolean).map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="hero__sub">{hero.sub}</p>
          <div className="hero__actions">
            {ctas.map((c, i) => (
              <Link
                key={c.href}
                href={c.href}
                className={`btn ${i === 0 ? 'btn--solid' : 'btn--outline'}`}
              >
                {c.label}
              </Link>
            ))}
          </div>
          </div>

          <HeroModel model="random" />
        </div>
      </section>

      {/* About */}
      <section className="section about">
        <div className="container">
          <div className="about__grid">
            {about.map((block) => (
              <div key={block.eyebrow}>
                <p className="about__eyebrow">{block.eyebrow}</p>
                <p className="about__text">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutEvents/ >

      <AboutProjects/ >

      {/* Sponsors first: they carry more weight than the ambient reach strip */}
      <SponsorsRow />

      {/* Where alumni end up, as a slow scrolling logo strip */}
      <ReachMarquee />
    </>
  );
}
