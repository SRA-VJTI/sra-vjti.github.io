import { Ultra, Manrope, Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPage } from '../lib/content';

// Ultra ships a single weight (400); all display sizing is done with size, not weight.
const ultra = Ultra({
  subsets: ['latin'],
  variable: '--ultra',
  weight: ['400'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--manrope',
  weight: ['300', '400', '500', '600', '700'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--fira-code',
  weight: ['400', '500'],
});

const site = getPage('site');
export const metadata = { title: site.title, description: site.description };

export default function RootLayout({ children }) {
  const nav = getPage('nav');

  return (
    <html
      lang="en"
      className={`${ultra.variable} ${manrope.variable} ${firaCode.variable}`}
    >
      <body>
        <Navbar main={nav.main} activities={nav.activities} />
        <div style={{ paddingTop: 'var(--nav-height)' }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
