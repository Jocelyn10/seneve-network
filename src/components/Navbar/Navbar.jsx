import React, { useState } from 'react';
import { navLinks } from '../../../utils/menuLinks';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navlogo">[BrandLogo]</a>
      </Link>
      <ul className={isOpen === false ? 'navmenu' : 'navmenu' + ' ' + 'active'}>
        <li className="navitem">
          <Link href="/">
            <a
              className={
                isOpen === false ? 'navlink' : 'navlink' + ' ' + 'active'
              }
              onClick={openMenu}
            >
              Home
            </a>
          </Link>
        </li>
        <li className="navitem">
          <Link href="/about">
            <a
              className={
                isOpen === false ? 'navlink' : 'navlink' + ' ' + 'active'
              }
              onClick={openMenu}
            >
              About
            </a>
          </Link>
        </li>
        <li className="navitem">
          <Link href="/contact">
            <a
              className={
                isOpen === false ? 'navlink' : 'navlink' + ' ' + 'active'
              }
              onClick={openMenu}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
      <button
        className={
          isOpen === false ? 'hamburger' : 'hamburger' + ' ' + 'active'
        }
        onClick={openMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default NavBar;
