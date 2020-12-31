
import Hero from '../../Hero/Hero';
import styles from './TeacherIncharge.module.scss';
import Person from '../../Person/Person';

const TeacherIncharge = () => {

  const teachersInchargeList = [
    {
      name : "Nikhil Jain",
      imgName : "prof-plac1.jpg",
      sub: <>Professor of Mathematics, VJTI. <br />
      PhD in Informatics IIT Bombay.</>,
      linkedInLink : "",
      githubLink: ""
    },
    {
      name : "Nikhil Jain",
      imgName : "prof-plac1.jpg",
      sub: <>Professor of Mathematics, VJTI. <br />
      PhD in Informatics IIT Bombay.</>,
      linkedInLink : "",
      githubLink: ""
    },
    {
      name : "Nikhil Jain",
      imgName : "prof-plac1.jpg",
      sub: <>Professor of Mathematics, VJTI. <br />
      PhD in Informatics IIT Bombay.</>,
      linkedInLink : "",
      githubLink: ""
    },
  ]

  return (
    <>
      <Hero imgName={"teachers-hero-final.jpg"} backgroundPosition={"center top"} title={<>Teachers Incharge</>} subtitleList={["The OG's"]} isHome={false}/>
      {/* <div className={styles.hero}>
        <div className={styles.heroHead}>Teachers Incharge</div>
        <div className={styles.heroSub}>The OG's</div>
        <a href="#teachers">
          <div className={styles.scrollIndicator}></div>
        </a>
      </div> */}
      
      <div className={styles.teachers}>
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