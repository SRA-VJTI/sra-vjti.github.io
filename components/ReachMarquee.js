import { getPage } from '../lib/content';

// Two continuously scrolling logo rows, drifting in opposite directions.
// Pure CSS: the track holds the list twice and translates by exactly -50%,
// so the second copy lands where the first started and the loop is seamless.
function Row({ items, direction, duration }) {
  return (
    <div className="reach-marquee__row">
      <div
        className={`reach-marquee__track reach-marquee__track--${direction}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((it, i) => (
          <a
            key={`${it.href}-${i}`}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className="reach-marquee__logo"
            // The duplicated half is decoration; keep it off the tab order
            // and out of the accessibility tree.
            aria-hidden={i >= items.length ? 'true' : undefined}
            tabIndex={i >= items.length ? -1 : undefined}
          >
            <img src={it.img} alt="" loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ReachMarquee() {
  const { universities, industry } = getPage('alumni');

  return (
    <section className="section--sm reach-marquee" aria-label="Where SRA alumni go">
      <div className="container">
        <p className="reach-marquee__label">Industry &amp; University Reach</p>
      </div>
      <Row items={universities} direction="left" duration={80} />
      <Row items={industry} direction="right" duration={60} />
    </section>
  );
}
