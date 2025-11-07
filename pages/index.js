import Hero from '@/components/common/Hero/Hero';
import HomeAboutUs from '@/components/home/HomeAboutUs/HomeAboutUs';
import OurReach from '@/components/home/OurReach/OurReach';
import OurSponsors from '@/components/home/OurSponsors/OurSponsors';
import OurCorporates from '@/components/home/OurCorporates/OurCorporates';
import HomeNotifications from '@/components/home/HomeNotifications/HomeNotifications';
import { HeroTags } from '@/data';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | SRA VJTI</title>
      </Head>
      <Hero
        imgName={'landing-hero.jpg'}
        title={
          <>
            Society of
            <br />
            Robotics and
            <br />
            Automation, VJTI
          </>
        }
        subtitleList={HeroTags}
        isHome={true}
      />
      <HomeAboutUs />
      <OurSponsors />
      <OurReach />
      <OurCorporates />
      <HomeNotifications />
    </>
  );
};

export default Home;
