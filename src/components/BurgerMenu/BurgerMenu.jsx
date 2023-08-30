import React, { useState } from 'react';
import css from './BurgerMenu.module.css';
import logo from '../../images/logo.svg';
import svg from '../../images/sprite.svg';
import useAuth from 'hooks';
import logout from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';
import pawprint from '../../images/sprite.svg';
import user_svg from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import { logOut } from 'redux/auth/operations';

const BurgerMenu = () => {
   const { user } = useAuth();
  const [nav, setNav] = useState(false);
  const { isLoggedIn } = useAuth();
  const handleMenuClick = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();

  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setModalActive(true);
  };

  const close = () => {
    setModalActive(false);
  };

  const userLogout = async () => {
    dispatch(logOut());
    setModalActive(false);
    navigate('/user');
  };

  return (
    <>
      <div
        className={nav ? [css.menu, css.active].join(' ') : [css.menu]}
        onClick={handleMenuClick}
      >
        <NavLink to="/">
          <img className={css.logo} src={logo} alt="Logo" />
        </NavLink>

        {isLoggedIn ? (
          <>
            <button className={css.btn} type="button" onClick={openModal}>
              Log out
              <svg className={css.logout} width="24" height="24">
                <use href={logout + '#logout'}></use>
              </svg>
            </button>

            <Modal isOpen={modalActive} onClose={close}>
              <ModalApproveAction
                logo={'#logout'}
                close={close}
                action={userLogout}
              >
                Already leaving?
              </ModalApproveAction>
            </Modal>
            <div className={css.thumb_auth}>
              <NavLink to="/user" className={css.profile}>
                <svg className={css.icon__user} width="28" height="28">
                  <use href={user_svg + '#user-1'}></use>
                </svg>
                <span className={css.username}>{user.name}</span>
              </NavLink>
            </div>
          </>
        ) : (
          <div className={css.auth__container}>
            <NavLink className={css.link__log} to="/login">
              Log In
              <svg className={css.paw} width={24} height={24}>
                <use href={pawprint + '#pawprint-1'}></use>
              </svg>
            </NavLink>
            <NavLink className={css.link__reg} to="/register">
              Registration
            </NavLink>
          </div>
        )}

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
      <div onClick={handleMenuClick} className={css.mobile_btn}>
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
    </>
  );
};

export default BurgerMenu;
