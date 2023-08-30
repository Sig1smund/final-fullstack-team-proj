import { NavLink, useLocation } from 'react-router-dom';
import useAuth from 'hooks';
import styles from './NoticesCategoriesNav.module.css';

export default function NoticesCategoriesNav() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.container}>
      <NavLink
        className={
          location.pathname === '/notices/sell'
            ? [styles.button, styles.active].join(' ')
            : styles.button
        }
        to="/notices/sell">
        sell
      </NavLink>
      <NavLink
        className={
          location.pathname === '/notices/lost-found'
            ? [styles.button, styles.active].join(' ')
            : styles.button
        }
        to="/notices/lost-found">
        lost/found
      </NavLink>
      <NavLink
        className={
          location.pathname === '/notices/in-good-hands'
            ? [styles.button, styles.active].join(' ')
            : styles.button
        }
        to="/notices/in-good-hands">
        in good hands
      </NavLink>

      {isLoggedIn && 
      <>
           <NavLink
           className={
             location.pathname === '/notices/favorite'
               ? [styles.button, styles.active].join(' ')
               : styles.button
           }
           to="/notices/favorite">
           favorite ads
         </NavLink>
              <NavLink
              className={
                location.pathname === '/notices/own'
                  ? [styles.button, styles.active].join(' ')
                  : styles.button
              }
              to="/notices/own">
              my ads
            </NavLink>
            </>
      }
    </nav>
  );
}
