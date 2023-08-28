import React from 'react';
import styles from './NotFound.module.css';
import { NavLink } from "react-router-dom";
import pawprint from '../../images/sprite.svg';
import catPageNotFound from '../../images/cat40.png';



export default function NotFound() {
    return <div className={styles.container}>

        <h1 className={styles.title}>Ooops! <br className={styles.break}/> This page not found :(</h1>   
      
   


        <div className={styles.cat}>
        <h1 className={styles.text}>4</h1>
            <img className={styles.img} src={catPageNotFound} alt="smile cat"></img>
            <h1 className={styles.text04}>4</h1>
        </div>

        <nav >    
            <div className={styles.link_log_container}>
                 <NavLink className={styles.link__log} to="/">
                    To main page
                    <svg  className={styles.paw} width={24} height={24}>
                <use href={pawprint + '#pawprint-1'}></use>
                    </svg>
                </NavLink>
            </div>    
        </nav>
    </div>
}