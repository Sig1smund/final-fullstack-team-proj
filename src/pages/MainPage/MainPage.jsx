import React from 'react';
import styles from './mainPage.module.css';


export default function MainPage() {
    return (
        <div className={styles.container}>
       <div className={styles.div}>
          <h1 className={styles.title}>Take good care of your small pets</h1>
          </div>
          <div className={styles.petsImg}/>
         </div> 
    );
}