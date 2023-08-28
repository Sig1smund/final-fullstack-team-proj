import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import css from './UserPage.module.css';
import sprite from '../../images/sprite.svg';
import Cross from '../../images/cross-small.svg';
import UserForm from 'components/UserForm/UserForm';
import PetsData from 'components/PetsData/PetsData';
import Modal from 'components/Modal/Modal';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';


// import { current } from 'redux/auth/operations';
import { updateUser } from 'redux/auth/operations';

import { selectUser, selectIsRegistered } from '../../redux/auth/selectors';
import { changeIsRegistered } from '../../redux/auth/authSlice';



export default function UserPage() {
  const [readOnly, setReadOnly] = useState(true);



  const user = useSelector(selectUser);


  const dispatch = useDispatch();

// const [user, setUser]=useState('')

// const user ={
//     "name": "iii",
//     "email": "iiii@mail.com"
// }
// const dispatch = useDispatch();
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTcxYmJlNmZiNzViZDcyYWU4MTJlNyIsImlhdCI6MTY5Mjg2NzU5NCwiZXhwIjoxNjkyODc0Nzk0fQ.hZRsX9xr_ZVU1M3GHVVqhdKx3GNI-57dDWxTeVeKVj0'
// const user = current(token)
// console.log(user)


  const onToggleReadOnly = () => {
    setReadOnly(prevState => !prevState);
  };
  //save new avatar photo
  const saveNewPhoto = userAvatar => {
    console.log(userAvatar)
    const formData = new FormData();

    formData.append('userAvatar', userAvatar);
  };

  const onSubmitForm = (newDataUser) => {
    dispatch(updateUser(newDataUser));
    onToggleReadOnly();
    // setUser(newDataUser)
    console.log(newDataUser)
  };


  // modal window ModalCongrats
  const isModalActive = useSelector(selectIsRegistered);

  const [modalActive, setModalActive] = useState(isModalActive);

  const isActive = () => {
    setModalActive(false);
  };

  const exitRegisterCongrats = () => {
    setModalActive(false);
    dispatch(changeIsRegistered(false));
  };


  return (
    <>
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


              console.log(newDataUser);
              dispatch(updateUser(newDataUser));
            }

          return (
              <div className={css.bg} >
                  <div className={css.container}>
                      <div className={css.userContainer}>
                          <h2 className={css.title}>My information:</h2>
                          {readOnly ? (<button className={css.iconEditButton} onClick={onToggleReadOnly}>
                              <svg width="24" height="24" className={css.iconEdit}  >
                                  <use href={sprite + "#edit-2"}></use>
                              </svg>

                          </button>) : (<button className={css.iconEditButton} onClick={onToggleReadOnly}>
                              {/* <svg  width="24" height="24" className={css.iconCancel}  >

              <use  width="24" height="24" href={sprite + "#cross-small"}></use>
          </svg> */}
                <img src={Cross} alt='cross icon' className={css.iconCross} />
              </button>)}
              {readOnly ? (<UserForm readonly={true} user={user} />) : (<UserForm readonly={false} user={user} saveNewPhoto={saveNewPhoto} onSubmit={onSubmitForm} />)}

          </div>

          <PetsData />

        </div>
      </div>

      { isModalActive && (
        <Modal isOpen={modalActive} onClose={isActive}>
          <ModalCongrats onClose={exitRegisterCongrats} />
        </Modal>
      )}
    </>
  )

};

