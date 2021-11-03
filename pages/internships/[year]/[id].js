import SingleBlog from '../../../components/SingleBlog/SingleBlog';
import BlogList from '../../../data/blogs';
import { useRouter } from 'next/router';

const SingleBlogPage = (props) => {
  return (
    <>
      <SingleBlog {...props} />
    </>
  );
};
export async function getStaticProps(context) {
  const year = context.params.year;
  const id = context.params.id;
  const blog = BlogList.find((BlogYear) => BlogYear.year === year)?.blogs[id];
  return {
    props: {
      ...blog,
    },
  };
}
export function getStaticPaths() {
  const blogList = [];
  for (var i = 0; i < BlogList.length; i++) {
    var expYear = BlogList[i]?.year;
    var listLength = BlogList[i]?.blogs?.length;
    for (var j = 0; j < listLength; j++) {
      blogList.push({
        params: {
          year: expYear,
          id: j.toString(),
        },
      });
    }
  }
  return {
    paths: blogList,
    fallback: false,
  };
}
export default SingleBlogPage;
