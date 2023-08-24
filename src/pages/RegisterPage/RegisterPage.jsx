import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import RegisterForm from 'components/RegisterForm';

import styles from './RegisterPage.module.css';

const RegisterPage = () => {
    return (
        <Router> {}
            <div className={styles.formContainer}>
                <RegisterForm />
            </div>
        </Router>
    );
};

export default RegisterPage;