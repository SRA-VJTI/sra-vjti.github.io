import { getPage, pageTitle } from '../../../lib/content';

export const metadata = { title: pageTitle('publications') };

export default function Publications() {
  const page = getPage('publications');

  return (
    <div className="container">
      <div className="page-header">
        <p className="page-header__eyebrow">{page.eyebrow}</p>
        <h1 className="page-header__title">{page.title}</h1>
        <p className="page-header__desc">{page.desc}</p>
      </div>

      <div className="section--sm">
        <div className="pub-list">
          {page.publications.map((p) => (
            <div key={p.title} className="pub-item">
              <p className="pub-item__title">{p.title}</p>
              <p className="pub-item__authors">{p.authors.join(', ')}</p>
              <div className="pub-item__meta">
                <span className="pub-item__venue">{p.venue}</span>
                <span className="tag">{p.date}</span>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="ext-link">
                    Read paper ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
