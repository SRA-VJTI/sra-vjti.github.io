import styles from './SingleBlog.module.scss';

const SingleBlog = ({ photo, title, author, time, short, content }) => {
  return (
    <>
      <div className={styles.blogDetails}>
        {/* <img src={photo} alt="Blog Photo" /> */}
        <div className={styles.blogTitle}>{title}</div>
        <div className={styles.blogAuthor}>- {author}</div>
      </div>
      <div className={styles.blogContent}>
        {content &&
          content.map((cell, idx) => {
            if (cell.type == 'subtitle') {
              return <p className={styles.blogSubtitle}>{cell.content}</p>;
            } else if (cell.type == 'image') {
              return (
                <img
                  src={cell.path}
                  alt='Blog Image'
                  className={styles.blogImg}
                />
              );
            } else {
              return <p className={styles.blogText}>{cell.content}</p>;
            }
          })}
      </div>
    </>
  );
};
export default SingleBlog;
