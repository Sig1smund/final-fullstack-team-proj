import React from 'react';
import styles from './mainPage.module.css';


export default function MainPage() {
    return (
        <div >
             {/* <div className={styles.container}></div> */}
            <h1 className={styles.title}>Take good care of your small pets</h1>
            <div className={styles.petsImg}/>
        </div>
    );
}