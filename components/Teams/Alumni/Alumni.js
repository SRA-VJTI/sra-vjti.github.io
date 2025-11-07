import { useState, useMemo } from 'react';
import Hero from '../../Hero/Hero';
import styles from './Alumni.module.scss';
import Person from '../../Person/Person';
import { AlumniList } from '../../../data';

const ITEMS_PER_PAGE = 3; // Show 3 years at a time

const Alumni = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState(null);

  const filteredList = useMemo(() => {
    if (selectedYear) {
      return AlumniList.filter((year) => year.year === selectedYear);
    }
    return AlumniList;
  }, [selectedYear]);

  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);

  const displayedAlumni = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredList.slice(startIndex, endIndex);
  }, [filteredList, currentPage]);

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handleShowAll = () => {
    setSelectedYear(null);
    setCurrentPage(1);
  };

  return (
    <>
      <Hero
        imgName={'alumni-hero.jpg'}
        title={<>Alumni</>}
        subtitleList={['Lighting the way for generations to come.']}
        isHome={false}
      />

      <div className={styles.alumni} id='is'>
        <div className={styles.alumniCloud}>
          <button
            onClick={handleShowAll}
            className={`${styles.alumniCloudElem} ${!selectedYear ? styles.active : ''}`}
          >
            <div>All Years</div>
          </button>
          {AlumniList.map((year) => (
            <button
              onClick={() => handleYearClick(year.year)}
              className={`${styles.alumniCloudElem} ${selectedYear === year.year ? styles.active : ''}`}
              key={`alumni_${year.year}`}
            >
              <div>{year.year}</div>
            </button>
          ))}
        </div>

        {displayedAlumni.map((alumniYear) => (
          <div
            className={styles.alumniGrp}
            id={alumniYear.year}
            key={`alumni_list_${alumniYear.year}`}
          >
            <div className={styles.alumniGrpHead}>{alumniYear.year}</div>
            {alumniYear.alumnis.map((alumni, index) => (
              <Person
                key={`alumni_member_${alumniYear.year}_${index}`}
                index={index}
                name={alumni.name}
                sub={alumni.sub}
                imgName={alumni.imgName}
                linkedInLink={alumni.linkedInLink}
                githubLink={alumni.githubLink}
              />
            ))}
          </div>
        ))}

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={styles.paginationBtn}
            >
              Previous
            </button>
            <span className={styles.paginationInfo}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className={styles.paginationBtn}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Alumni;
