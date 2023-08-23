import { useState } from 'react';
import css from './PetsItem.module.css'
import sprite from '../../images/sprite.svg'
export default function PetsItem({pet}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <div className={css.petsListWrapper}>
        <li className={css.petsItemWrapper}>
<img src={pet.avatar} alt={pet.name} className={css.petsImg} />
<div className={css.petInfoWrapper}>
    <p className={css.petInfoBtn}>Name: {pet.name}
    <button
    type='submit'
    className={css.btnTrash}
    >
        <svg  width="24" height="24"  >
        <use href={sprite + "#trash-2"}></use>
    </svg>

    </button>
    
    </p>
    <p className={css.petInfo}><b>Date of birth:</b> {pet.birthday}</p>
    <p className={css.petInfo}><b>Type:</b> {pet.type}</p>
    <p className={css.petInfo}><b>Comments: </b>{pet.comments}</p>
</div>
</li>
</div>
    )
}