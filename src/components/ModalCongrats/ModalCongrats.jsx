import css from './ModalCongrats.module.css';
import icon from '../../images/sprite.svg';

//import { useNavigate} from 'react-router-dom';


export default function ModalCongrats({ onClose }) {

 // const navigate = useNavigate();

  const CloseAndNavigate = () => {
    onClose();
  };

  return (
    <>
      <div className={css.container}>
        <p className={css.title}>
          Congrats!
        </p>
        <p className={css.subtitle}>
          Youre registration is success
        </p>

        <button type="button" className={css.goToProfileBtn} onClick={CloseAndNavigate}>
          Go to profile
          <svg className={css.logo} width="24" height="24">
            <use href={icon + '#pawprint-1'}></use>
          </svg>
        </button>

      </div>
    </>
  )

};
