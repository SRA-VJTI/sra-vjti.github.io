import {notifData} from '../../data/SiteData'

const HomeNotifs = () => {

  return (
    <>
      <div id="notifs">
        <h1>Notifications</h1>
        <div id="notifs-main">
          {
            notifData.map((notif, _) => {
              return <div className="notif">{notif}</div>
            })
          }
        </div>
      </div>
    </>
    
  )
}


export default HomeNotifs;