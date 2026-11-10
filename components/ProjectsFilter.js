'use client';

import { useMemo, useState } from 'react';

const ALL = 'All';
const CURRENT_NAMES = ['AURA', 'AstraRTOS', 'HackerFab', 'RISC-V GPU', 'Synapse32', 'WiFi CSI'];
const FEATURED_YEAR = '2026';

function ProjectCards({ projects, archive = false }) {
  return (
    <div className={archive ? 'eklavya-grid' : 'project-grid'}>
      {projects.map(p => (
        <div key={`${p.name}-${p.year ?? 'non-eklavya'}`} className={archive ? 'eklavya-item' : 'project-card'}>
          <p className={archive ? 'eklavya-item__name' : 'project-card__name'}>{p.name}</p>
          {p.description && (
            <p className={archive ? 'eklavya-item__desc' : 'project-card__desc'}>{p.description}</p>
          )}
          {p.tags?.length > 0 && (
            <div className="project-card__tags">
              {p.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          )}
          {(p.github || p.notion) && (
            <div className="project-card__links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="ext-link">GitHub ↗</a>
              )}
              {p.notion && (
                <a href={p.notion} target="_blank" rel="noopener noreferrer" className="ext-link">Notion ↗</a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProjectsFilter({ ongoing, eklavya }) {
  const [active, setActive] = useState(ALL);
  const eklavya2026 = eklavya[FEATURED_YEAR] ?? [];
  const archiveYears = Object.keys(eklavya)
    .filter(year => Number(year) < Number(FEATURED_YEAR))
    .sort((a, b) => Number(b) - Number(a));

  // Current projects are stored in ongoing; Eklavya 2026 only contains its remaining batch entries.
  const current = CURRENT_NAMES.map(name => ongoing.find(p => p.name === name)).filter(Boolean);
  const past = ongoing.filter(p => !CURRENT_NAMES.includes(p.name));

  const tags = useMemo(() => {
    const available = new Set();
    [...current, ...eklavya2026].forEach(p => p.tags?.forEach(t => available.add(t)));
    return [ALL, ...[...available].sort()];
  }, [current, eklavya2026]);

  const matches = p => active === ALL || p.tags?.includes(active);
  const filteredCurrent = current.filter(matches);
  const filteredEklavya = eklavya2026.filter(matches);

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

      <p className="section-title">Current Projects</p>
      <ProjectCards projects={filteredCurrent} />

      {/* The year-section wrapper gives the same vertical gap before Past Projects
          and Eklavya Archive as the other project sections. */}
      <div className="year-section">
        <p className="section-title">Eklavya 2026</p>
        <ProjectCards projects={filteredEklavya} archive />
      </div>

      <div className="year-section">
        <p className="section-title">Past Projects</p>
        <ProjectCards projects={past} archive />
      </div>

      <p className="section-title">Eklavya Archive</p>
      {archiveYears.map(year => (
        <div className="year-section" key={year}>
          <p className="year-section__heading">{year}</p>
          <ProjectCards projects={eklavya[year]} archive />
        </div>
      ))}
    </div>
  );
}
