import { getPage, pageTitle } from '../../../lib/content';

export const metadata = { title: pageTitle('opensource') };

export default function OpenSource() {
  const page = getPage('opensource');

  const byYear = {};
  for (const c of page.opensource) (byYear[c.year] ??= []).push(c);
  const years = Object.keys(byYear).sort((a, b) => b - a);

  return (
    <div className="container">
      <div className="page-header">
        <p className="page-header__eyebrow">{page.eyebrow}</p>
        <h1 className="page-header__title">{page.title}</h1>
        <p className="page-header__desc">{page.desc}</p>
      </div>

      <div className="section--sm">
        {years.map((year) => (
          <div key={year} className="year-section">
            <p className="year-section__heading">{year}</p>
            <div className="oss-grid">
              {byYear[year].map((c, i) => (
                <div key={`${c.contributor}-${i}`} className="oss-card">
                  <p className="oss-card__contributor">{c.contributor}</p>
                  <p className="oss-card__org">
                    {[c.organization, c.program].filter(Boolean).join(' · ')}
                  </p>
                  {c.description && <p className="oss-card__desc">{c.description}</p>}
                  {(c.pr || c.github) && (
                    <div className="oss-card__links">
                      {c.pr && (
                        <a href={c.pr} target="_blank" rel="noopener noreferrer" className="ext-link">
                          PR ↗
                        </a>
                      )}
                      {c.github && (
                        <a href={c.github} target="_blank" rel="noopener noreferrer" className="ext-link">
                          GitHub ↗
                        </a>
                      )}
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
