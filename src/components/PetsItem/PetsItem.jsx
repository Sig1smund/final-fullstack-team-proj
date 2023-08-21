import css from './PetsItem.module.css'
export default function PetsItem({pet}) {
  
    return (
        <>
        <li className={css.petsItemWrapper}>
<img src={pet.avatar} alt={pet.name} className={css.petsImg} />
<div className={css.petInfoWrapper}>
    <p className={css.petInfo}><b>Name:</b> {pet.name}</p>
    <p className={css.petInfo}><b>Date of birth:</b> {pet.birthday}</p>
    <p className={css.petInfo}><b>Type:</b> {pet.type}</p>
    <p className={css.petInfo}><b>Comments: </b>{pet.comments}</p>
</div>
</li>
</>
    )
}