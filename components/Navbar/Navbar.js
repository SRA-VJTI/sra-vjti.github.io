import { useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { NavbarData } from '../../data';
import useWindowSize from '../../utils/ResizeHook';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const isMobile = size.width > 0 && size.width <= 780;

  const close = () => setIsOpen(false);

  return (
    <>
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        onMouseEnter={() => {
          if (!isMobile) setIsOpen(true);
        }}
        onMouseLeave={() => {
          if (!isMobile) setIsOpen(false);
        }}
      >
        <div className={styles.logoArea}>
          <Link
            href='/'
            onClick={(e) => {
              if (isMobile) {
                e.preventDefault();
                setIsOpen((prev) => !prev);
              }
            }}
          >
            <img
              className={styles.sraLogo}
              src='/static/images/SRA_logo.png'
              alt='SRA Logo'
            />
          </Link>
        </div>

        <nav className={styles.navList}>
          {NavbarData.map((item, idx) => (
            <div key={idx} className={styles.navGroup}>
              {item.link.startsWith('http') ? (
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.navItem}
                  onClick={close}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.link}
                  className={styles.navItem}
                  onClick={close}
                >
                  {item.name}
                </Link>
              )}
              {item.subMenu && (
                <div className={styles.subList}>
                  {item.subMenu.map((sub, subIdx) =>
                    sub.link.startsWith('http') ? (
                      <a
                        key={subIdx}
                        href={sub.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.subItem}
                        onClick={close}
                      >
                        {sub.name}
                      </a>
                    ) : (
                      <Link
                        key={subIdx}
                        href={sub.link}
                        className={styles.subItem}
                        onClick={close}
                      >
                        {sub.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {isMobile && isOpen && (
        <div className={styles.backdrop} onClick={close} />
      )}
    </>
  );
};

export default Navbar;
