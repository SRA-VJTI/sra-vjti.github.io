import { useState } from 'react';
import styles from './ProjectSelection.module.scss';
import OngoingProjects from '../OngoingProjects/OngoingProjects';
import EklavyaProjects from '../EklavyaProjects/EklavyaProjects';

const ProjectSelection = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  return (
    <div className={styles.projectsPage}>
      <div className={styles.toggleWrapper} id='is'>
        <div className={styles.toggleContainer}>
          <div 
            className={`${styles.slider} ${activeTab === 'eklavya' ? styles.right : ''}`}
          ></div>
          
          <button
            className={`${styles.toggleBtn} ${activeTab === 'ongoing' ? styles.active : ''}`}
            onClick={() => setActiveTab('ongoing')}
          >
            Ongoing Projects
          </button>
          
          <button
            className={`${styles.toggleBtn} ${activeTab === 'eklavya' ? styles.active : ''}`}
            onClick={() => setActiveTab('eklavya')}
          >
            Eklavya Projects
          </button>
        </div>
      </div>
      <div className={styles.contentArea}>
        {activeTab === 'ongoing' ? <OngoingProjects /> : <EklavyaProjects />}
      </div>
    </div>
  );
};

export default ProjectSelection;
