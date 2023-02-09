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
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import NavbarData from '../../data/navbar';

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
        <h3>SRA VJTI</h3>
        <div className={styles.container}>
          <div className={styles.mapContainer}>
            <h5>Society of Robotics & Automation</h5>
            <div className={styles.map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.924042296023!2d72.85415941433659!3d19.02306845857879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf267a8d3b4b%3A0x9ae53388c26a7d35!2sSociety%20of%20Robotics%20and%20Automation!5e0!3m2!1sen!2sin!4v1675980097319!5m2!1sen!2sin" allowfullscreen="" height={"250"} width={"450"} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <span className={styles.heading}>Quick Links</span>
            <div className={styles.linkContainer}>
              {NavbarData.map((item) => {
                return (
                  <div>
                    <a href={item.link}>{item.name}</a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.mapContainer}>
            <span className={styles.heading}>Contact Details</span>
            <div className={styles.linkContainer}>
              <FontAwesomeIcon icon={faLocationDot} />
              <p className={styles.text}>
                MLR-11, Mechanical Engineering, VEERMATA JIJABAI TECHNOLOGICAL INSTITUTE, H R Mahajani Rd, Matunga East, Mumbai, Maharashtra 400019
              </p><br />
              <FontAwesomeIcon icon={faPhone} />
              <p className={styles.text}>
                1234567890
              </p><br />
              <FontAwesomeIcon icon={faEnvelope} />
              <p className={styles.text}>
                sra@vjti.ac.in
              </p><br />
            </div>
          </div>
          <div className={styles.mapContainer}>
            <span className={styles.heading}>Connect with us</span>
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
              <br />
              <p className={styles.copy}>  © SRA VJTI 2023 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
