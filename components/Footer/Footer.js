import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {socialMediaLinks} from '../../data/SiteData'

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <h3>Connect with us</h3>
        <div id="footer-icons">
          <a href={socialMediaLinks.facebook} target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href={socialMediaLinks.youtube}
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href={socialMediaLinks.twitter} target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={socialMediaLinks.instagram} target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </footer>
    </>
    
  )
}


export default Footer;