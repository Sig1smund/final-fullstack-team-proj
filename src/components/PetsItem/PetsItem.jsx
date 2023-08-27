import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {deletePet} from '../../redux/auth/operations'
import { current } from '../../redux/auth/operations';
import css from './PetsItem.module.css'
import sprite from '../../images/sprite.svg'
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import Modal from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import {selectUserPets} from '../../redux/auth/selectors';

export default function PetsItem() {
  // const [pets, setPets]=useState(useSelector(selectUserPets))
  const pets = useSelector(selectUserPets);

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(current())
    },[dispatch])

   
  //  console.log(pets);


const openModal = () => {
    setShowModal(true);

   
  };

const closeModal = () => {
    setShowModal(false);
  };

  const approveAction = async (id) => {
    await dispatch(deletePet(id));
    console.log(id)
    setShowModal(false);
  };
// console.log("pets", pets)

    return (<>
      {pets.map(pet => {

        return (<li className={css.petsItemWrapper}
        key={pet._id}
        >
          <img src={pet.imageURL} alt={pet.name} className={css.petsImg} />
          <div className={css.petInfoWrapper}>
              <div className={css.petInfoBtn}> Name: {pet.name}
              
              <button
              type='button'
              onClick={()=>dispatch(deletePet(pet._id))}
              className={css.btnTrash}
              >
                  <svg  width="24" height="24"  >
                  <use href={sprite + "#trash-2"}></use>
              </svg>
          
              </button>
              {showModal && (
    <Modal isOpen={openModal} onClose={closeModal}> 
<ModalApproveAction 
close={closeModal} 
action={approveAction(pet._id)} 

> 
Are you sure you want to delete  “Cute dog looking for a home”? 
You can`t undo this action.
</ModalApproveAction>
</Modal>)}
              
              </div>
              <p className={css.petInfo}>Date of birth: {pet.date}</p>
              <p className={css.petInfo}>Type: {pet.type}</p>
              <p className={css.petInfo}>Comments: {pet.comments}</p>
          </div>
          </li>)
      })}
      

        <div className={css.petsListWrapper}>
        {/* <li className={css.petsItemWrapper}>
<img src={pet.imageURL} alt={pet.name} className={css.petsImg} />
<div className={css.petInfoWrapper}>
    <div className={css.petInfoBtn}> Name: {pet.name}
    
    <button
    type='button'
    onClick={openModal}
    className={css.btnTrash}
    >
        <svg  width="24" height="24"  >
        <use href={sprite + "#trash-2"}></use>
    </svg>

    </button>
    
    </div>
    <p className={css.petInfo}>Date of birth: {pet.date}</p>
    <p className={css.petInfo}>Type: {pet.type}</p>
    <p className={css.petInfo}>Comments: {pet.comments}</p>
</div>
</li> */}
{/* {showModal && (
    <Modal isOpen={openModal} onClose={closeModal}> 
<ModalApproveAction 
close={closeModal} 
action={approveAction} 

> 
Are you sure you want to delete  “Cute dog looking for a home”? 
You can`t undo this action.
</ModalApproveAction>
</Modal>)} */}
</div>
</>
    )
}