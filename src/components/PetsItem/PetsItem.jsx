import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {deletePet} from '../../redux/auth/operations'
import css from './PetsItem.module.css'
import sprite from '../../images/sprite.svg'
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import Modal from 'components/Modal/Modal';

export default function PetsItem({pet}) {

    const [showModal, setShowModal] = useState(false);

   console.log(showModal);
const dispatch = useDispatch();

const openModal = () => {
    setShowModal(true);
   
  };

const closeModal = () => {
    setShowModal(false);
  };

  const approveAction = () => {
    dispatch(deletePet(pet._id));
    console.log(pet._id)
    setShowModal(false);
  };

    return (
        <div className={css.petsListWrapper}>
        <li className={css.petsItemWrapper}>
<img src={pet.imageURL} alt={pet.name} className={css.petsImg} />
<div className={css.petInfoWrapper}>
    <p className={css.petInfoBtn}>Name: {pet.name}
    
    <button
    type='button'
    onClick={openModal}
    className={css.btnTrash}
    >
        <svg  width="24" height="24"  >
        <use href={sprite + "#trash-2"}></use>
    </svg>

    </button>
    
    </p>
    <p className={css.petInfo}><b>Date of birth:</b> {pet.date}</p>
    <p className={css.petInfo}><b>Type:</b> {pet.type}</p>
    <p className={css.petInfo}><b>Comments: </b>{pet.comments}</p>
</div>
</li>
{showModal && (
    <Modal isOpen={openModal} onClose={closeModal}> 
<ModalApproveAction 
close={closeModal} 
action={approveAction} > 
Are you sure you want to delete  “Cute dog looking for a home”? 
You can`t undo this action.
</ModalApproveAction>
</Modal>)}
</div>

    )
}