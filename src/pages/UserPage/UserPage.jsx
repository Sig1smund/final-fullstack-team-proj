import { useState } from 'react';
import css from './UserPage.module.css'
import sprite from '../../images/sprite.svg'
import UserForm from 'components/UserForm/UserForm'
import PetsList from 'components/PetsList/PetsList'
// import UserForm from 'components/UserForm/UserForm';
import Cross from '../../images/cross-small.svg'
import { useSelector } from 'react-redux';
import {selectUser} from '../../redux/auth/selectors'


export default function UserPage() {
const [readOnly, setReadOnly]=useState(true)
const user = useSelector(selectUser)
// const user ={
//     "name": "iii",
//     "email": "iiii@mail.com"
// }
console.log(user)


const onToggleReadOnly = () => {
    setReadOnly(prevState => !prevState);
  };
  //save new avatar photo
  const saveNewPhoto = userAvatar => {
    console.log(userAvatar)
    const formData = new FormData();

    formData.append('userAvatar', userAvatar);

    // dispatch(updateUser(formData));
  };
 

    return (
<div className={css.bg} >
    <div className={css.container}>
        <div className={css.userContainer}>
    <h2 className={css.title}>My information:</h2>
    {readOnly? (<button className={css.iconEditButton} onClick={onToggleReadOnly}>
    <svg  width="24" height="24" className={css.iconEdit}  >
        <use href={sprite + "#edit-2"}></use>
    </svg>
              
</button>):(<button className={css.iconEditButton} onClick={onToggleReadOnly}>
    {/* <svg  width="24" height="24" className={css.iconCancel}  >
        <use  width="24" height="24" href={sprite + "#cross-small"}></use>
    </svg> */}
              <img src={Cross} alt='cross icon' className={css.iconCross}/>
</button>)}
{readOnly ? (<UserForm readonly={true} user={user}/>):(<UserForm readonly={false} user={user} saveNewPhoto={saveNewPhoto} />)}

</div>
<div className={css.petsListWrapper}>
    <h2 className={css.title}>My pets:</h2>
    <PetsList/>
</div>


    </div>

</div>
        ) 
}
    
