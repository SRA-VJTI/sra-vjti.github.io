import Hero from '../../Hero/Hero';
import styles from './TeacherIncharge.module.scss';
import Person from '../../Person/Person';
import { FacultyInchargeList } from '../../../data';

const TeacherIncharge = () => {
  return (
    <>
      <Hero
        imgName={'teachers-hero.jpg'}
        backgroundPosition={'center top'}
        title={<>Teachers Incharge</>}
        subtitleList={['']}
        isHome={false}
      />
      <div className={styles.teachers} id='is'>
        {FacultyInchargeList.map((teacher, index) => {
          return (
            <Person
              key={`farculty_incharge_${index}`}
              index={index}
              name={teacher.name}
              sub={teacher.sub}
              imgName={teacher.imgName}
              linkedInLink={teacher.linkedInLink}
              githubLink={teacher.githubLink}
            />
          );
        })}
      </div>
    </>
  );
};

export default TeacherIncharge;
