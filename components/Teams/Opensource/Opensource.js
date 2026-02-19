import Hero from '../../Hero/Hero';
import styles from './Opensource.module.scss';
import ContributionCard from '../../ContributionCard/ContributionCard.js';
import { OpenSourceList } from '../../../data';
import { useState } from 'react';

let updatedList = [];

const competitions = ['GSoC', 'OSPP', 'LFX', 'Other'];

const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

OpenSourceList.forEach((year) => {
  year.contributions.forEach((contribution) => {
    updatedList.push({
      repoName: contribution.repoName,
      repoIcon: contribution.repoIcon,
      description: contribution.description,
      prLink: contribution.prLink,

      githubLink: contribution.githubLink,
      contributor: contribution.contributor,
      competition: contribution.competition,
      year: year.year,
    });
  });
});

let filteredList = updatedList;

const OpenSource = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedComp, setClickedComp] = useState(false);
  const [filYear, setFilYear] = useState('Show all');
  const [filComp, setFilComp] = useState('Show all');
  const [key, setKey] = useState('');

  const toggleYear = () => {
    setClicked(!clicked);
    setClickedComp(false);
  };

  const toggleComp = () => {
    setClickedComp(!clickedComp);
    setClicked(false);
  };

  const applyFilters = (year, comp, keyword) => {
    filteredList = updatedList.filter((contribution) => {
      const matchesYear = year === 'Show all' || contribution.year == year;
      const matchesComp =
        comp === 'Show all' || contribution.competition === comp;
      const matchesKeyword =
        keyword === '' ||
        contribution.repoName.toLowerCase().includes(keyword) ||
        contribution.description.toLowerCase().includes(keyword) ||
        contribution.language.toLowerCase().includes(keyword) ||
        contribution.contributor.toLowerCase().includes(keyword);

      return matchesYear && matchesComp && matchesKeyword;
    });
  };

  const selYear = (year) => {
    setFilYear(year);
    applyFilters(year, filComp, key);
    setClicked(false);
  };

  const selComp = (comp) => {
    setFilComp(comp);
    applyFilters(filYear, comp, key);
    setClickedComp(false);
  };

  const selKeyword = (ev) => {
    const value = ev.currentTarget.value.toLowerCase();
    setKey(value);

    if (value === '') {
      setFilYear('Show all');
      setFilComp('Show all');
      filteredList = updatedList;
    } else {
      applyFilters(filYear, filComp, value);
    }
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
          placeholder='Search by repo, language or contributor'
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
