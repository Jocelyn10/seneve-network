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
        {navLinks.map((link, index) => {
          return (
            <li key={index} className="navitem">
              <Link href={link.path}>
                <a
                  className={
                    isOpen === false ? 'navlink' : 'navlink' + ' ' + 'active'
                  }
                  onClick={openMenu}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          );
        })}
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
