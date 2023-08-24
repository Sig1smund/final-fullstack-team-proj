import css from './ModalApproveAction.module.css';
import logout from '../../images/sprite.svg';


export default function Congrats(close) {

  const action = () => {
    close();

  };

  return <>
    <div className={css.container}>
      <p className={css.title}>
         Congrats!
      </p>
      <p className={css.subtitle}>
        Youre registration is success
      </p>

        <button type="button" className={css.goToProfileBtn} onClick={action}>
          Go to profile
          <svg className={css.logo} width="24" height="24">
            <use href={logout + '#pawprint-1'}></use>
          </svg>
        </button>

    </div>
    </>
}
