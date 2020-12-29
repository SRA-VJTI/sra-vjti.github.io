import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import HomeAboutUs from '../components/HomeAboutUs/HomeAboutUs';
import HomeReach from '../components/HomeReach/HomeReach';
import HomeNotifs from '../components/HomeNotifs/HomeNotifs';
import Footer from '../components/Footer/Footer';

const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <HomeAboutUs />
      <HomeReach />
      <HomeNotifs />
      <Footer />
    </>
    
  )
}


export default Home;