import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css"

export default function AuthNav() {
    return (
      <div>
        <NavLink className={css.link__log} to="/login">
          Log In
        </NavLink>
        <NavLink className={css.link__reg} to="/register">Registration</NavLink>
      </div>
    );
}