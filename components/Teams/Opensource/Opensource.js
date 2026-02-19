import Hero from '../../Hero/Hero';
import styles from './Opensource.module.scss';
import ContributionCard from '../../ContributionCard/ContributionCard.js';
import { OpenSourceList } from '../../../data';
import { useState, useEffect, useMemo } from 'react';

const competitions = ['GSoC', 'OSPP', 'LFX', 'Other'];
const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

const OpenSource = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedComp, setClickedComp] = useState(false);
  const [filYear, setFilYear] = useState('Show all');
  const [filComp, setFilComp] = useState('Show all');
  const [key, setKey] = useState('');

  // Memoize the flattened list to avoid re-calculation on every render
  const updatedList = useMemo(() => {
    const list = [];
    if (OpenSourceList) {
      OpenSourceList.forEach((year) => {
        year.contributions.forEach((contribution) => {
          list.push({
            repoName: contribution.repoName,
            repoIcon: contribution.repoIcon,
            description: contribution.description,
            prLink: contribution.prLink,
            githubLink: contribution.githubLink,
            contributor: contribution.contributor,
            competition: contribution.competition,
            year: year.year,
            language: contribution.language || '', // Ensure language exists
          });
        });
      });
    }
    return list;
  }, []);

  const [filteredList, setFilteredList] = useState(updatedList);

  // Update filteredList whenever filters change
  useEffect(() => {
    const newList = updatedList.filter((contribution) => {
      const matchesYear = filYear === 'Show all' || contribution.year == filYear;
      const matchesComp =
        filComp === 'Show all' || contribution.competition === filComp;

      const keyword = key.toLowerCase();
      const matchesKeyword =
        keyword === '' ||
        (contribution.repoName && contribution.repoName.toLowerCase().includes(keyword)) ||
        (contribution.description && contribution.description.toLowerCase().includes(keyword)) ||
        (contribution.language && contribution.language.toLowerCase().includes(keyword)) ||
        (contribution.contributor && contribution.contributor.toLowerCase().includes(keyword));

      return matchesYear && matchesComp && matchesKeyword;
    });
    setFilteredList(newList);
  }, [filYear, filComp, key, updatedList]);


  const toggleYear = () => {
    setClicked(!clicked);
    setClickedComp(false);
  };

  const toggleComp = () => {
    setClickedComp(!clickedComp);
    setClicked(false);
  };

  const selYear = (year) => {
    setFilYear(year);
    setClicked(false);
  };

  const selComp = (comp) => {
    setFilComp(comp);
    setClickedComp(false);
  };

  const selKeyword = (ev) => {
    setKey(ev.currentTarget.value);
  };

  return (
    <>
      <Hero
        imgName={'opensource-hero.jpg'}
        title={<>Open Source Contributions</>}
        subtitleList={['Building the future, one pull request at a time.']}
        isHome={false}
      />

      <div className={styles.filter} id='is'>
        <input
          className={styles.search}
          type='search'
          placeholder='Search name of the contributor'
          value={key}
          onChange={(ev) => selKeyword(ev)}
        />

        {/* Competition Filter */}
        <div className={styles.dropdown}>
          <button onClick={toggleComp}>
            Program: <span className={styles.selYear}>{filComp}</span>
          </button>
          <div
            className={styles.options}
            style={{ display: clickedComp ? 'flex' : 'none' }}
          >
            <div className={styles.option} onClick={() => selComp('Show all')}>
              Show all
            </div>
            {competitions.map((comp, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => selComp(comp)}
              >
                {comp}
              </div>
            ))}
          </div>
        </div>

        {/* Year Filter */}
        <div className={styles.dropdown}>
          <button onClick={toggleYear}>
            Year: <span className={styles.selYear}>{filYear}</span>
          </button>
          <div
            className={styles.options}
            style={{ display: clicked ? 'flex' : 'none' }}
          >
            <div className={styles.option} onClick={() => selYear('Show all')}>
              Show all
            </div>
            {years.map((year, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => selYear(`${year}`)}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.contributionGrp}>
        {filteredList.map((contribution, index) => (
          <ContributionCard
            key={`open_source_${index}`}
            index={index}
            repoName={contribution.repoName}
            repoIcon={contribution.repoIcon}
            description={contribution.description}
            prLink={contribution.prLink}
            githubLink={contribution.githubLink}
            contributor={contribution.contributor}
            competition={contribution.competition}
          />
        ))}
      </div>
    </>
  );
};

export default OpenSource;
