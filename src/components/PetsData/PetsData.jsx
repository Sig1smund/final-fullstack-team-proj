import PetsList from "components/PetsList/PetsList";
import css from './PetsData.module.css';
import plussmall from '../../images/sprite.svg';
import { NavLink } from "react-router-dom";
import AddPetButton from "components/AddPetButton/AddPetButton";

export default function PetsData() {
  return (
  
    <div className={css.petsListWrapper}>
      <div className={css.petsContainer}>
  <h2 className={css.title}>My pets:</h2>
  <div className={css.addPetsButton_container}>
          <AddPetButton />
        </div>
      </div>
  <PetsList/>
</div>


    )
}
