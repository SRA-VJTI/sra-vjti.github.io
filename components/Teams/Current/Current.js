
import Hero from '../../Hero/Hero';
import styles from './Current.module.scss';
import Person from '../../Person/Person';
import { currentList } from '../../../data/SiteData';

const Current = () => {

  return (
    <>
      <Hero imgName={"current-hero-final.jpg"} backgroundPosition={"center top"} title={<>The Current Team</>} subtitleList={["The Torch Runners"]} isHome={false}/>
      <div className={styles.currentTeam} id="is">
        {
          currentList.map((person, index) => {
            return <Person index={index} 
                    name={person.name} 
                    sub={person.sub} 
                    imgName={person.imgName} 
                    linkedInLink={person.linkedInLink} 
                    githubLink={person.githubLink}/>
          })
        }
      </div>
    </>
  );
}

export default Current;