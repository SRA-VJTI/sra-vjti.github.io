import { getPage, pageTitle } from '../../lib/content';
import AlumniList from '../../components/AlumniList';

export const metadata = { title: pageTitle('alumni') };

export default function Alumni() {
  const page = getPage('alumni');

  const byYear = {};
  for (const a of page.alumni) (byYear[a.year] ??= []).push(a);
  const years = Object.keys(byYear).sort((a, b) => b - a);

  return (
    <div className="container">
      <div className="page-header">
        <p className="page-header__eyebrow">{page.eyebrow}</p>
        <h1 className="page-header__title">{page.title}</h1>
        <p className="page-header__desc">{page.desc}</p>
      </div>

      <div className="section--sm">
        <AlumniList byYear={byYear} years={years} />

        <ReachSection label="University Reach" items={page.universities} />
        <ReachSection label="Industry Reach" items={page.industry} />
      </div>
    </div>
  );
}

function ReachSection({ label, items }) {
  return (
    <div className="reach-section">
      <p className="reach-section__label">{label}</p>
      <div className="reach-grid">
        {items.map((it) => (
          <a key={it.href} href={it.href} target="_blank" rel="noopener noreferrer" className="reach-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.img} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}
