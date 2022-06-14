import React from 'react';
import Link from 'next/link';
import { Logo } from 'vcc-ui';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link href='/'>
        <Logo type='spreadmark' height={14} />
      </Link>
    </nav>
  );
};

export default Nav;
