import Head from 'next/head';
import '../styles/globals.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import NetworkBg from '../components/NetworkBg/NetworkBg';

// Import FontAwesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the css automatically since it's being imported above

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico?v=2' />
      </Head>
      <NetworkBg />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default MyApp;
