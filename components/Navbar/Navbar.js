import {useEffect, useState} from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import useWindowSize from '../../utils/ResizeHook';
import {NavbarData} from '../../data/SiteData'

const Navbar = () => {

  const [isNavbarDown, setIsNavbarDown] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if(size.width > 720){
      navbar.style.clipPath = "circle(150% at 100% 0%)";
      setIsNavbarDown(true);
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
      <nav className={styles.navbar} id="navbar">
        <div className={styles.navbarToggle} id="navbar-toggle">
          <img onClick={onKhopdiClick} src="/static/images/KhopdiBaba.svg" className={styles.khopdi} id="khopdi" alt=""/>
        </div>
        <div className={styles.navbarElemList} id="navbar-elem-list">
          <Link href="/">
            <a>
              <div className={styles.navHome} id="nav-home">
                <img className={styles.sraLogo} src={"/static/images/SRA_logo.png"} alt="" />
              </div>
            </a>
          </Link>
          
          {
            NavbarData.map((navItem, _) => {
              return (
                <Link href={navItem.link}>
                  <a>
                    <div className={styles.navbarElem}>{navItem.name}</div>
                  </a>
                </Link>
              )
            })
          }
        </div>
      </nav>
    </>
  )
}


export default Navbar;