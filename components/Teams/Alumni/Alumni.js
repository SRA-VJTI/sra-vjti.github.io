import Hero from '../../Hero/Hero';
import styles from './Alumni.module.scss';
import Person from '../../Person/Person';
import { AlumniList } from '../../../data';

const Alumni = () => {
  return (
    <>
      <Hero
        imgName={'alumni-hero-final.jpg'}
        title={<>Alumni</>}
        subtitleList={['Lighting the way for generations to come.']}
        isHome={false}
      />

      <div className={styles.alumni} id='is'>
        <div className={styles.alumniCloud}>
          {AlumniList.map((year, idx) => {
            return (
              <a
                href={`#${year.year}`}
                className={styles.alumniCloudElem}
                key={`alumni_${year.year}`}
              >
                <div>{year.year}</div>
              </a>
            );
          })}
        </div>
        {AlumniList.map((alumniYear, idx) => {
          return (
            <div
              className={styles.alumniGrp}
              id={alumniYear.year}
              key={`alumni_list_${alumniYear.year}`}
            >
              <div className={styles.alumniGrpHead}>{alumniYear.year}</div>
              {alumniYear.alumnis.map((alumni, index) => {
                return (
                  <Person
                    key={`alumni_member_${alumniYear.year}_${index}`}
                    index={index}
                    name={alumni.name}
                    sub={alumni.sub}
                    imgName={alumni.imgName}
                    linkedInLink={alumni.linkedInLink}
                    githubLink={alumni.githubLink}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Alumni;
