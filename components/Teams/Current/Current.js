import Hero from '../../Hero/Hero';
import styles from './Current.module.scss';
import Person from '../../Person/Person';
import { SenateList } from '../../../data';

const Current = () => {
  return (
    <>
      <Hero
        imgName={'Current.JPG'}
        backgroundPosition={'center top'}
        title={<>The Current Team</>}
        subtitleList={['The Torch Runners']}
        isHome={false}
      />
      <div className={styles.currentTeam} id='is'>
        {SenateList.map((person, index) => {
          return (
            <Person
              key={`senate_${index}`}
              index={index}
              name={person.name}
              sub={person.sub}
              imgName={person.imgName}
              linkedInLink={person.linkedInLink}
              githubLink={person.githubLink}
            />
          );
        })}
      </div>
    </>
  );
};

export default Current;
