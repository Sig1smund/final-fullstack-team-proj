import { useState } from "react";
import sprite from '../../images/sprite.svg';
import s from './NewsSearch.module.css';

export default function NewsSearch({search}) {
  const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);
    

  const handleSubmit = (e) => {
    e.preventDefault();
    search(query);
  };

  const onClose = () => {
    setQuery('');
    search('');
  }


    return <>
    <form className={s.form} onSubmit={handleSubmit}>      
          <input
            className={s.input}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
          />
        <button type="submit" className={s.button}>
        <svg width='24px' height='24px' className={s.iconSearch}>
            <use href={sprite + "#search"}></use>
        </svg>
          </button>
          {query !== '' && 
          (<button type="button" className={s.button} onClick={onClose}>
        <svg className={s.iconClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 5L5 19M5.00004 5L19 19" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>)}
    </form>
    </>
}