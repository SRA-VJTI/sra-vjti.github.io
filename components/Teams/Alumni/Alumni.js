import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Hero from '../../Hero/Hero';
import styles from './Alumni.module.scss';
import Person from '../../Person/Person';
import { alumniList } from '../../../data/SiteData';

const Alumni = () => {
  return (
    <>
      <Hero imgName={"alumni-hero-final.jpg"} title={<>Alumni</>} subtitleList={["Lighting the way for generations to come."]} isHome={false}/>
      
      <div className={styles.alumni}>
        <div className={styles.alumniCloud}>
          {
            alumniList.map((year, _) => {
              return <a href={`#${year.year}`} className={styles.alumniCloudElem}>
                <div>{year.year}</div>
              </a>
            })
          }
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