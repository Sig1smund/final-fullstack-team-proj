import logo from '../../images/logo.svg';
import css from './Logo.module.css';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink to="/main">
      <img className={css.logo} src={logo} alt="Logo" />
    </NavLink>
  );
}
