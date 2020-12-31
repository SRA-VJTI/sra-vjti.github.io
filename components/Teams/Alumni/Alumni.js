import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import styles from './Alumni.module.scss';
import Person from '../../Person/Person';

const Alumni = () => {

  const alumniList = [
    {
      "year" : "2019",
      "alumnis" : [
        {
          name : "Nikhil Jain",
          imgName : "alumnus1.jpg",
          sub: <>Professor of Mathematics, VJTI. <br />
          PhD in Informatics IIT Bombay.</>,
          linkedInLink : "",
          githubLink: ""
        },
        {
          name : "Nikhil Jain",
          imgName : "alumnus2.jpg",
          sub: <>Professor of Mathematics, VJTI. <br />
          PhD in Informatics IIT Bombay.</>,
          linkedInLink : "",
          githubLink: ""
        }
      ]
    },
    {
      "year" : "2018",
      "alumnis" : [
        {
          name : "Nikhil Jain",
          imgName : "alumnus1.jpg",
          sub: <>Professor of Mathematics, VJTI. <br />
          PhD in Informatics IIT Bombay.</>,
          linkedInLink : "",
          githubLink: ""
        },
        {
          name : "Nikhil Jain",
          imgName : "alumnus2.jpg",
          sub: <>Professor of Mathematics, VJTI. <br />
          PhD in Informatics IIT Bombay.</>,
          linkedInLink : "",
          githubLink: ""
        }
      ]
    }
  ] 

  return (
    <>
      <Hero imgName={"alumni-hero-final.jpg"} title={<>Alumni</>} subtitleList={["Lighting the way for generations to come."]} isHome={false}/>
      
      <div className={styles.alumni}>
        <div className={styles.alumniCloud}>
          <a href="#2019" className={styles.alumniCloudElem}>
            <div>2019</div>
          </a>
          <a href="#2018" className={styles.alumniCloudElem}>
            <div>2018</div>
          </a>
          <a href="#" className={styles.alumniCloudElem}>
            <div>2017</div>
          </a>
          <a href="#" className={styles.alumniCloudElem}>
            <div>2016</div>
          </a>
          <a href="#" className={styles.alumniCloudElem}>
            <div>2015</div>
          </a>
        </div>
        {
          alumniList.map((alumniYear, _) => {
            return <div className={styles.alumniGrp} id={alumniYear.year}>
              <div className={styles.alumniGrpHead}>{alumniYear.year}</div>
              {
                alumniYear.alumnis.map((alumni, index) => {
                  return <Person index={index} 
                  name={alumni.name} 
                  sub={alumni.sub} 
                  imgName={alumni.imgName} 
                  linkedInLink={alumni.linkedInLink} 
                  githubLink={alumni.githubLink}/>
                })
              }
            </div>
          })
        }
      </div>
    </>
  );
}

export default Alumni;