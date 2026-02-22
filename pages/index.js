import Hero from '../components/Hero/Hero';
import HomeAboutUs from '../components/HomeAboutUs/HomeAboutUs';
import OurReach from '../components/OurReach/OurReach';
import OurSponsors from '../components/OurSponsors/OurSponsors';
import OurCorporates from '../components/OurCorporates/OurCorporates';
import { HeroTags } from '../data';
import Head from 'next/head';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.body.classList.add('home-theme');
    return () => {
      document.body.classList.remove('home-theme');
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home | SRA VJTI</title>
      </Head>
      <main className='homePage'>
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
        <OurReach />
        <OurSponsors />
        <OurCorporates />
      </main>
    </>
  );
};

export default Home;
