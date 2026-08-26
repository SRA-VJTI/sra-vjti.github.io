'use client';

export default function AlumniCard({ alum, open, onToggle }) {
  const hasPrev = alum.previous?.length > 0;
  const hasLinks = alum.linkedin || alum.github;
  const expandable = hasPrev || hasLinks;

  return (
    <div className={`alumni-card${open ? ' alumni-card--open' : ''}`}>
      <button
        type="button"
        className="alumni-card__head"
        onClick={() => expandable && onToggle()}
        aria-expanded={open}
        disabled={!expandable}
      >
        <div className="alumni-card__head-text">
          <p className="alumni-card__name">{alum.name}</p>
          {alum.current?.map((c, i) => (
            <p key={i} className="alumni-card__position">{c}</p>
          ))}
        </div>
        {expandable && (
          <svg
            className={`alumni-card__chevron${open ? ' alumni-card__chevron--open' : ''}`}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {open && expandable && (
        <div className="alumni-card__body">
          {hasPrev && (
            <>
              <p className="alumni-card__label">Previously</p>
              <ul className="alumni-card__list">
                {alum.previous.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </>
          )}
          {hasLinks && (
            <div className="alumni-card__links">
              {alum.linkedin && (
                <a href={alum.linkedin} target="_blank" rel="noopener noreferrer" className="ext-link">
                  LinkedIn ↗
                </a>
              )}
              {alum.github && (
                <a href={alum.github} target="_blank" rel="noopener noreferrer" className="ext-link">
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
