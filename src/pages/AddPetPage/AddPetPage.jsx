import AddPetForm from 'components/AddPetForm';

import styles from './AddPetPage.module.css';

export default function AddPetPage() {

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Add pet</h2>
      <AddPetForm />
     </div>
  );
}
