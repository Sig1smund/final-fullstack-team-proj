import { useState } from 'react';

import css from './UserForm.module.css'
import sprite from '../../images/sprite.svg'
import DefaultAvatar from '../../images/Photo default.svg'
import LogOut from '../../images/logout.svg'
import DeleteIcon from '../../images/x.svg'
import Check from '../../images/check.svg'


export default function UserForm({onSubmit, readonly}) {
    const [avatar, setAvatar]=useState(false)
const [name, setName]=useState("")
const [email, setEmail]=useState("")
const [birthday, setBirthday]=useState("")
const [phone, setPhone]=useState("")
const [city, setCity]=useState("")
const [selectedFile, setSelectedFile] = useState(null);
const [isEditingPhoto, setIsEditingPhoto] = useState(true);

const onChangeName = event => {
    setName(event.target.value);
  };
  const onChangeEmail = event => {
    setEmail(event.target.value);
  };
  const onChangePhone = event => {
    setPhone(event.target.value);
  };
  const onChangeBirthday = event => {
    setBirthday(event.target.value);
  };
  const onChangeCity = event => {
    setCity(event.target.value);
  };
 
  const handleSubmit =event=>{
    event.preventDefault();
    const formData = {
        name,
        email,
        birthday,
        phone,
        city,
        avatar
      };
      console.log(formData)
      onSubmit(formData);
  }
    return (
        <div className={css.userCard}>
            <form className={css.form} onSubmit={handleSubmit}>
                <div className={css.userInfoWrapper}>
                  <div className={css.avatarWrapper}>
                {avatar? (<img
              src={avatar}
              className={[
                css.avatar,
                readonly ? css.avatarReadonlyON : '',
              ].join(' ')}
              alt="profile"
            />): (<img src={DefaultAvatar} className={[
              css.avatar,
              readonly ? css.avatarReadonlyON : '',
            ].join(' ')} alt='avatar' />)}
            <input
              type="file"
             
              value=""
             
              style={{ display: 'none' }}
            />
            {!readonly && 
            (avatar ? (<div className={css.btnDual}>
              <button
                type="button"
                className={css.btnConfirm}
                
              >
                <img
                  src={Check}
                  className={css.iconCheck}
                  alt="check"
                ></img>
                
              </button>
              <span>Confirm</span>
              <button
                type="button"
                
                className={css.btnConfirm}
              >
                <img
                  src={DeleteIcon}
                  className={css.iconCross}
                  alt="cross"
                ></img>
              </button>
            </div>):(<button
                  type="button"
                  className={css.btnEdit}
                 
                >
                   <svg width='24px' height='24px' className={css.iconCamera}>
                      <use href={sprite + "#camera"}></use>
                    </svg>
                
                  Edit photo
                </button>))}
                </div>


            <div className={css.userInfo}>
              <div className={css.infoWrapper}>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>Name:</p>
                <input 
                type="text" 
                value={name}
                required 
                className={css.input}
                onChange={onChangeName}
                readOnly={readonly}
                />
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>Email:</p>
                <input 
                type="email" 
                value={email}
                required 
                className={css.input}
                onChange={onChangeEmail}
                readOnly={readonly}
                />
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>Birthday:</p>
                <input 
                type="text" 
                value={birthday}
                required 
                className={css.input} 
                placeholder='00.00.0000' 
                pattern='/^\d{1,2}\-\d{1,2}\-\d{4}$/'
                onChange={onChangeBirthday}
                readOnly={readonly}
                />
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>Phone:</p>
                <input 
                type="tel" 
                value={phone}
                required 
                className={css.input}
                 placeholder="+380000000000" 
                 pattern='/^\+\d{12}$/'
                 onChange={onChangePhone}
                 readOnly={readonly}
                 />
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>City:</p>
                <input 
                type="text"
                value={city} 
                required 
                className={css.input} 
                placeholder="Kiev"
                onChange={onChangeCity}
                readOnly={readonly}
                />
                </div>
                </div>
                {readonly ? (<button
                type="button"
                className={css.LogOutBtn}
               
              >
                
                
                <img src={LogOut} className={css.iconLogOut} alt="logout" />
                Log Out
              </button>) : (<div className={css.saveBtnWrapper}><button className={css.saveBtn}>Save</button></div>)}
            </div>
            
            </div>
            
           
            
            </form>

        </div>
    )
}