import React, { useState } from 'react';
import style from './BurgerMenu.module.css';
// import Logo from '../../assets/logo.png';
// import LogoText from '../../assets/logo_text.png';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import svg from '../../images/sprite.svg';
import AuthNav from 'components/AuthNav/AuthNav';
import Nav from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';

const BurgerManu = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.box}>
          {/* <div className={style.logo_image}>
            <img src={Logo} alt="/" />
            <img src={LogoText} alt="/" />
          </div> */}
          <div
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <Logo />
            <AuthNav />
            <Nav />
          </div>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? (
              <svg width="24" height="24">
                <use href={svg + '#cross-small'}></use>
              </svg>
            ) : (
              <svg width="24" height="24">
                <use href={svg + '#menu-hamburger'}></use>
              </svg>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default BurgerManu;
