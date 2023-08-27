import { NavLink} from 'react-router-dom';
import styles from './AddPetButton.module.css'

export default function AddPetButton() {

    return (
        <NavLink
        className={styles.button}
        to="/add-pet"
      >
       Add Pet
      </NavLink>

    )
}