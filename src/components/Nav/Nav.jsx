import { NavLink } from 'react-router-dom';
import css from "./Nav.module.css"

export default function Nav() {
    return (
      <nav className={css.nav}>
        <NavLink className={css.find} to="/notices">
          Find pet
        </NavLink>
      </nav>
    );
}
