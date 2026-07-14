'use client';

import { useState } from 'react';
import AlumniCard from './AlumniCard';

const idFor = (a) => `${a.name}-${a.year}`;

export default function AlumniList({ byYear, years }) {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      {years.map((year) => (
        <div key={year} className="year-section">
          <p className="year-section__heading">Batch {year}</p>
          <div className="alumni-grid">
            {byYear[year].map((a) => {
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
