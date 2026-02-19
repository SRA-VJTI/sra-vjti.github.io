import Hero from '../../Hero/Hero';
import styles from './Current.module.scss';
import Card from '../../Card/Card';
import { SenateList } from '../../../data';

const Current = () => {
  return (
    <>
      <Hero
        imgName={'team_2027.JPG'}
        backgroundPosition={'center top'}
        title={<>The Current Team</>}
        subtitleList={['The Torch Runners']}
        isHome={false}
      />

      <div className={styles.cardGrp}>
        {SenateList.map((member, index) => {
          return (
            <Card
              key={`senate_member_${index}`}
              index={index}
              name={member.name}
              sub={member.sub}
              imgName={member.imgName}
              linkedInLink={member.linkedInLink}
              githubLink={member.githubLink}
            />
          );
        })}
      </div>
    </>
  );
};

export default Current;
