import styles from './SingleBlog.module.scss';
import dynamic from 'next/dynamic';
import Markdown from 'markdown-to-jsx';

const SingleBlog = ({ photo, title, author, time, short, content }) => {
  return (
    <>
      <div className={styles.blogDetails}>
        {/* <img src={photo} alt='Blog Photo' /> */}
        <div className={styles.blogTitle}>{title}</div>
        <div className={styles.blogAuthor}>- {author}</div>
      </div>
      <div className={styles.blogContent}>
        <Markdown>{content}</Markdown>
      </div>
    </>
  );
};
export default SingleBlog;
