import styles from './Blogs.module.scss';
import Hero from '../Hero/Hero';
import React from 'react';
import BlogList from '../../data/blogs';

const Blogs = () => {
  return (
    <React.Fragment>
      <Hero
        imgName={'blogs.jpg'}
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
      <div id='is' class={styles.blogList}>
        {BlogList.map((blog, i) => {
          return <BlogCard {...blog} />;
        })}
      </div>
    </React.Fragment>
  );
};

const BlogCard = ({ content, title, imgName }) => {
  return (
    <div className={styles.blog}>
      <div
        className={styles.blogImg}
        style={{ backgroundImage: `url("/static/images/${imgName}")` }}
      ></div>
      <div className={styles.blogDetails}>
        <div className={styles.blogTitle}>{title}</div>
        <div className={styles.blogContent}>{content}</div>
      </div>
    </div>
  );
};
export default Blogs;
