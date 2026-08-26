'use client';

import { useEffect, useState } from 'react';
import AlumniCard from './AlumniCard';
import { fetchAlumniFromSheet } from '../utils/fetchAlumniSheet';

const idFor = (a) => `${a.name}-${a.year}`;

function groupByYear(list) {
  const byYear = {};
  for (const a of list) (byYear[a.year] ??= []).push(a);
  const years = Object.keys(byYear).sort((a, b) => b - a);
  return { byYear, years };
}

// `byYear`/`years` come from content/alumni.md at build time and render
// immediately; a live fetch from the alumni Google Sheet then overrides
// them in the browser if it succeeds, so the page never blocks on the
// network and degrades gracefully if the sheet is unreachable.
export default function AlumniList({ byYear, years }) {
  const [openId, setOpenId] = useState(null);
  const [live, setLive] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchAlumniFromSheet()
      .then((list) => {
        if (cancelled || list.length === 0) return;
        setLive(groupByYear(list));
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const data = live ?? { byYear, years };

  return (
    <>
      {data.years.map((year) => (
        <div key={year} className="year-section">
          <p className="year-section__heading">Batch {year}</p>
          <div className="alumni-grid">
            {data.byYear[year].map((a) => {
              const id = idFor(a);
              return (
                <AlumniCard
                  key={id}
                  alum={a}
                  open={openId === id}
                  onToggle={() => setOpenId(openId === id ? null : id)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
