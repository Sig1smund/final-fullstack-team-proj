import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './UserPage.module.css'
import sprite from '../../images/sprite.svg'
import UserForm from 'components/UserForm/UserForm'
import Cross from '../../images/cross-small.svg'
import { useSelector } from 'react-redux';
import {selectUser} from '../../redux/auth/selectors'
import { updateUser } from 'redux/auth/operations';
import PetsData from 'components/PetsData/PetsData';


export default function UserPage() {
const [readOnly, setReadOnly]=useState(true)

const user = useSelector(selectUser)

const dispatch = useDispatch();


const onToggleReadOnly = () => {
    setReadOnly(prevState => !prevState);
  };
  //save new avatar photo
  const saveNewPhoto = userAvatar => {
    console.log(userAvatar)
    const formData = new FormData();

    formData.append('userAvatar', userAvatar);

   
  };
  const onSubmitForm=(newDataUser)=>{
    // setUser(newDataUser)
    
    console.log(newDataUser);
    dispatch(updateUser(newDataUser));
  }
 

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
{readOnly ? (<UserForm readonly={true} user={user}/>):(<UserForm readonly={false} user={user} saveNewPhoto={saveNewPhoto} onSubmit={onSubmitForm} />)}

</div>

<PetsData/>

    </div>

</div>
        ) 
}
    
