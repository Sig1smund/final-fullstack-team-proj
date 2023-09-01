import { NavLink } from "react-router-dom"
import css from "./UserNav.module.css"
import Logout from "components/Logout/Logout"
import user_svg from "../../images/sprite.svg" 

import  useAuth  from 'hooks';

export default function UserNav() {

  const { user } = useAuth();
  const { avatarURL } = user;
    return (
      <div className={css.thumb_auth}>
        <Logout />
        <NavLink to="/user" className={css.profile}>
          {avatarURL ? <img
            src={avatarURL}
            className={css.avatar__user}
            alt="profile"
          /> :
            <svg className={css.icon__user} width="28" height="28">
              <use href={user_svg + '#user-1'}></use>
            </svg>
          }
          <span className={css.username}>{user.name}</span>
        </NavLink>
      </div>
    );
}