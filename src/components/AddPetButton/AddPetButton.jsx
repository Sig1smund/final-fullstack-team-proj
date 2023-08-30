import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Modal from '../Modal'
import AttentionModal from '../AttentionModal'
import useAuth from "hooks/useAuth";
import styles from './AddPetButton.module.css'

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

    return (
      <>
        <div
        className={styles.button}
        onClick={handrer}>
       Add Pet
       </div>
      {isAttentionModalOpen && (
        <Modal isOpen={isAttentionModalOpen} onClose={()=> setIsAttentionModalOpen(false)}>
          <AttentionModal />
        </Modal>
      )}
    </>
    )
}