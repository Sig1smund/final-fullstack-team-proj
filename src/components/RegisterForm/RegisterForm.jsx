import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import * as yup from 'yup';
import sprite from '../../images/sprite.svg';
import styles from './RegisterForm.module.css';



const RegisterForm = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    const registerSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
        password2: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match"),
    });



    const onSubmit = (e) => {
        e.preventDefault();
        const data = { name: name, email: email, password: password };
        registerSchema.validate(data, { abortEarly: false })
            .then(() => {
                console.log(data)
                dispatch(register(data))
                    .then(response => {
                        setEmail('');
                        setPassword('');
                        setPassword2('');

                    })
                    .catch(error => {
                        console.error(error.message);
                    });
            })
            .catch(validationErrors => {
                const newErrors = {};
                validationErrors.inner.forEach(err => {
                    newErrors[err.path] = err.message;
                });
                setErrors(newErrors);
            });
    };






  return (

        <div>
            <h2 className={styles.formTitle}>Registration</h2>
            <form onSubmit={onSubmit}>
                <div className={styles.formLabelConteiner}>
                    <label className={styles.formLabel}>
                        <input
                            className={`${styles.formInput}`}
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                        />
                        {/* {errors.email && <p className={styles.errorsMassage}>{errors.email}</p>} */}
                    </label>
                    <label className={styles.formLabel}>
                        <input
                            className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        />
                        {errors.email && <p className={styles.errorsMassage}>{errors.email}</p>}
                    </label>
                    <label className={styles.formLabel}>
                        <div className={styles.formLabelPasswordConteiner}>
                            <input
                                className={`${styles.formInput} ${errors.password ? styles.error : ''}`}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword1 ? 'text' : 'password'}
                            />
                            <button
                                className={styles.showPasswordButton}
                                type="button"
                                onClick={() => setShowPassword1(!showPassword1)}
                            >
                                {showPassword1 ? (
                                    <svg className={styles.passwordIcon}>
                                        <use href={`${sprite}#eye-closed`} />
                                    </svg>
                                ) : (
                                    <svg className={styles.passwordIcon}>
                                        <use href={`${sprite}#eye-open`} />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password1 && <p className={styles.errorsMassage}>{errors.password1}</p>}
                    </label>
                    <label className={styles.formLabel}>
                        <div className={styles.formLabelPasswordConteiner}>
                            <input
                                className={`${styles.formInput} ${errors.password2 ? styles.error : ''}`}
                                placeholder="Confirm password"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
                                type={showPassword2 ? 'text' : 'password'}
                            />
                            <button
                                className={styles.showPasswordButton}
                                type="button"
                                onClick={() => setShowPassword2(!showPassword2)}
                            >
                                {showPassword2 ? (
                                    <svg className={styles.passwordIcon}>
                                        <use href={`${sprite}#eye-closed`} />
                                    </svg>
                                ) : (
                                    <svg className={styles.passwordIcon}>
                                        <use href={`${sprite}#eye-open`} />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password2 && <p className={styles.errorsMassage}>{errors.password2}</p>}
                    </label>
                </div>
                <button className={styles.authBtn} type="submit">
                    Registration
                </button>
                <p className={styles.authScreenNavigation}>
                    Already have an account?&nbsp;
                    <NavLink to="/api/users/login" className={styles.authScreenNavigationLink}>
                        Login
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default RegisterForm;
