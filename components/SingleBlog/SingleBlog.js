import styles from './SingleBlog.module.scss';
// import dynamic from 'next/dynamic';
import Markdown from 'markdown-to-jsx';

const QuestionStyle = {
  fontFamily: 'Oswald',
  fontSize: '1.5rem',
  // letterSpacing: '1px',
  fontWeight: 'light',
  paddingBottom: '0px',
  color: '#892cdc',
  lineHeight: '1.5',
};

const AnswerStyle = {
  lineHeight: 'normal',
  // fontSize: '1.1rem',
  lineHeight: '1.5',
  marginBottom: '10px',
};

const LinkStyle = {
  fontWeight: 'bold',
  textDecoration: 'underline',
};

const Question = ({ children, ...props }) => (
  <h1 style={QuestionStyle} {...props}>
    {children}
    <br />
    <br />
  </h1>
);

const Answer = ({ children, ...props }) => (
  <p style={AnswerStyle} {...props}>
    {children}
    <br />
    <br />
  </p>
);

const Link = ({ children, ...props }) => (
  <a style={LinkStyle} {...props}>
    {children}
  </a>
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
        <Markdown
          options={{
            overrides: {
              h1: {
                component: Question,
              },
              p: {
                component: Answer,
              },
              a: {
                component: Link,
              },
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </>
  );
};
export default SingleBlog;
