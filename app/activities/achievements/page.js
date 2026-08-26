import { getPage, pageTitle } from '../../../lib/content';

export const metadata = { title: pageTitle('achievements') };

export default function Achievements() {
  const page = getPage('achievements');

  const byYear = {};
  for (const a of page.achievements) (byYear[a.year] ??= []).push(a);
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
            <div>
              {byYear[year].map((item, i) => (
                <div key={`${item.title}-${i}`} className="achievement-item">
                  <p className="achievement-item__title">{item.title}</p>
                  {item.meta && <p className="achievement-item__meta">{item.meta}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
