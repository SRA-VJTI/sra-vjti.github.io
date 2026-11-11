'use client';

import { useMemo, useState } from 'react';

const ALL = 'All';
const CURRENT_NAMES = ['AURA', 'AstraRTOS', 'HackerFab', 'RISC-V GPU', 'Synapse32', 'WiFi CSI'];
const FILTERED_EKLAVYA_YEARS = ['2026', '2025'];

function ProjectCards({ projects, compact = false }) {
  return (
    <div className={compact ? 'eklavya-grid' : 'project-grid'}>
      {projects.map(project => (
        <div
          key={`${project.name}-${project.year ?? 'non-eklavya'}`}
          className={compact ? 'eklavya-item' : 'project-card'}
        >
          <p className={compact ? 'eklavya-item__name' : 'project-card__name'}>
            {project.name}
          </p>
          {project.description && (
            <p className={compact ? 'eklavya-item__desc' : 'project-card__desc'}>
              {project.description}
            </p>
          )}
          {project.tags?.length > 0 && (
            <div className="project-card__tags">
              {project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          )}
          {(project.github || project.notion) && (
            <div className="project-card__links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="ext-link">
                  GitHub ↗
                </a>
              )}
              {project.notion && (
                <a href={project.notion} target="_blank" rel="noopener noreferrer" className="ext-link">
                  Notion ↗
                </a>
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

  const current = ongoing.filter(project => CURRENT_NAMES.includes(project.name));
  const past = ongoing.filter(project => !CURRENT_NAMES.includes(project.name));
  const years = Object.keys(eklavya).sort((a, b) => Number(b) - Number(a));

  // Tag choices include Current, Past, Eklavya 2026 and Eklavya 2025.
  // Older years are an archive and deliberately excluded from the filter.
  const tags = useMemo(() => {
    const available = new Set();
    const filterable = [
      ...current,
      ...past,
      ...FILTERED_EKLAVYA_YEARS.flatMap(year => eklavya[year] ?? []),
    ];
    filterable.forEach(project => project.tags?.forEach(tag => available.add(tag)));
    return [ALL, ...[...available].sort()];
  }, [ongoing, eklavya]);

  const matches = project => active === ALL || project.tags?.includes(active);
  const filteredCurrent = current.filter(matches);
  const filteredPast = past.filter(matches);
  const yearsToShow = active === ALL
    ? years
    : years.filter(year => FILTERED_EKLAVYA_YEARS.includes(year));

  return (
    <div>
      <div className="eklavya-filters">
        {tags.map(tag => (
          <button
            type="button"
            key={tag}
            className={`eklavya-filter-btn${active === tag ? ' eklavya-filter-btn--active' : ''}`}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredCurrent.length > 0 && (
        <section className="year-section">
          <h2 className="section-title">Current Projects</h2>
          <ProjectCards projects={filteredCurrent} />
        </section>
      )}

      {filteredPast.length > 0 && (
        <section className="year-section">
          <h2 className="section-title">Past Projects</h2>
          <ProjectCards projects={filteredPast} compact />
        </section>
      )}

      <section>
        <h2 className="section-title">Eklavya Projects</h2>
        {yearsToShow.map(year => {
          const projects = (eklavya[year] ?? []).filter(matches);
          if (projects.length === 0) return null;
          return (
            <div className="year-section" key={year}>
              <h3 className="year-section__heading">{year}</h3>
              <ProjectCards projects={projects} compact />
            </div>
          );
        })}
      </section>
    </div>
  );
}
