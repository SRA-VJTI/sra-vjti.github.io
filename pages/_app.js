import Head from 'next/head';
import '../styles/globals.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useRouter } from 'next/router';
// NetworkBg (red constellation) removed — replaced by Apple dark theme
// import NetworkBg from '../components/NetworkBg/NetworkBg';

// Import FontAwesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the css automatically since it's being imported above

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  // These pages include Footer inside their own CatScratchZone
  const hasOwnFooter = isHome ||
    router.pathname === '/projects' ||
    router.pathname === '/projects/eklavya' ||
    router.pathname === '/projects/ongoing';
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico?v=2' />
      </Head>
      {/* <NetworkBg /> — red constellation removed */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Component {...pageProps} />
        {/* Footer for home page is rendered inside CatScratchZone so the board bg extends through it */}
        {!hasOwnFooter && <Footer />}
      </div>
    </>
  );
};

export default MyApp;
