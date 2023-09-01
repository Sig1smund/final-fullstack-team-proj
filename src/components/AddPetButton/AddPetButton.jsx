import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Modal from '../Modal'
import AttentionModal from '../AttentionModal'
import useAuth from "hooks/useAuth";
import styles from './AddPetButton.module.css'
import plussmall from '../../images/sprite.svg';

export default function AddPetButton() {
  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handrer = () => {
    if (isLoggedIn) {
     navigate('/add-pet');
    } else {
      setIsAttentionModalOpen(true);
    }
  }

    // const location = useLocation();
    return (
      <>
        <button type="button"
        className={styles.button}
        onClick={handrer}>
       Add Pet
       <svg  className={styles.plusIcon}  width={24} height={24}>
        <use href={plussmall + '#logo'}></use>
      </svg>
       </button>
      {isAttentionModalOpen && (
        <Modal isOpen={isAttentionModalOpen} onClose={()=> setIsAttentionModalOpen(false)}>
          <AttentionModal />
        </Modal>
      )}
      </>
      // to={'/add-pet'}
//         to="/add-pet"
//         state={{from:location}}
//       >
//           Add pet
//       <svg  className={styles.plusIcon}  width={24} height={24}>
//         <use href={plussmall + '#logo'}></use>
//       </svg>
//       </NavLink>

    )
}

