import { useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import css from './UserForm.module.css'
import sprite from '../../images/sprite.svg'
import DefaultAvatar from '../../images/Photo default.svg'
import LogOut from '../../images/logout.svg'
import DeleteIcon from '../../images/x.svg'
import Check from '../../images/check.svg'


const initialState = {
  
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city:''

}

export default function UserForm({onSubmit, readonly, user, saveNewPhoto}) {

const [state, setState]=useState(user || initialState);
const [avatarURL, setAvatarURL]=useState(user.avatarURL || '')
const dispatch = useDispatch();

const onChange = (e)=>{
const {name, value} = e.target;
setState(state=>({...state, [name]: value}))
}

const onChangeFile = event => {
      const file = event.target.files[0];
      if (file.size > 1024 * 1024 * 3) {
        alert("Wrong size")
        return;
      }

      const newAvatar = URL.createObjectURL(file);
      console.log('newAvatar', );
      // setAvatarURL(file);
      setAvatarURL(newAvatar);
    };





const inputPhotoRef = useRef();

  
  // const onChangeFile = event => {
  //   const file = event.target.files[0];
  //   if (file.size > 1024 * 1024 * 3) {
  //     alert("Wrong size")
  //     return;
  //   }
  //   setAvatar(file);
  // };
  const onLoadNewPhoto = () => {
    inputPhotoRef.current.click();
  };
  const onConfirmNewAvatar = () => {
    saveNewPhoto(avatarURL);
  };
  const onCancelNewAvatar = () => {
    setAvatarURL(null);
  };





 

  const handleSubmit =event=>{
    event.preventDefault();
    const {name, email, phone, birthday, city} = state;
    
    // if (phone.length < 13) {
    //   inputPhoneRef.current.focus();
    // }
    console.log("state", state)

    // const formData = {name, email, phone, birthday, city};
    // test
      const formWithData = new FormData();
      formWithData.append("avatarURL", avatarURL);
      formWithData.append("name", name);
      formWithData.append("email", email);
      formWithData.append("phone", phone);
      formWithData.append("birthday", birthday);
      formWithData.append("city", city);
      console.log("FormData",formWithData);
      // 
      onSubmit(formWithData);
  }
    return (
        <div className={css.userCard}>
      <form className={css.form} onSubmit={handleSubmit}>
                <div className={css.userInfoWrapper}>
                  <div className={css.avatarWrapper}>
                {avatarURL? (<img
              src={avatarURL}
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
              accept='image/*, .png, .jpg, .gif, .web'
            //  name='file'
              // value=""
              ref={inputPhotoRef}

              onChange={onChangeFile}
             
             style={{ display: 'none' }}
            />
            {!readonly && 
            (avatarURL ? (<div className={css.btnDual}>
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
                name='name'
                value={state.name}
                required 
                className={css.input}
                onChange={onChange}
                readOnly={readonly}
                />
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>Email:</p>
                <input 
                type="email" 
                value={state.email}
                name='email'
                required 
                className={css.input}
                onChange={onChange}
                readOnly={readonly}
                />
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>Birthday:</p>
                <input 
                type="text" 
                value={state.birthday}
                name='birthday'
                required 
                className={css.input} 
                placeholder='00.00.0000' 
                pattern='/^\d{1,2}\-\d{1,2}\-\d{4}$/'
                onChange={onChange}
                readOnly={readonly}
                />
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>Phone:</p>
                <input 
                type="tel" 
                value={state.phone}
                name='phone'
                className={css.input}
                 placeholder="+380000000000" 
                 pattern='/^\+\d{12}$/\'
                 onChange={onChange}
                 readOnly={readonly}
                 />
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>City:</p>
                <input 
                type="text"
                value={state.city} 
                name='city'
                required 
                className={css.input} 
                placeholder="Kiev"
                onChange={onChange}
                readOnly={readonly}
                />
                </div>
                </div>
                {readonly ? (<button
                type="button"
                className={css.LogOutBtn}
                onClick={()=> dispatch(logOut())}               
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