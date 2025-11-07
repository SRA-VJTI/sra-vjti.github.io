import { useEffect, useState, useRef } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import useWindowSize from '../../utils/ResizeHook';
import { NavbarData } from '../../data';
import NavbarItems from '../NavbarItem/NavbarItems';

const Navbar = () => {
  const [isNavbarDown, setIsNavbarDown] = useState(false);
  const size = useWindowSize();
  const navbarRef = useRef(null);

  useEffect(() => {
    if (!navbarRef.current) return;

    if (size.width > 780) {
      setIsNavbarDown(false);
      navbarRef.current.style.clipPath = 'circle(300% at 100% 0%)';
    } else {
      setIsNavbarDown(false);
    }
  }, [size]);

  useEffect(() => {
    if (!navbarRef.current) return;

    if (isNavbarDown) {
      navbarRef.current.style.clipPath = 'circle(300% at 100% 0%)';
    } else {
      navbarRef.current.style.clipPath = 'circle(15% at 100% 0%)';
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
    <nav className={styles.navbar} ref={navbarRef}>
      <div className={styles.navbarToggle}>
        <img
          onClick={onKhopdiClick}
          src='/static/images/KhopdiBaba.svg'
          className={styles.khopdi}
          alt='Toggle navigation menu'
        />
      </div>
      <div className={styles.navbarElemList}>
        <Link href='/' onClick={linkClick}>
          <div className={styles.navHome}>
            <img
              className={styles.sraLogo}
              src={'/static/images/SRA_logo.png'}
              alt='SRA VJTI Logo'
            />
          </div>
        </Link>

        {NavbarData.map((navItem, idx) => (
          <NavbarItems
            key={`nav-${idx}`}
            navItem={navItem}
            idx={idx}
            linkClick={linkClick}
            isNavbarDown={isNavbarDown}
            setIsNavbarDown={setIsNavbarDown}
          />
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
