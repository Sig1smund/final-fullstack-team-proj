import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css"
import pawprint from "../../images/sprite.svg"


export default function AuthNav() {
    return (
      <div className={css.auth__container}>
        <NavLink className={css.link__log} to="/login">
          Log In
          <svg className={css.paw} width={24} height={24}>
            <use href={pawprint+"#pawprint-1"}></use>
          </svg>
        </NavLink>
        <NavLink className={css.link__reg} to="/register">
          Registration
        </NavLink>
      </div>
    );
}