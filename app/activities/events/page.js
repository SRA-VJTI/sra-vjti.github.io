import { getPage, pageTitle } from '../../../lib/content';

const page = getPage('events');
export const metadata = { title: pageTitle('events') };

export default function Events() {
  const byCategory = {};
  for (const e of page.events) (byCategory[e.category] ??= []).push(e);
  for (const cat of Object.keys(byCategory)) {
    byCategory[cat].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  }

  const categories = page.categoryOrder.filter((c) => byCategory[c]);

  return (
    <div className="container">
      <div className="page-header">
        <p className="page-header__eyebrow">{page.eyebrow}</p>
        <h1 className="page-header__title">{page.title}</h1>
        <p className="page-header__desc">{page.desc}</p>
      </div>

      <div className="section--sm">
        {categories.map((cat) => (
          <div key={cat} className="year-section">
            <p className="year-section__heading">{cat}s</p>
            <div className="event-grid">
              {byCategory[cat].map((e) => (
                <div key={e.name} className="event-card">
                  <div className="event-card__body">
                    <p className="event-card__name">{e.name}</p>
                    {e.description && (
                      <p className="event-card__desc">{e.description}</p>
                    )}
                    <div className="event-card__links">
                      {e.github && (
                        <a href={e.github} target="_blank" rel="noopener noreferrer" className="ext-link">
                          GitHub ↗
                        </a>
                      )}
                      {e.notion && (
                        <a href={e.notion} target="_blank" rel="noopener noreferrer" className="ext-link">
                          Resources ↗
                        </a>
                      )}
                      {e.youtube && (
                        <a href={e.youtube} target="_blank" rel="noopener noreferrer" className="ext-link">
                          YouTube ↗
                        </a>
                      )}
                      {e.blog && (
                        <a href={e.blog} target="_blank" rel="noopener noreferrer" className="ext-link">
                          Website ↗
                        </a>
                      )}
                    </div>
                  </div>
                  {e.image && (
                    <div className="event-card__img-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={e.image} alt={e.name} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
