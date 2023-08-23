import { useState, useEffect, useRef} from 'react';

import css from './UserForm.module.css'
import sprite from '../../images/sprite.svg'
import DefaultAvatar from '../../images/Photo default.svg'
import LogOut from '../../images/logout.svg'
import DeleteIcon from '../../images/x.svg'
import Check from '../../images/check.svg'


export default function UserForm({onSubmit, readonly, user, saveNewPhoto}) {
    const [avatar, setAvatar]=useState()
const [name, setName]=useState(user.name || "")
const [email, setEmail]=useState(user.email||"")
const [birthday, setBirthday]=useState(user.birthday||"")
const [phone, setPhone]=useState(user.phone||"")
const [city, setCity]=useState(user.city||"")
// const [selectedFile, setSelectedFile] = useState(null);
// const [isEditingPhoto, setIsEditingPhoto] = useState(true);

useEffect(() => {
  setAvatar(null);
  setName(user.name);
  setEmail(user.email);
  setBirthday(user.birthDate);
  setPhone(user.phone);
  setCity(user.city);
}, [user]);

const inputPhotoRef = useRef();

  const inputPhoneRef = useRef();

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
  const onChangeFile = event => {
    const file = event.target.files[0];
    if (file.size > 1024 * 1024 * 3) {
      alert("Wrong size")
      return;
    }
    setAvatar(file);
  };
  const onLoadNewPhoto = () => {
    inputPhotoRef.current.click();
  };
  const onConfirmNewAvatar = () => {
    saveNewPhoto(avatar);
  };
  const onCancelNewAvatar = () => {
    setAvatar(null);
  };
 

  const handleSubmit =event=>{
    event.preventDefault();
    if (phone.length < 13) {
      inputPhoneRef.current.focus();
    }
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
              ref={inputPhotoRef}
              onChange={onChangeFile}
             
              style={{ display: 'none' }}
            />
            {!readonly && 
            (avatar ? (<div className={css.btnDual}>
              <button
                type="button"
                className={css.btnConfirm}
                onClick={onConfirmNewAvatar}
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
                onClick={onCancelNewAvatar}
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
                  onClick={onLoadNewPhoto}
                 
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
                {/* <svg width='24px' height='24px' className={css.iconLogOut}>
                <use xlinkHref='../../images/sprite.svg#logout'></use>
                </svg>
                 */}
                <img src={LogOut} className={css.iconLogOut} alt="logout" />
                Log Out
              </button>) : (<div className={css.saveBtnWrapper}><button className={css.saveBtn}>Save</button></div>)}
            </div>
            
            </div>
            
           
            
            </form>

        </div>
    )
}