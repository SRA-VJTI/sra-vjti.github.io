import styles from './Alumni.module.scss';
import Card from '../Card/Card';
import { AlumniList as FallbackAlumniList } from '../../data';
import { fetchAlumniFromSheet } from '../../utils/fetchAlumniSheet';
import { useEffect, useMemo, useState } from 'react';

function flattenFallback() {
  const list = [];
  FallbackAlumniList.forEach((yearGroup) => {
    yearGroup.alumnis.forEach((alumni) => {
      list.push({
        name: alumni.name,
        imgName: alumni.imgName,
        linkedInLink: alumni.linkedInLink,
        githubLink: alumni.githubLink,
        year: yearGroup.year,
        previous: alumni.previous || [],
        current: alumni.current || (alumni.sub ? [{ t: alumni.sub }] : []),
      });
    });
  });
  return list;
}

const Alumni = () => {
  const [alumniList, setAlumniList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [filYear, setFilYear] = useState('Show all');
  const [key, setKey] = useState('');

  useEffect(() => {
    let cancelled = false;

    fetchAlumniFromSheet()
      .then((list) => {
        if (cancelled) return;
        if (list.length === 0) throw new Error('Empty sheet response');
        setAlumniList(list);
      })
      .catch(() => {
        if (!cancelled) setAlumniList(flattenFallback());
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const years = useMemo(() => {
    const uniqueYears = [...new Set(alumniList.map((a) => a.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, [alumniList]);

  const filteredList = useMemo(() => {
    let list = alumniList;

    if (filYear !== 'Show all') {
      list = list.filter((alumni) => alumni.year === filYear);
    }

    if (key) {
      list = list.filter((alumni) => {
        const nameMatch = alumni.name.toLowerCase().includes(key);
        const prevMatch = alumni.previous.some((p) =>
          p.t.toLowerCase().includes(key)
        );
        const currMatch = alumni.current.some((c) =>
          c.t.toLowerCase().includes(key)
        );
        return nameMatch || prevMatch || currMatch;
      });
    }

    return list;
  }, [alumniList, filYear, key]);

  const toggle = () => {
    setClicked(!clicked);
  };

  const selYear = (year) => {
    setFilYear(year);
    setClicked(false);
  };

  const selKeyword = (ev) => {
    const value = ev.currentTarget.value.toLowerCase();
    setKey(value);
    if (value === '') setFilYear('Show all');
  };

  return (
    <>
      <div className={styles.filter} id='is'>
        <input
          className={styles.search}
          type='search'
          placeholder='Search name of Alumni'
          onChange={(ev) => selKeyword(ev)}
        />
        <div className={styles.dropdown}>
          <button onClick={toggle}>
            Filter By Year: <span className={styles.selYear}>{filYear}</span>
          </button>
          <div
            className={styles.options}
            style={{ display: clicked ? 'flex' : 'none' }}
          >
            <div
              className={styles.option}
              onClick={() => {
                selYear('Show all');
              }}
            >
              Show all
            </div>
            {years.map((year, index) => {
              return (
                <div
                  key={index}
                  className={styles.option}
                  onClick={() => {
                    selYear(`${year}`);
                  }}
                >
                  {year}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {loading ? (
        <div className={styles.loading}>Loading alumni...</div>
      ) : (
        <div className={styles.cardGrp}>
          {filteredList.map((alumni, index) => {
            return (
              <Card
                key={`alumni_member_${index}`}
                index={index}
                name={alumni.name}
                imgName={alumni.imgName}
                linkedInLink={alumni.linkedInLink}
                githubLink={alumni.githubLink}
                isAlumni={true}
                previous={alumni.previous}
                current={alumni.current}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Alumni;
