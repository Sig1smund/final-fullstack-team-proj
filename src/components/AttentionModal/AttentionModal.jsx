
import { NavLink } from "react-router-dom";

import css from './AttentionModal.module.css';
import logo from '../../images/sprite.svg';



export default function AttentionModalModal() {

  return (
  <>
    <div className={css.container}>
      <p className={css.title}>
          Attention
      </p>
      <p className={css.subtitle}>
         We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.
      </p>
      <div  className={css.buttons}>
        <NavLink className={css.loginBtn} to="/login">
          Login
          <svg  className={css.icon}   width={24} height={24}>
            <use href={logo + '#pawprint1'}></use>
          </svg>
        </NavLink>
        <NavLink className={css.registerBtn} to="/register">
          Register
        </NavLink>
      </div>
    </div>
  </>
  )
};

