import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from './Yup';

import sprite from '../../images/sprite.svg';

import styles from './RegisterForm.module.css';

const RegisterForm = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const dispatch = useDispatch();
    const {
        register: formRegister,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const watchPassword1 = watch('password1', '');
    const watchPassword2 = watch('password2', '');

    const validatePassword = () => {
        return watchPassword1 === watchPassword2 || "Passwords don't match";
    };

    const onSubmit = ({ email, password1 }) => {
        dispatch(register({ email, password1 }))
            .then(response => {
                reset();
            })
            .catch(error => {
                console.error(error.message);
            });
    };

    return (
        <div>
            <h2 className={styles.formTitle}>Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formLabelConteiner}>
                    <label className={styles.formLabel}>
                        <input
                            className={`${styles.formInput} ${errors.email ? styles.error : ''} ${
                                formRegister('email') && !errors.email ? styles.success : ''
                            }`}
                            placeholder="Email"
                            {...formRegister('email')}
                            type="email"
                        />
                        {errors.email && <p className={styles.errorsMassage}>{errors.email.message}</p>}
                    </label>
                    <label className={styles.formLabel}>
                        <div className={styles.formLabelPasswordConteiner}>
                            <input
                                className={`${styles.formInput} ${errors.password1 ? styles.error : ''} ${
                                    formRegister('password1') && !errors.password1 ? styles.success : ''
                                }`}
                                placeholder="Password"
                                {...formRegister('password1', { required: true })}
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

                        {errors.password1 && <p className={styles.errorsMassage}>{errors.password1.message}</p>}
                    </label>
                    <label className={styles.formLabel}>
                        <div className={styles.formLabelPasswordConteiner}>
                            <input
                                className={`${styles.formInput} ${errors.password2 ? styles.error : ''} ${
                                    formRegister('password2') && !errors.password2 ? styles.success : ''
                                }`}
                                placeholder="Confirm password"
                                {...formRegister('password2', { validate: validatePassword })}
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

                        {errors.password2 && <p className={styles.errorsMassage}>{errors.password2.message}</p>}
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