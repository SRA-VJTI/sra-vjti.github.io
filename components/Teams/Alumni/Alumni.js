import styles from './Alumni.module.scss';
import Card from '../../Card/Card';
import CatScratchZone from '../../CatScratchZone/CatScratchZone';
import Footer from '../../Footer/Footer';
import { AlumniList } from '../../../data';
import { useState } from 'react';

let updatedList = [];

const years = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
  2011, 2010, 2009,
];

AlumniList.forEach((year) => {
  year.alumnis.forEach((alumni) => {
    updatedList.push({
      name: alumni.name,
      imgName: alumni.imgName,
      sub: alumni.sub,
      linkedInLink: alumni.linkedInLink,
      githubLink: alumni.githubLink,
      year: year.year,
      previous: alumni.previous,
      current: alumni.current,
    });
  });
});

let filteredList = updatedList;

const Alumni = () => {
  const [clicked, setClicked] = useState(false);
  const [filYear, setFilYear] = useState('Show all');
  const [key, setKey] = useState('');

  const toggle = () => {
    setClicked(!clicked);
  };

  const selYear = (year) => {
    setFilYear(year);

    if (year != 'Show all') {
      filteredList = updatedList.filter((alumni) => {
        return alumni.year == year;
      });
    } else {
      filteredList = updatedList;
    }

    setClicked(!clicked);
  };

  const selKeyword = (ev) => {
    const value = ev.currentTarget.value.toLowerCase();
    setKey(value);

    if (value != '') {
      filteredList = updatedList.filter((alumni) => {
        const nameMatch = alumni.name.toLowerCase().includes(value);
        const subMatch = alumni.sub
          ? `${alumni.sub}`.toLowerCase().includes(value)
          : false;
        const prevMatch = alumni.previous
          ? alumni.previous.some((p) => p.t.toLowerCase().includes(value))
          : false;
        const currMatch = alumni.current
          ? alumni.current.some((c) => c.t.toLowerCase().includes(value))
          : false;
        return nameMatch || subMatch || prevMatch || currMatch;
      });
    } else {
      setFilYear('Show all');
      filteredList = updatedList;
    }
  };

  return (
    <>
      <CatScratchZone>
        <div className={styles.pageHeader}>
          <p className={styles.eyebrow}>SRA VJTI</p>
          <h1 className={styles.pageTitle}>Alumni</h1>
          <p className={styles.pageSubtitle}>
            Lighting the way for generations to come.
          </p>
        </div>
        <div className={styles.filterWrapper}>
          <div className={styles.filter} id='is'>
            <input
              className={styles.search}
              type='search'
              placeholder='Search by keyword'
              onChange={(ev) => selKeyword(ev)}
            />
            <div className={styles.dropdown}>
              <button onClick={toggle}>
                Filter By Year:{' '}
                <span className={styles.selYear}>{filYear}</span>
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
        </div>

        <div className={styles.cardGrp}>
          {filteredList.map((alumni, index) => {
            return (
              <Card
                key={`alumni_member_${index}`}
                index={index}
                name={alumni.name}
                sub={alumni.sub}
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

        <Footer />
      </CatScratchZone>
    </>
  );
};

export default Alumni;
