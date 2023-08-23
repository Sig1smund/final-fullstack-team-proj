import React, { useState } from 'react';
import css from './BurgerMenu.module.css';
import logo from '../../images/logo.svg';
import svg from '../../images/sprite.svg';
// import AuthNav from 'components/AuthNav/AuthNav';
// import Nav from 'components/Nav/Nav';
import logout from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';
// import pawprint from '../../images/sprite.svg';

const BurgerManu = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className={nav ? [css.menu, css.active].join(' ') : [css.menu]}>
        <NavLink to="/main">
          <img className={css.logo} src={logo} alt="Logo" />
        </NavLink>

        {/* For UserNav    */}
        <button className={css.btn} type="button">
          Log out
          <svg className={css.logout} width="24" height="24">
            <use href={logout + '#logout'}></use>
          </svg>
        </button>
        {/* For UserNav    */}
        {/* For AuthNav */}
        {/* <div className={css.auth__container}>
          <NavLink className={css.link__log} to="/login">
            Log In
            <svg className={css.paw} width={24} height={24}>
              <use href={pawprint + '#pawprint-1'}></use>
            </svg>
          </NavLink>
          <NavLink className={css.link__reg} to="/register">
            Registration
          </NavLink>
        </div> */}
        {/* For AuthNav */}
        <nav className={css.nav}>
          <NavLink className={css.find} to="/news">
            News
          </NavLink>
          <NavLink className={css.find} to="/notices">
            Find pet
          </NavLink>
          <NavLink className={css.find} to="/friends">
            Our friends
          </NavLink>
        </nav>
      </div>
      <div onClick={() => setNav(!nav)} className={css.mobile_btn}>
        {nav ? (
          <svg className={css.icon} width="24" height="24">
            <use href={svg + '#cross-small'}></use>
          </svg>
        ) : (
          <svg className={css.icon} width="24" height="24">
            <use href={svg + '#menu-hamburger'}></use>
          </svg>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default BurgerManu;
