
import Hero from '../../Hero/Hero';
import styles from './Current.module.scss';
import Person from '../../Person/Person';

const Current = () => {

  const currentList = [
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
      <Hero imgName={"current-hero-final.jpg"} backgroundPosition={"center top"} title={<>The Current Team</>} subtitleList={["The Torch Runners"]} isHome={false}/>
      
      
      <div className={styles.currentTeam}>
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