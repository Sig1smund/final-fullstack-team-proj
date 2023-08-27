import { NavLink } from "react-router-dom";
import styles from './NoticesCategoriesNav.module.css'

export default function NoticesCategoriesNav() {
    return (
        <nav className={styles.container}>
        <NavLink className={styles.button} to="/notices/sell">
        sell
        </NavLink>
        <NavLink className={styles.button} to="/notices/lost-found">
        lost/found
        </NavLink>
        <NavLink className={styles.button} to="/notices/in-good-hands">
        in-good-hands
        </NavLink>

        {/* <NavLink activeClassName={styles.active} className={styles.button} to="/notices/sell">
        sell
        </NavLink>
        <NavLink activeClassName={styles.active} className={styles.button} to="/notices/lost-found">
        lost/found
        </NavLink>
        <NavLink activeClassName={styles.active} className={styles.button} to="/notices/in-good-hands">
        in-good-hands
        </NavLink> */}
      </nav>
    )
}