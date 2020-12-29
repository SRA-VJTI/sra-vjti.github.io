import {aboutUsText, aboutUsTeamText, aboutUsAlumniText} from '../../data/SiteData'

const HomeAboutUs = () => {

  return (
    <>
      <div id="about-us">
        <div id="about-us-main">
          <h1>About Us</h1>
          <p>
            {aboutUsText}
          </p>
        </div>
        <div id="about-us-team">
          <p>
            {aboutUsTeamText}
          </p>
          <img src="/static/images/group-new-final.jpg" alt="SRA Team group photo" />
        </div>
        <div id="about-us-alumni">
          <p>
            {aboutUsAlumniText}
          </p>
          <img src="/static/images/group-old-final.jpg" alt="SRA Team group photo" />
        </div>
      </div>
      <div id="our-projects">
        <h1>Our Projects</h1>
        <button>Flagship Projects &nbsp;<span>&#8594;</span></button>
        <button>Eklavya Projects &nbsp;<span>&#8594;</span></button>
      </div>
    </>
    
  )
}


export default HomeAboutUs;