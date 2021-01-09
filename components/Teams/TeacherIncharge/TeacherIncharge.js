
import Hero from '../../Hero/Hero';
import styles from './TeacherIncharge.module.scss';
import Person from '../../Person/Person';
import { teachersInchargeList } from '../../../data/SiteData';

const TeacherIncharge = () => {

  return (
    <>
      <Hero imgName={"teachers-hero-final.jpg"} backgroundPosition={"center top"} title={<>Teachers Incharge</>} subtitleList={["The OG's"]} isHome={false}/>
      <div className={styles.teachers} id="is">
        {
          teachersInchargeList.map((teacher, index) => {
            return <Person index={index} 
                    name={teacher.name} 
                    sub={teacher.sub} 
                    imgName={teacher.imgName} 
                    linkedInLink={teacher.linkedInLink} 
                    githubLink={teacher.githubLink}/>
          })
        }
      </div>
    </>
  );
}

export default TeacherIncharge;