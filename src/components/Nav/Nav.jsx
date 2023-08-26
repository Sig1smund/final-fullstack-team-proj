import { NavLink, useLocation } from 'react-router-dom';
import css from './Nav.module.css';

export default function Nav() {
  const location = useLocation();
  return (
    <nav className={css.nav}>
      <NavLink
        className={
          location.pathname === '/news'
            ? [css.find, css.active].join(' ')
            : css.find
        }
        to="/news"
      >
        News
      </NavLink>
      <NavLink
        className={
          location.pathname === '/notices'
            ? [css.find, css.active].join(' ')
            : css.find
        }
        to="/notices"
      >
        Find pet
      </NavLink>
      <NavLink
        className={
          location.pathname === '/friends'
            ? [css.find, css.active].join(' ')
            : css.find
        }
        to="/friends"
      >
        Our friends
      </NavLink>
    </nav>
  );
}
