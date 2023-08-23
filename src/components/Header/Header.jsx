import css from './Header.module.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import Nav from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';
import React from 'react';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';

import UserNav from 'components/UserNav/UserNav';

export default function Header() {
  const { isLoggedIn } = useAuth();
  
  return (
    <header className={css.header}>
      <Logo />
      <Nav />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
      {/* <AuthNav /> */}
      {/* <UserNav /> */}
      <BurgerMenu />
    </header>
  );
}


// Link change need and container