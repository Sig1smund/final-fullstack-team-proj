import { useState } from "react";
import styles from './noticesSearch.module.css';
import sprite from '../../images/sprite.svg'

export default function NoticesSearch() {
  const [name, setName] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

        setName('');
    }
  

    return <>
    <form className={styles.form} onSubmit={handleSubmit}>      
          <input
            className={styles.input}
            onChange={(e) => setName(e.currentTarget.value)}
            value={name}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
          />
        <button type="submit" className={styles.button}>
        <svg width='24px' height='24px' className={styles.iconSearch}>
            <use href={sprite + "#search"}></use>
        </svg>
          </button>
          {name !== '' && 
          (<button type="button" className={styles.button} onClick={() => {setName('')}}>
        <svg className={styles.iconClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 5L5 19M5.00004 5L19 19" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>)}
    </form>
    </>
}