import React, { useState } from 'react';
import { useRouter } from 'next/router';
import propTypes from 'prop-types';
import Link from 'next/link';

const NavItem = ({ link, name, openMenu }) => {
  const router = useRouter();

  return (
    <li className="navitem">
      <Link href={link}>
        <a
          className={
            router.pathname === link ? 'navlink' + ' ' + 'active' : 'navlink'
          }
          onClick={openMenu}
        >
          {name}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;

// proptypes check
NavItem.propTypes = {
  item: propTypes.string,
};
