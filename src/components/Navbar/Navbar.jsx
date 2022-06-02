import React, { useState } from 'react';
import { navLinks } from '../../../utils/menuLinks';
import Link from 'next/link';

import NavItem from '../NavItem/NavItem';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <Link href="/">
          <a className="navlogo">[BrandLogo]</a>
        </Link>
        <ul
          className={isOpen === false ? 'navmenu' : 'navmenu' + ' ' + 'active'}
        >
          {navLinks.map((link, index) => {
            return (
              <NavItem
                key={index}
                link={link.path}
                name={link.name}
                openMenu={() => openMenu()}
              />
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
    </header>
  );
};

export default NavBar;
