import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getNotices } from 'redux/notices/operations'
import styles from './noticesSearch.module.css';
import sprite from '../../images/sprite.svg'

export default function NoticesSearch() {
  const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);

  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const params = {categoryName, query }

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(getNotices(params))
      setQuery('');
  }


    return <>
    <form className={styles.form} onSubmit={handleSubmit}>      
          <input
            className={styles.input}
            onChange={(e) => setQuery(e.currentTarget.value)}
            value={query}
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
          {query !== '' && 
          (<button type="button" className={styles.button} onClick={() => {setQuery('')}}>
        <svg className={styles.iconClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 5L5 19M5.00004 5L19 19" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>)}
    </form>
    </>
}