import {reachImgNames} from '../../data/SiteData'

const HomeReach = () => {

  return (
    <>
      <div id="reach">
        <h1>Our Reach</h1>
        <div id="reach-group">
          {
            reachImgNames.map((name, i) => {
              return <img src={`/static/images/reach/${name}`} alt="" className="reach-img" />
            })
          }
        </div>
      </div>
    </>
    
  )
}

export default HomeReach;