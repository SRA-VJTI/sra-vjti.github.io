import { useEffect, useState, useCallback, useMemo } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import useWindowSize from '../../utils/ResizeHook';
import { NavbarData } from '../../data';
import NavbarItems from '../NavbarItem/NavbarItems';

const Navbar = () => {
  const [isNavbarDown, setIsNavbarDown] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    if (size.width > 780) {
      setIsNavbarDown(false);
      navbar.style.clipPath = 'circle(300% at 100% 0%)';
    } else {
      setIsNavbarDown(false);
      navbar.style.clipPath = 'circle(15% at 100% 0%)';
    }
  }, [size.width]);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    navbar.style.clipPath = isNavbarDown
      ? 'circle(300% at 100% 0%)'
      : 'circle(15% at 100% 0%)';
  }, [isNavbarDown]);

  const onKhopdiClick = useCallback(() => {
    setIsNavbarDown((prev) => !prev);
  }, []);

  const linkClick = useCallback(() => {
    if (size.width <= 780 && isNavbarDown) {
      setIsNavbarDown(false);
    }
  }, [size.width, isNavbarDown]);

  const navItems = useMemo(
    () =>
      NavbarData.map((navItem, idx) => (
        <NavbarItems
          key={`nav-${navItem.name}-${idx}`}
          navItem={navItem}
          idx={idx}
          linkClick={linkClick}
          isNavbarDown={isNavbarDown}
          setIsNavbarDown={setIsNavbarDown}
        />
      )),
    [linkClick, isNavbarDown]
  );

  return (
    <nav className={styles.navbar} id='navbar'>
      <div className={styles.navbarToggle} id='navbar-toggle'>
        <img
          onClick={onKhopdiClick}
          src='/static/images/KhopdiBaba.svg'
          className={styles.khopdi}
          id='khopdi'
          alt='Menu Toggle'
        />
      </div>
      <div className={styles.navbarElemList} id='navbar-elem-list'>
        <Link href='/' onClick={linkClick}>
          <div className={styles.navHome} id='nav-home'>
            <img
              className={styles.sraLogo}
              src={'/static/images/SRA_logo.png'}
              alt='SRA Logo'
            />
          </div>
        </Link>
        {navItems}
      </div>
    </nav>
  );
};

export default Navbar;
