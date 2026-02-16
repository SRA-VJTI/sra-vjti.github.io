import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faInstagram,
  faYoutubeSquare,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import SocialMediaLinks from '../../data/socialmedia';

function Footer() {
  const socialIcons = [
    {
      name: 'github',
      icon: faGithub,
      link: SocialMediaLinks.github,
    },
    {
      name: 'instagram',
      icon: faInstagram,
      link: SocialMediaLinks.instagram,
    },
    {
      name: 'youtube',
      icon: faYoutubeSquare,
      link: SocialMediaLinks.youtube,
    },
    {
      name: 'linkedin',
      icon: faLinkedinIn,
      link: SocialMediaLinks.linkedin,
    },
    {
      name: 'x',
      icon: faXTwitter,
      link: SocialMediaLinks.x,
    },
  ];

  return (
    <>
      <footer className={styles.footer}>
        <h3>Connect with us</h3>
        <div className={styles.footerIcons}>
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.name}
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

export default Footer;
