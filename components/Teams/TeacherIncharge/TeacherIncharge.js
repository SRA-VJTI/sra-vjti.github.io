import Hero from '../../Hero/Hero';
import styles from './TeacherIncharge.module.scss';
import Faculty from '../../Faculty/Faculty';
import { FacultyInchargeList } from '../../../data';

const TeacherIncharge = () => {
  return (
    <>
      <Hero
        imgName={'teachers-hero-final.jpg'}
        backgroundPosition={'center top'}
        title={<>Teachers Incharge</>}
        subtitleList={["The OG's"]}
        isHome={false}
      />
      <div className={styles.teachers} id='is'>
        {FacultyInchargeList.map((teacher, index) => {
          return (
            <Faculty
              key={`farculty_incharge_${index}`}
              index={index}
              name={teacher.name}
              sub={teacher.sub}
              imgName={teacher.imgName}
              linkedInLink={teacher.linkedInLink}
            />
          );
        })}
      </div>
    </>
  );
};

export default TeacherIncharge;
