import styles from './SingleBlog.module.scss';
import dynamic from 'next/dynamic';
import Markdown from 'markdown-to-jsx';

const QuestionStyle = {
  lineHeight: "normal",
  fontFamily: "sans-serif",
  fontWeight: "normal",
  fontSize: "1.5rem",
  display: "inline-flex",
  borderRadius: "0.1em",
  backgroundColor: "white",
  color: "black",
  marginBottom: "0.5em",
  paddingLeft: "0.3em",
  paddingRight: "0.3em"
};

const AnswerStyle = {
  lineHeight: "normal",
  fontFamily: "Roboto",
  fontWeight: "10",
  fontSize: "1.1rem",
  lineHeight: "1.5",
};

const LinkStyle = {
  color: "#00FFFF",
  textDecoration: "underline"
};

const Question = ({ children, ...props }) => (
  <h1 style={QuestionStyle} {...props}>{children}<br/><br/></h1>
);

const Answer = ({ children, ...props }) => (
  <p style={AnswerStyle} {...props}>{children}<br/><br/></p>
);

const Link = ({ children, ...props }) => (
  <a style={LinkStyle} {...props}>{children}</a>
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
                  a: {
                    component: Link
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
