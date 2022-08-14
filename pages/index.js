import Hero from '../components/Hero/Hero';
import HomeAboutUs from '../components/HomeAboutUs/HomeAboutUs';
import OurReach from '../components/OurReach/OurReach';
import OurSponsors from '../components/OurSponsors/OurSponsors';
import HomeNotifications from '../components/HomeNotifications/HomeNotifications';
import { HeroTags } from '../data';

const Home = () => {
  return (
    <>
      <Hero
        imgName={'landing-hero2.jpg'}
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
      <HomeNotifications />
    </>
  );
};

export default Home;
