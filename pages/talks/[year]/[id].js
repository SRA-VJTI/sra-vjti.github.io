import SingleBlog from '../../../components/SingleBlog/SingleBlog';
import TalksList from '../../../data/talks';
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
  const talk = TalksList.find((TalkYear) => TalkYear.year === year)?.talks[id];
  return {
    props: {
      ...talk,
    },
  };
}
export function getStaticPaths() {
  const talkList = [];
  for (var i = 0; i < TalksList.length; i++) {
    var expYear = TalksList[i]?.year;
    var listLength = TalksList[i]?.talks?.length;
    for (var j = 0; j < listLength; j++) {
      talkList.push({
        params: {
          year: expYear,
          id: j.toString(),
        },
      });
    }
  }
  return {
    paths: talkList,
    fallback: false,
  };
}
export default SingleBlogPage;
