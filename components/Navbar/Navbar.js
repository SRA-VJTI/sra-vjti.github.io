import {useEffect, useState} from 'react';
import useWindowSize from '../../utils/ResizeHook';
import {NavbarData} from '../../data/SiteData'

const Navbar = () => {

  const [isNavbarDown, setIsNavbarDown] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if(isNavbarDown && size.width < 720){
      setIsNavbarDown(false);
    }
  }, [size])

  const onKhopdiClick = () => {
    let navbar = document.getElementById("navbar");
    if(isNavbarDown){
      navbar.style.clipPath = "circle(15% at 100% 0%)";
      setIsNavbarDown(false);
    }else{
      navbar.style.clipPath = "circle(150% at 100% 0%)";
      setIsNavbarDown(true);
    }
  }

  return (
    <>
      <nav id="navbar">
        <div id="navbar-toggle">
          <img onClick={onKhopdiClick} src="/static/images/KhopdiBaba.svg" id="khopdi" alt=""/>
        </div>
        <div id="navbar-elem-list">
          <a href="#">
            <div className="navbar-elem" id="nav-home">
              <img src={"/static/images/SRA_logo.png"} alt="" />
            </div>
          </a>
          {
            NavbarData.map((navItem, _) => {
              return <a href={navItem.link}>
                  <div className="navbar-elem">{navItem.name}</div>
                </a>
            })
          }
        </div>
      </nav>
    </>
  )
}


export default Navbar;