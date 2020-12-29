import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import {HeroTags} from '../../data/SiteData'

const Hero = () => {

  return (
    <>
      <div id="hero">
        <div id="hero-head">
          Society of<br />Robotics and<br />Automation, VJTI
        </div>
        <div id="hero-sub">
          {
            HeroTags.map((heroTag, index) => {
              return (HeroTags.length !== index+1) ? <span>{heroTag}&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
              : <span>{heroTag}</span>
            })
          }
        </div>
        <a href="#is">
          <div id="scroll-indicator"></div>
        </a>
        <a href="#notifs" id="notif">
          <FontAwesomeIcon icon={faBell} />
        </a>
      </div>
      <div id="is">
        <div className="caption" id="ideate">
          <div className="caption-head">Ideate</div>
          <div className="caption-sub">
            Changing the world, one solution at a time.
          </div>
        </div>
        <div id="innovate" className="caption">
          <div className="caption-head">Innovate</div>
          <div className="caption-sub">
            Creativity is thinking up new things. Innovation is doing new things.
          </div>
        </div>
        <div id="inspire" className="caption">
          <div className="caption-head">Inspire</div>
          <div className="caption-sub">
            Don't inspire by being perfect, inspire by embracing your
            imperfections.
          </div>
        </div>
      </div>
    </>
    
  )
}


export default Hero;