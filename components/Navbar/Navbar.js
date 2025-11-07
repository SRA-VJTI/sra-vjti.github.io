import {
  useEffect,
  useStateimport,
  createContext,
  useContext,
  useState,
} from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import useWindowSize from '../../utils/ResizeHook';
import { NavbarData } from '../../data';
import NavbarItems from '../NavbarItem/NavbarItems';
import { faL } from '@fortawesome/free-solid-svg-icons';

const StateContext = createContext();

const Navbar = () => {
  const [isNavbarDown, setIsNavbarDown] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    let navbar = document.getElementById('navbar');
    if (size.width > 780) {
      setIsNavbarDown(false);
      navbar.style.clipPath = 'circle(300% at 100% 0%)';
    } else {
      setIsNavbarDown(false);
    }
  }, [size]);

  useEffect(() => {
    let navbar = document.getElementById('navbar');
    if (isNavbarDown) {
      navbar.style.clipPath = 'circle(300% at 100% 0%)';
    } else {
      navbar.style.clipPath = 'circle(15% at 100% 0%)';
    }
  }, [isNavbarDown]);

  const onKhopdiClick = () => {
    setIsNavbarDown(!isNavbarDown);
  };
  const linkClick = () => {
    if (!(size.width > 780) && isNavbarDown) {
      setIsNavbarDown(false);
    }
  };

  return (
    <>
      <nav className={styles.navbar} id='navbar'>
        <div className={styles.navbarToggle} id='navbar-toggle'>
          <img
            onClick={onKhopdiClick}
            src='/static/images/KhopdiBaba.svg' // Need to remove this and just add SRA logo
            className={styles.khopdi}
            id='khopdi'
            alt=''
          />
        </div>
        <div className={styles.navbarElemList} id='navbar-elem-list'>
          <Link href='/' onClick={linkClick}>
            <div className={styles.navHome} id='nav-home'>
              <img
                className={styles.sraLogo}
                src={'/static/images/SRA_logo.png'}
                alt=''
              />
            </div>
          </Link>

          {NavbarData.map((navItem, idx) => {
            return (
              <NavbarItems
                navItem={navItem}
                idx={idx}
                linkClick={linkClick}
                isNavbarDown={isNavbarDown}
                setIsNavbarDown={setIsNavbarDown}
              />
            );
          })}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
