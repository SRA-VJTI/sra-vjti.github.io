import { getPage, pageTitle } from '../../../lib/content';

export const metadata = { title: pageTitle('startups') };

export default function Startups() {
  const page = getPage('startups');

  return (
    <div className="container">
      <div className="page-header">
        <p className="page-header__eyebrow">{page.eyebrow}</p>
        <h1 className="page-header__title">{page.title}</h1>
        <p className="page-header__desc">{page.desc}</p>
      </div>

      <div className="section--sm">
        <div className="startup-grid">
          {page.startups.map((s) => (
            <div key={s.name} className="startup-card">
              <p className="startup-card__name">{s.name}</p>
              {s.founder && <p className="startup-card__founder">Founded by {s.founder}</p>}
              {s.description && <p className="startup-card__desc">{s.description}</p>}
              {s.website && (
                <a href={s.website} target="_blank" rel="noopener noreferrer" className="ext-link">
                  Visit website ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
