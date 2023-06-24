import styles from './Talks.module.scss';
import Hero from '../Hero/Hero';
import React from 'react';
import TalksList from '../../data/talks';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Talks = () => {
  return (
    <React.Fragment>
      <Hero
        imgName={'talks1.png'}
        backgroundPosition={'center center'}
        title={<>{/* Learn from the Best */}</>}
        subtitleList={
          [
            // 'Learn from the Best',
          ]
        }
        isHome={false}
      />

      <div id='is'>
        <div className={styles.blogCloud}>
          {TalksList.map((year, idx) => {
            return (
              <a
                href={`#blogs_${year.year}`}
                className={styles.blogCloudElem}
                key={`cloudelem_${year.year}`}
              >
                <div>{year.year}</div>
              </a>
            );
          })}
        </div>
        {TalksList.map((TalkYear) => {
          return (
            <div
              className={styles.blogGrp}
              id={`blogs_${TalkYear.year}`}
              key={`bloggrp_${TalkYear.year}`}
            >
              <div className={styles.blogGrpHead}>{TalkYear.year}</div>
              {TalkYear.talks.map((blog, idx) => {
                return (
                  <Talk
                    {...blog}
                    key={`blog_${idx}`}
                    year={TalkYear.year}
                    blogNum={idx}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const Talk = ({ title, photo, author, year, blogNum }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/talks/${year}/${blogNum}`)}>
      <div className={styles.blog}>
        <div
          className={styles.blogImage}
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className={styles.blogDetails}>
          <div className={styles.blogTitle}>{title}</div>
          <div className={styles.blogAuthor}>{author}</div>
          {/* <div className={styles.blogTime}>
            <em>{time}</em>
          </div> */}
          {/* <div className={styles.blogShort}>{short}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Talks;
