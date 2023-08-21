import { useState } from 'react';

import css from './UserForm.module.css'
import sprite from '../../images/sprite.svg'

export default function UserForm({onSubmit, readonly}) {
    const [avatar, setAvatar]=useState("")
const [name, setName]=useState("")
const [email, setEmail]=useState("")
const [birthday, setBirthday]=useState("")
const [phone, setPhone]=useState("")
const [city, setCity]=useState("")

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
            <img className={css.avatar} alt='avatar'/>
            <input
              type="file"
              value=""
              style={{ display: 'none' }}
            />
            </div>

            <div className={css.userInfo}>
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
            </div>
            
            <button
                type="button"
                className={css.LogOutBtn}
               
              >
                <svg  width="24" height="24" className={css.iconLogOut}  >
        <use href={sprite + "#logout"}></use>
    </svg>
                {/* <img src={LogOut} className={css.iconLogOut} alt="logout" /> */}
                Log Out
              </button>
            
            </form>

        </div>
    )
}