import Hero from '../components/Hero/Hero';
import HomeAboutUs from '../components/HomeAboutUs/HomeAboutUs';
import OurReach from '../components/OurReach/OurReach';
import OurSponsors from '../components/OurSponsors/OurSponsors';
import OurCorporates from '../components/OurCorporates/OurCorporates';
import CatScratchZone from '../components/CatScratchZone/CatScratchZone';
import MayaViewer from '../components/MayaViewer/MayaViewer';
import Footer from '../components/Footer/Footer';
import { HeroTags } from '../data';
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
        isHome={false}
      />
      {/* Board photo sticky background starts right after the hero image */}
      <CatScratchZone>
        <MayaViewer />
        <HomeAboutUs />
        <OurSponsors />
        <OurReach />
        <OurCorporates />
        <Footer />
      </CatScratchZone>
    </>
  );
};

export default Home;
