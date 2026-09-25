'use client';

import { useState, useMemo } from 'react';

const ALL = 'All';

// Domain filtering only applies to Ongoing projects + the most recent
// Eklavya batches. Bump RECENT_YEARS_COUNT to widen or narrow that window —
// years are picked automatically (highest years present in the data), so
// adding a new year's projects to content/projects.md needs no other change.
const RECENT_YEARS_COUNT = 1;

export default function ProjectsFilter({ ongoing, eklavya }) {
  const [active, setActive] = useState(ALL);

  const eklavyaYears = useMemo(
    () => Object.keys(eklavya).sort((a, b) => b - a),
    [eklavya]
  );
  const recentYears = eklavyaYears.slice(0, RECENT_YEARS_COUNT);
  const recentEklavya = useMemo(
    () => recentYears.flatMap(year => eklavya[year]),
    [recentYears, eklavya]
  );

  const tags = useMemo(() => {
    const set = new Set();
    ongoing.forEach(p => p.tags?.forEach(t => set.add(t)));
    recentEklavya.forEach(p => p.tags?.forEach(t => set.add(t)));
    return [ALL, ...[...set].sort()];
  }, [ongoing, recentEklavya]);

  const filteredOngoing = active === ALL
    ? ongoing
    : ongoing.filter(p => p.tags?.includes(active));

  const yearsToShow = active === ALL ? eklavyaYears : recentYears;

  return (
    <div>
      <div className="eklavya-filters">
        {tags.map(tag => (
          <button
            key={tag}
            className={`eklavya-filter-btn${active === tag ? ' eklavya-filter-btn--active' : ''}`}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Ongoing */}
      {filteredOngoing.length > 0 && (
        <>
          <p className="section-title">Ongoing</p>
          <div className="project-grid">
            {filteredOngoing.map(p => (
              <div key={p.name} className="project-card">
                <p className="project-card__name">{p.name}</p>
                <p className="project-card__desc">{p.description}</p>
                {p.tags?.length > 0 && (
                  <div className="project-card__tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                )}
                {(p.github || p.notion) && (
                  <div className="project-card__links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="ext-link">
                        GitHub ↗
                      </a>
                    )}
                    {p.notion && (
                      <a href={p.notion} target="_blank" rel="noopener noreferrer" className="ext-link">
                        Notion ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Eklavya */}
      <p className="section-title">Eklavya Projects</p>
      {yearsToShow.map(year => {
        const items = active === ALL
          ? eklavya[year]
          : eklavya[year].filter(p => p.tags?.includes(active));

        if (!items.length) return null;

        return (
          <div key={year} className="year-section">
            <p className="year-section__heading">{year}</p>
            <div className="eklavya-grid">
              {items.map(p => (
                <div key={p.name} className="eklavya-item">
                  <p className="eklavya-item__name">{p.name}</p>
                  <p className="eklavya-item__desc">{p.description}</p>
                  {p.tags?.length > 0 && (
                    <div className="project-card__tags">
                      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="ext-link">
                      GitHub ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
