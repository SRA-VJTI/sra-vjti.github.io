'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar({ main, activities }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [pathname]);

  const isActivities = pathname.startsWith('/activities');

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link href="/" className="navbar__logo" aria-label="SRA VJTI — home">
          <Image
            src="/sra-logo.png"
            alt="Society of Robotics and Automation"
            width={1999}
            height={1200}
            priority
          />
          <span className="navbar__logo-text">VJTI</span>
        </Link>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {main.map((item) => {
            if (item.dropdown) {
              return (
                <li
                  key={item.label}
                  className="navbar__drop-item"
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  <button
                    className={`navbar__drop-trigger${isActivities ? ' nav-active' : ''}`}
                    onClick={() => setDropOpen((v) => !v)}
                  >
                    {item.label}
                    <svg
                      className={`navbar__chevron${dropOpen ? ' navbar__chevron--open' : ''}`}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <ul className={`navbar__dropdown${dropOpen ? ' navbar__dropdown--open' : ''}`}>
                    {activities.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={pathname === sub.href ? 'nav-active' : ''}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            if (item.external) {
              return (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? 'nav-active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
