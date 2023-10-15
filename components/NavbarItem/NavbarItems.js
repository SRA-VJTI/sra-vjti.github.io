import React, { useEffect, useState, useRef } from 'react';
import styles from './NavbarItems.module.scss';
import Link from 'next/link';
import useWindowSize from '../../utils/ResizeHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretRight,
  faL,
} from '@fortawesome/free-solid-svg-icons';


const NavbarItems = ({ navItem, idx, linkClick, isNavbarDown, setIsNavbarDown }) => {
  const [onMenu, setOnMenu] = useState(false);
  const [onSubMenu, setSubMenu] = useState(false);
  const [isWebView, setIsWebView] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 780) {
      setIsWebView(true)
    } else {
      setIsWebView(false);
    }
  }, [size]);

  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        // console.log("Outside Clicked. ");
        setSubMenu(false);
      }
    };
    
    if (isNavbarDown){
    window.addEventListener("click", handleOutSideClick);

    return () => {
      window.removeEventListener("click", handleOutSideClick);
    };
  }
  }, [ref, isNavbarDown]);

  return (
    <>
      {isWebView &&
        (navItem.subMenu ? (
          <div className={styles.Menu}>
            <Link key={`link_${idx}`} href={navItem.link}>
              <div
                className={styles.navbarElem}
                onMouseOver={() => setOnMenu(true)}
                onMouseLeave={() => setOnMenu(false)}
              >
                <span className={styles.title}>{navItem.name}</span>
                <div
                  className={styles.dropDown}
                  onMouseOver={() => setSubMenu(true)}
                  onMouseLeave={() => setSubMenu(false)}
                >
                  {onMenu &&
                    navItem.subMenu.map((item, idx) => {
                      return (
                        <Link key={idx} href={item.link}>
                          <div className={styles.subMenu}>{item.name} </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className={styles.Menu}>
            <Link key={`link_${idx}`} href={navItem.link}>
              <div className={styles.navbarElem}>
                <span className={styles.title}>{navItem.name}</span>
              </div>
            </Link>
          </div>
        ))}
      {!isWebView &&
        (navItem.subMenu ? (
          <div className={styles.Menu}>
              <div
                ref = {ref}
                className={styles.navbarElem}
                onClick={() => setSubMenu(!onSubMenu)}
              >
                <span className={styles.title} id='elements'>
                  {!onSubMenu ? (
                    <>
                      {navItem.name} <FontAwesomeIcon icon={faCaretRight} />
                    </>
                  ) : (
                    <>
                      {navItem.name} <FontAwesomeIcon icon={faCaretDown} />
                    </>
                  )}
                </span>
                { onSubMenu &&
                  navItem.subMenu.map((item, idx) => {
                    return (
                      <Link key={idx} href={item.link} onClick={linkClick}>
                        <div className={styles.subMenu}>{item.name} </div>
                      </Link>
                    );
                  })}
              </div>
          </div>
        ) : (
          <div className={styles.Menu}ref = {ref}>
            <Link key={`link_${idx}`} href={navItem.link} onClick= {linkClick}>
              <div className={styles.navbarElem}>
                <span className={styles.title}>{navItem.name}</span>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default NavbarItems;
