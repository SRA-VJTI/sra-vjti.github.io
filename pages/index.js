import Hero from '../components/Hero/Hero';
import HomeAboutUs from '../components/HomeAboutUs/HomeAboutUs';
import HomeReach from '../components/HomeReach/HomeReach';
import HomeNotifs from '../components/HomeNotifs/HomeNotifs';
import { HeroTags } from '../data/SiteData';

const Home = () => {
  return (
    <>
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
      <HomeReach />
      <HomeNotifs />
    </>
  );
};

export default Home;
