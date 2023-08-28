import PetsList from "components/PetsList/PetsList";
import css from './PetsData.module.css';
import plussmall from '../../images/sprite.svg';
import { NavLink } from "react-router-dom";

export default function PetsData() {
    return (
<div className={css.petsListWrapper}>
  <h2 className={css.title}>My pets:</h2>
  <div className={css.addPetsButton_container}>
    <NavLink className={css.addPetsButton} to="/add-pet">
      Add pet
      <svg  className={css.plusIcon}   width={24} height={24}>
        <use href={plussmall + '#logo'}></use>
      </svg>
    </NavLink>
  </div>
  <PetsList/>
</div>
    )
}
