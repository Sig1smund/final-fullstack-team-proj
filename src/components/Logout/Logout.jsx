import css from './Logout.module.css';
import logout from '../../images/sprite.svg';

export default function Logout() {
  return (
    <button className={css.btn} type="button">
      Logout
      <svg className={css.logout} width="24" height="24">
        <use href={logout + '#logout'}></use>
      </svg>
    </button>
  );
}
