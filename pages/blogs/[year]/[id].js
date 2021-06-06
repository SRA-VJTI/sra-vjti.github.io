import SingleBlog from '../../../components/SingleBlog/SingleBlog';
import BlogList from '../../../data/blogs';
import { useRouter } from 'next/router';

const SingleBlogPage = () => {
  const router = useRouter();
  const { year: year, id: id } = router.query;
  console.log(router.query);
  const blog = BlogList.find((BlogYear) => BlogYear.year === year)?.blogs[id];

  return (
    <>
      <SingleBlog {...blog} />
    </>
  );
};

export default SingleBlogPage;
