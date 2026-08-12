import Link from 'next/link';
import { getPage } from '../lib/content';

// Sponsors get their own titled section rather than a footnote under the
// reach rows. Static, not a marquee: with four entries a scrolling track
// would loop every few seconds. Entries without an `img` fall back to text.
export default function SponsorsRow() {
  const { sponsors } = getPage('support');

  if (!sponsors?.length) return null;

  return (
    <section className="section--sm sponsors">
      <div className="container">
        <div className="sponsors__head">
          <h2 className="sponsors__title">Our Sponsors</h2>
          <Link href="/support" className="sponsors__cta">
            Become a sponsor
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <ul className="sponsors__list">
          {sponsors.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={s.img ? 'sponsors__logo' : 'sponsors__name'}
                aria-label={s.img ? s.name : undefined}
              >
                {s.img ? (
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className={s.invert ? 'is-inverted' : undefined}
                    // Optional per-logo trim, for artwork that reads heavier
                    // than the rest at the same box size.
                    style={
                      s.scale
                        ? {
                            maxWidth: `${s.scale * 100}%`,
                            maxHeight: `${s.scale * 100}%`,
                          }
                        : undefined
                    }
                  />
                ) : (
                  s.name
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
