import PetsList from "components/PetsList/PetsList"
import css from './PetsData.module.css'

export default function PetsData() {
    return (
<div className={css.petsListWrapper}>
    <h2 className={css.title}>My pets:</h2>
    <PetsList/>
</div>
    )
}