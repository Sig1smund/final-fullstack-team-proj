import { useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserForm.module.css'
import sprite from '../../images/sprite.svg'
import DefaultAvatar from '../../images/Photo default.svg'
import LogOut from '../../images/logout.svg'
import DeleteIcon from '../../images/x.svg'
import Check from '../../images/check.svg'
import Modal from 'components/Modal/Modal';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  
  name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('*'),
//  eslint-disable-next-line
  email: Yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Incorrect name format").min(2, 'Too Short!').max(255).required(),
// eslint-disable-next-line
  birthday: Yup.string().matches(/^(0[1-9]|[12][0-9]|3[01])\-(0[1-9]|1[0-2])\-\d{4}$/, "Incorrect date format").required(),
  phone: Yup.string().matches(/^\+\d{12}$/, 'Incorrect phone format').required(),
  city: Yup.string().matches(/^[a-zA-Z\u0080-\u024F]+(?:([\\ \\-\\']|(\\.\\ ))[a-zA-Z\u0080-\u024F]+)*$/, "Incorrect city format").required(),
  
})



export default function UserForm({ onSubmit, readonly, user, saveNewPhoto }) {
  
// const user = useSelector(selectUser);
const { name, email, birthday, phone, city } = user;
const initialState = {
  name,
  email,
  birthday,
  phone,
  city,
  avatarFile: '',
  // avatarURL
}


const [state, setState]=useState(user || initialState);
const [avatarURL, setAvatarURL]=useState(user.avatarURL || '');
const [avatarFile, setAvatarFile] = useState('');
const [modalActive, setModalActive] = useState(false);

const dispatch = useDispatch();

  const openModal = () => {
    setModalActive(true);
  };

  const close = () => {
    setModalActive(false);
  };

  const userLogout = async() => {
    await dispatch(logOut());
    setModalActive(false);
  };


// const onChange = (e) => {
//     const {name, value} = e.target;
//     setState(state=>({...state, [name]: value}))
// }

const onChangeFile = event => {
      const file = event.target.files[0];
      if (file.size > 1024 * 1024 * 3) {
        toast("Wrong size")
        return;
  }
  
      const newAvatar = URL.createObjectURL(file);
      setAvatarURL(newAvatar);
      setAvatarFile(file);
   };


const inputPhotoRef = useRef();

   const onLoadNewPhoto = () => {
    inputPhotoRef.current.click();
  };
  const onConfirmNewAvatar = () => {
    // saveNewPhoto(avatarURL);
    setState(state => ({ ...state, avatarFile }));
    console.log('stateonLoad',state)
    
  };
  const onCancelNewAvatar = () => {
    setAvatarURL('');
    setAvatarFile('');
  };
 

  const handleSubmit = (values) => {
    console.log("values", values);
    // event.preventDefault();

    const { name, email, phone, birthday, city } = values;
    
      const formWithData = new FormData();
      formWithData.append("avatarURL", avatarFile);
      formWithData.append("name", name);
      formWithData.append("email", email);
      formWithData.append("phone", phone);
      formWithData.append("birthday", birthday);
      formWithData.append("city", city);
      console.log("FormData",formWithData);
      console.log("FD", avatarFile);
    
      onSubmit(formWithData);
  }


  // <Form autoComplete="off" >
  //     <label htmlFor="name"> Name </label>
  //     <Field type="text" name="name" />
  //   <ErrorMessage name="name" />
    


    return (
      <div className={css.userCard}>
        <Formik initialValues={initialState}
          validationSchema={userSchema}
          onSubmit={handleSubmit}
          submitButton={{
        label: 'Save',
        style: { backgroundColor: 'var(--blue-color)' }
      }}
        >
         <Form autoComplete="off"
        
          className={css.form} >
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
              <p>Confirm</p>
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
                <Field 
                type="text" 
                name='name'
                // value={state.name}
                // required 
                className={css.input}
                // onChange={onChange}
                readOnly={readonly}
                />
                <ErrorMessage className={css.error} name="name" />    

                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>Email:</p>
                <Field 
                type="email" 
                // value={state.email}
                name='email'
                // required 
                className={css.input}
                // onChange={onChange}
                readOnly={readonly} 
                    />
                <ErrorMessage className={css.error}  name="email" />  
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>Birthday:</p>
                <Field 
                type="text" 
                // value={state.birthday}
                name='birthday'
                // required 
                className={css.input} 
                placeholder='00.00.0000' 
                // pattern='/^\d{1,2}\-\d{1,2}\-\d{4}$/'
                // onChange={onChange}
                readOnly={readonly}
                />
                    <ErrorMessage className={css.error}  name="birthday" />  
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>Phone:</p>
                <Field 
                type="tel" 
                // value={state.phone}
                name='phone'
                className={css.input}
                 placeholder="+380000000000" 
                //  pattern='/^\+\d{12}$/\'
                //  onChange={onChange}
                 readOnly={readonly}
                    />
                     <ErrorMessage className={css.error}  name="phone" />  
                </div>
                <div className={css.inputWrapper}>
                <p className={css.inputTitle}>City:</p>
                <Field 
                type="text"
                // value={state.city} 
                name='city'
                // required 
                className={css.input} 
                placeholder="Kiev"
                // onChange={onChange}
                readOnly={readonly}
                    />
                    <ErrorMessage className={css.error}  name="city" />  
                </div>
                </div>

                {readonly ? 
                (<button
                type="button"
                className={css.LogOutBtn}
                onClick={openModal}>
              
                <img src={LogOut} className={css.iconLogOut} alt="logout" />
                Log Out
              </button>) 
              : (
              <div className={css.saveBtnWrapper}>
                <button className={css.saveBtn}>Save
                </button>
                </div>)}

                {modalActive && <Modal isOpen={modalActive} onClose={close}>
          <ModalApproveAction logo={'#logout'} close={close} action={userLogout}>
              Already leaving?
          </ModalApproveAction>
      </Modal>}

              </div>           
            </div>
            </Form>

        </Formik>
        

        </div>
    )
}