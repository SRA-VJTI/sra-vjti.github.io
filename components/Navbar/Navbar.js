import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import useWindowSize from '../../utils/ResizeHook';
import { NavbarData } from '../../data/SiteData';

const Navbar = () => {
  const [isNavbarDown, setIsNavbarDown] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    let navbar = document.getElementById('navbar');
    if (size.width > 720) {
      setIsNavbarDown(true);
    } else {
      // navbar.style.clipPath = "circle(15% at 100% 0%)";
      setIsNavbarDown(false);
    }
  }, [size]);

  useEffect(() => {
    let navbar = document.getElementById('navbar');
    if (isNavbarDown) {
      navbar.style.clipPath = 'circle(150% at 100% 0%)';
    } else {
      navbar.style.clipPath = 'circle(15% at 100% 0%)';
    }
  }, [isNavbarDown]);

  const onKhopdiClick = () => {
    if (isNavbarDown) {
      setIsNavbarDown(false);
    } else {
      setIsNavbarDown(true);
    }
  };
  const linkClick = () => {
    if (!(size.width > 720) && isNavbarDown) {
      setIsNavbarDown(false);
    }
  };

  return (
    <>
      <nav className={styles.navbar} id='navbar'>
        <div className={styles.navbarToggle} id='navbar-toggle'>
          <img
            onClick={onKhopdiClick}
            src='/static/images/KhopdiBaba.svg'
            className={styles.khopdi}
            id='khopdi'
            alt=''
          />
        </div>
        <div
          className={styles.navbarElemList}
          id='navbar-elem-list'
          onClick={linkClick}
        >
          <Link href='/'>
            <a>
              <div className={styles.navHome} id='nav-home'>
                <img
                  className={styles.sraLogo}
                  src={'/static/images/SRA_logo.png'}
                  alt=''
                />
              </div>
            </a>
          </Link>

          {NavbarData.map((navItem, _) => {
            return (
              <Link href={navItem.link}>
                <a>
                  <div className={styles.navbarElem}>{navItem.name}</div>
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
