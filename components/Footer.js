import Link from 'next/link';
import { getPage } from '../lib/content';

export default function Footer() {
  const { tagline, estd, email, links, social } = getPage('footer');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__logo">
              SRA <span>VJTI</span>
            </p>
            <p className="footer__tagline" style={{ whiteSpace: 'pre-line' }}>
              {tagline}
            </p>
            <p className="footer__estd">{estd}</p>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Navigation</p>
            <ul>
              {links.map(({ label, href, external }) => (
                <li key={href}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  ) : (
                    <Link href={href}>{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Connect</p>
            <ul>
              {social.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Society of Robotics and Automation, VJTI
          </p>
          <a href={`mailto:${email}`} className="footer__email">
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
}
