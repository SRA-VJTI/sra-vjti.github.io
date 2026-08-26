import { getPage, pageTitle } from '../../lib/content';

export const metadata = { title: pageTitle('support') };

export default function Support() {
  const page = getPage('support');

  return (
    <div className="container">
      <div className="page-header">
        <p className="page-header__eyebrow">{page.eyebrow}</p>
        <h1 className="page-header__title">{page.title}</h1>
        <p className="page-header__desc">{page.desc}</p>
      </div>

      <div className="section--sm">
        <div className="support-cols">
          {/* CSR */}
          <div>
            <p className="support-block__title">{page.csr.title}</p>
            <p className="support-block__body">{page.csr.body}</p>

            <div className="csr-block">
              <p className="csr-block__amount">{page.csr.highlight.amount}</p>
              <p className="csr-block__label">{page.csr.highlight.label}</p>
              <p className="csr-block__desc">{page.csr.highlight.desc}</p>
            </div>
            {page.csr.brochureHref && (
              <a
                href={page.csr.brochureHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
              >
                Sponsorship Brochure ↗
              </a>
            )}
          </div>

          {/* Sponsor */}
          <div>
            <p className="support-block__title">{page.sponsor.title}</p>
            <p className="support-block__body">{page.sponsor.body}</p>
            <a href={page.sponsor.ctaHref} className="btn btn--solid">
              {page.sponsor.ctaLabel}
            </a>

            <p
              style={{
                marginTop: 'var(--s8)',
                marginBottom: 'var(--s4)',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              Current Sponsors
            </p>
            <div className="sponsors-list">
              {page.sponsors.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-chip"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
