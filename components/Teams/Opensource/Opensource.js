import styles from './Opensource.module.scss';
import ContributionCard from '../../ContributionCard/ContributionCard.js';
import CatScratchZone from '../../CatScratchZone/CatScratchZone';
import Footer from '../../Footer/Footer';
import { OpenSourceList } from '../../../data';
import { useState } from 'react';

const competitions = ['GSoC', 'OSPP', 'LFX', 'Other'];

const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

let updatedList = [];
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
  const [clickedYear, setClickedYear] = useState(false);
  const [clickedComp, setClickedComp] = useState(false);
  const [filYear, setFilYear] = useState('Show all');
  const [filComp, setFilComp] = useState('Show all');
  const [key, setKey] = useState('');

  const toggleYear = () => {
    setClickedYear(!clickedYear);
    setClickedComp(false);
  };

  const toggleComp = () => {
    setClickedComp(!clickedComp);
    setClickedYear(false);
  };

  const applyFilters = (year, comp, keyword) => {
    filteredList = updatedList.filter((contribution) => {
      const matchesYear = year === 'Show all' || contribution.year == year;
      const matchesComp = comp === 'Show all' || contribution.competition === comp;
      const matchesKeyword =
        keyword === '' ||
        (contribution.repoName || '').toLowerCase().includes(keyword) ||
        (contribution.description || '').toLowerCase().includes(keyword) ||
        (contribution.contributor || '').toLowerCase().includes(keyword) ||
        (contribution.competition || '').toLowerCase().includes(keyword);
      return matchesYear && matchesComp && matchesKeyword;
    });
  };

  const selYear = (year) => {
    setFilYear(year);
    applyFilters(year, filComp, key);
    setClickedYear(false);
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
    <CatScratchZone>
      {/* ── Page header ───────────────────────────────────────────────── */}
      <div className={styles.pageHeader}>
        <p className={styles.eyebrow}>SRA VJTI</p>
        <h1 className={styles.pageTitle}>Open Source</h1>
        <p className={styles.pageSubtitle}>
          Building the future, one pull request at a time.
        </p>
      </div>

      {/* ── Filter bar ────────────────────────────────────────────────── */}
      <div className={styles.filterWrapper}>
        <div className={styles.filter}>
          <input
            className={styles.search}
            type='search'
            placeholder='Search by repo, contributor or program'
            onChange={selKeyword}
          />

          {/* Program / competition filter */}
          <div className={styles.dropdown}>
            <button onClick={toggleComp}>
              Program:<span className={styles.selYear}>{filComp}</span>
            </button>
            <div
              className={styles.options}
              style={{ display: clickedComp ? 'flex' : 'none' }}
            >
              <div className={styles.option} onClick={() => selComp('Show all')}>
                Show all
              </div>
              {competitions.map((comp, i) => (
                <div key={i} className={styles.option} onClick={() => selComp(comp)}>
                  {comp}
                </div>
              ))}
            </div>
          </div>

          {/* Year filter */}
          <div className={styles.dropdown}>
            <button onClick={toggleYear}>
              Year:<span className={styles.selYear}>{filYear}</span>
            </button>
            <div
              className={styles.options}
              style={{ display: clickedYear ? 'flex' : 'none' }}
            >
              <div className={styles.option} onClick={() => selYear('Show all')}>
                Show all
              </div>
              {years.map((year, i) => (
                <div key={i} className={styles.option} onClick={() => selYear(`${year}`)}>
                  {year}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Card grid ─────────────────────────────────────────────────── */}
      <div className={styles.cardGrp}>
        {filteredList.map((contribution, index) => (
          <ContributionCard
            key={`open_source_${index}`}
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

      <Footer />
    </CatScratchZone>
  );
};

export default OpenSource;
