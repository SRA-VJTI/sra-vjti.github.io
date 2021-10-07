import styles from './SingleBlog.module.scss';
import dynamic from 'next/dynamic';
import Markdown from 'markdown-to-jsx';

const Question = ({ children, ...props }) => (
  <h1 {...props}>{children}<br/><br/></h1>
  
);
const Answer = ({ children, ...props }) => (
  <p {...props}>{children}<br/><br/></p>
);

const SingleBlog = ({ photo, title, author, time, short, content }) => {
  return (
    <>
      <div className={styles.blogDetails}>
        {/* <img src={photo} alt="Blog Photo" /> */}
        <div className={styles.blogTitle}>{title}</div>
        <div className={styles.blogAuthor}>- {author}</div>
      </div>
      <div className={styles.blogContent}>
        <Markdown  options={{
              overrides: {
                  h1: {
                      component: Question
                  },
                  p: {
                      component: Answer
                  },
              },
          }}> 
          {content}
        </Markdown>
      </div>
    </>
  );
};
export default SingleBlog;
