import SingleBlog from '../../../components/SingleBlog/SingleBlog';
import BlogList from '../../../data/blogs';
import { useRouter } from 'next/router';
import Head from 'next/head';

const SingleBlogPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <SingleBlog {...props} />
    </>
  );
};
export async function getStaticProps(context) {
  const year = context.params.year;
  const id = context.params.id;
  const blogYear = BlogList.find((BlogYear) => BlogYear.year === year);
  const blog = blogYear?.blogs?.[id];

  if (!blog || !blog.title || !blog.author || blog.content === undefined) {
    return {
      notFound: true,
    };
  }

  // Ensure all fields are defined, use defaults for missing optional fields
  return {
    props: {
      photo: blog.photo || '',
      title: blog.title,
      author: blog.author,
      time: blog.time || '',
      short: blog.short || '',
      content: blog.content,
    },
  };
}
export function getStaticPaths() {
  const blogList = [];
  for (let i = 0; i < BlogList.length; i++) {
    const expYear = BlogList[i]?.year;
    const blogs = BlogList[i]?.blogs;
    if (!blogs || !expYear) continue;

    for (let j = 0; j < blogs.length; j++) {
      const blog = blogs[j];
      // Only add paths for blogs that have all required fields
      if (blog && blog.title && blog.author && blog.content !== undefined) {
        blogList.push({
          params: {
            year: expYear,
            id: j.toString(),
          },
        });
      }
    }
  }
  return {
    paths: blogList,
    fallback: false,
  };
}
export default SingleBlogPage;
