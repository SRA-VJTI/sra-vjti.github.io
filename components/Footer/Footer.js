import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { SocialMediaLinks } from '../../data';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <h3>Connect with us</h3>
        <div className={styles.footerIcons}>
        <a href={SocialMediaLinks.github} target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={SocialMediaLinks.linkedin} target='_blank'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={SocialMediaLinks.facebook} target='_blank'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={SocialMediaLinks.youtube} target='_blank'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href={SocialMediaLinks.twitter} target='_blank'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={SocialMediaLinks.instagram} target='_blank'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
