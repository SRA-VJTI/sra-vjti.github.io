import OngoingProjects from '@/components/projects/OngoingProjects/OngoingProjects';
import Head from 'next/head';

const OngoingProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Ongoing Projects | SRA VJTI</title>
      </Head>
      <OngoingProjects />;
    </>
  );
};

export default OngoingProjectsPage;
