import { NavLink } from "react-router-dom"
import css from "./UserNav.module.css"
import Logout from "components/Logout/Logout"
import user_svg from "../../images/sprite.svg" 
import { selectUser } from "redux/auth/selectors"
import { useSelector } from "react-redux"


export default function UserNav() {
  const user = useSelector(selectUser);
    return (
      <div className={css.thumb_auth}>
        <Logout />
        <NavLink to="/user" className={css.profile}>
          <svg className={css.icon__user} width="28" height="28">
            <use href={user_svg + '#user-1'}></use>
          </svg>
          <span className={css.username}>{user.name}</span>
        </NavLink>
      </div>
    );
}