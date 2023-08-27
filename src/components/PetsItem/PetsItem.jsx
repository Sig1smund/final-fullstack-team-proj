import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {deletePet} from '../../redux/auth/operations'
import css from './PetsItem.module.css'
import sprite from '../../images/sprite.svg'
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import Modal from 'components/Modal/Modal';

export default function PetsItem({pet}) {
  

const [showModal, setShowModal] = useState(false);
const dispatch = useDispatch();

const openModal = () => {
    setShowModal(true);
    };

const closeModal = () => {
    setShowModal(false);
  };

  const approveAction = (id) => {
      dispatch(deletePet(id));
      setShowModal(false);
  };

    return (
    <>
    <li className={css.petsItemWrapper}
        key={pet._id}
        >
          <img src={pet.imageURL} alt={pet.name} className={css.petsImg} />
          <div className={css.petInfoWrapper}>
              <div className={css.petInfoBtn}> Name: {pet.name}
              
              <button
              type='button'
              onClick={openModal}
              className={css.btnTrash}>
                  <svg  width="24" height="24"  >
                    <use href={sprite + "#trash-2"}></use>
                  </svg>
              </button>
              </div>
              <p className={css.petInfo}>Date of birth: {pet.date}</p>
              <p className={css.petInfo}>Type: {pet.type}</p>
              <p className={css.petInfo}>Comments: {pet.comments}</p>
          </div>
          {showModal && (
              <Modal isOpen={openModal} onClose={closeModal}> 
                  <ModalApproveAction 
                    close={closeModal} 
                    id={pet._id}
                    action={approveAction}
                    logo={'#trash-2'}
                    >
                      <div className={css.modalText}>
                      <div className={css.modalTitle}><div>Delete</div> <div>adverstiment?</div> </div>
                    Are you sure you want to delete <b>“{pet.name}”</b>?<br/>
                    You can`t undo this action.
                    </div>
                  </ModalApproveAction>
              </Modal>)}
          </li>
    </>
    );
}