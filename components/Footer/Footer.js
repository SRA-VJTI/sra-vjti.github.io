import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { SocialMediaLinks } from '../../data';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [isLoad, setIsLoad] = useState('none');
  useEffect(() => {
    setTimeout(() => {
      setIsLoad('');
    }, 2000);
  }, []);
  return (
    <>
      <footer className={styles.footer}>
        <h3>Connect with us</h3>
        <div className={styles.footerIcons}>
          <a
            href={SocialMediaLinks.github}
            target='_blank'
            style={{ display: isLoad }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={SocialMediaLinks.linkedin}
            target='_blank'
            style={{ display: isLoad }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href={SocialMediaLinks.facebook}
            target='_blank'
            style={{ display: isLoad }}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href={SocialMediaLinks.youtube}
            target='_blank'
            style={{ display: isLoad }}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href={SocialMediaLinks.twitter}
            target='_blank'
            style={{ display: isLoad }}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href={SocialMediaLinks.instagram}
            target='_blank'
            style={{ display: isLoad }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href={SocialMediaLinks.email}
            target='_blank'
            style={{ display: isLoad }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
