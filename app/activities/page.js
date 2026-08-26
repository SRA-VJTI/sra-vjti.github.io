import Link from 'next/link';
import { getPage, pageTitle } from '../../lib/content';

const page = getPage('activities');
export const metadata = { title: pageTitle('activities') };

export default function ActivitiesIndex() {
  const { eyebrow, title, desc, cards } = page;

  return (
    <div className="container">
      <div className="page-header">
        <p className="page-header__eyebrow">{eyebrow}</p>
        <h1 className="page-header__title">{title}</h1>
        <p className="page-header__desc">{desc}</p>
      </div>

      <div className="section--sm">
        <div className="activities-grid">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="activity-card">
              <p className="activity-card__title">{card.title}</p>
              <p className="activity-card__desc">{card.desc}</p>
              <span className="activity-card__link">View {card.title} →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
