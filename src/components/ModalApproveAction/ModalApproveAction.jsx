import css from './ModalApproveAction.module.css';
import logout from '../../images/sprite.svg';


export default function ModalApproveAction({ children, logo, close, action }) {
  return <>
    <div className={css.container}>
      <p className={css.title}>
         {children}
      </p>
      <div  className={css.buttons}>
        <button type="button" className={css.cancel} onClick={close}>
          Cancel
        </button>
        <button type="button" className={css.yes} onClick={action}>
          Yes
          <svg className={css.logout} width="24" height="24">
            <use href={logout + logo}></use>
          </svg>
        </button>
      </div>
    </div>
    </>
}
