import { NavLink} from 'react-router-dom';
import styles from './AddPetButton.module.css'
import plussmall from '../../images/sprite.svg';

export default function AddPetButton() {

    return (
        <NavLink
        className={styles.button}
        to="/add-pet"
      >
          Add pet
      <svg  className={styles.plusIcon}  width={24} height={24}>
        <use href={plussmall + '#logo'}></use>
      </svg>
      </NavLink>

    )
}

