// import { useState } from 'react';
import css from './UserPage.module.css'
import sprite from '../../images/sprite.svg'
import UserForm from 'components/UserForm/UserForm'
import PetsList from 'components/PetsList/PetsList'
// import UserForm from 'components/UserForm/UserForm';



export default function UserPage() {

    return (
<div >
    <div className={css.container}>
        <div className={css.userContainer}>
    <h2 className={css.title}>My information:</h2>
    <button className={css.iconEditButton} >
    <svg  width="24" height="24" className={css.iconEdit}  >
        <use href={sprite + "#edit-2"}></use>
    </svg>
              
</button>
<UserForm/>
</div>
<div>
    <h2 className={css.title}>My pets:</h2>
</div>
<PetsList/>
    </div>

</div>
        ) 
}
    
