import styles from './Blogs.module.scss';
import Hero from '../Hero/Hero';
import React from 'react';
import BlogList from '../../data/blogs';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Blogs = () => {
  return (
    <React.Fragment>
      <Hero
        imgName={'internships-hero.jpg'}
        backgroundPosition={'center center'}
        title={
          <>
            Internship <br />
            Experiences
          </>
        }
        subtitleList={[
          'Nothing is a waste of time if you use the experience wisely.',
        ]}
        isHome={false}
      />

      <div id='is'>
        <div className={styles.blogCloud}>
          {BlogList.map((year, idx) => {
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
        {BlogList.map((BlogYear) => {
          return (
            <div
              className={styles.blogGrp}
              id={`blogs_${BlogYear.year}`}
              key={`bloggrp_${BlogYear.year}`}
            >
              <div className={styles.blogGrpHead}>{BlogYear.year}</div>
              {BlogYear.blogs.map((blog, idx) => {
                return (
                  <Blog
                    {...blog}
                    key={`blog_${idx}`}
                    year={BlogYear.year}
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

const Blog = ({ title, photo, author, time, short, year, blogNum }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/internships/${year}/${blogNum}`)}>
      <div className={styles.blog}>
        <div
          className={styles.blogImage}
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className={styles.blogDetails}>
          <div className={styles.blogTitle}>{title}</div>
          <div className={styles.blogAuthor}>{author}</div>
          <div className={styles.blogTime}>
            <em>{time}</em>
          </div>
          <div className={styles.blogShort}>{short}</div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
