import React from 'react';
import RegisterForm from 'components/RegisterForm';

import styles from './RegisterPage.module.css';

const RegisterPage = () => {
    return (
        <div> 
            <div className={styles.formContainer}>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;