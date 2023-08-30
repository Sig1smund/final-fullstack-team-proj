import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import  { registerUser }  from '../../redux/auth/operations';
import sprite from '../../images/sprite.svg';
import styles from './RegisterForm.module.css';
// import { changeIsRegistered } from '../../redux/auth/authSlice';
import registerSchema from './Yup';
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = data => {
    
    const  { name,  email, password}=data;
    dispatch(registerUser({name, email, password}));
    reset();
  };

  return (
    <div>
      <h2 className={styles.formTitle}>Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formLabelConteiner}>
          <label className={styles.formLabel}>
            <input
              className={`${styles.formInput} ${errors.email ? styles.error : ''
                } ${watch('name') && !errors.name ? styles.success : ''}`}
              placeholder="Name"
              {...register('name')}
              type="text"
            />
            {errors.name && (
              <p className={styles.errorsMassage}>{errors.name.message}</p>
            )}
          </label>
          <label className={styles.formLabel}>
            <input
              className={`${styles.formInput} ${errors.email ? styles.error : ''
                } ${watch('email') && !errors.email ? styles.success : ''}`}
              placeholder="Email"
              {...register('email')}
              type="email"
            />
            {errors.email && (
              <p className={styles.errorsMassage}>{errors.email.message}</p>
            )}
          </label>
          <label className={styles.formLabel}>
            <div className={styles.formLabelPasswordConteiner}>
              <input
                className={`${styles.formInput} ${errors.password ? styles.error : ''
                  } ${watch('password') && !errors.password ? styles.success : ''
                  }`}
                placeholder="Password"
                {...register('password')}
                type={showPassword ? 'text' : 'password'} // Встановлюємо тип як "password" або "text", залежно від стану
              />
              <button
                className={styles.showPasswordButton}
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg className={styles.passwordIcon}>
                    <use href={`${sprite}#eye-open`} />
                  </svg>
                ) : (
                  <svg className={styles.passwordIcon}>
                    <use href={`${sprite}#eye-closed`} />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <p className={styles.errorsMassage}>{errors.password.message}</p>
            )}
          </label>

          <label className={styles.formLabel}>
            <div className={styles.formLabelPasswordConteiner}>
              <input
                className={`${styles.formInput} ${errors.password2 ? styles.error : ''
                  } ${watch('password2') && !errors.password2 ? styles.success : ''
                  }`}
                placeholder="Confirm password"
                {...register('password2')}
                type={showPassword2 ? 'text' : 'password'}
              />
              <button
                className={styles.showPasswordButton}
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword2 ? (
                  <svg className={styles.passwordIcon}>
                    <use href={`${sprite}#eye-open`} />
                  </svg>
                ) : (
                  <svg className={styles.passwordIcon}>
                    <use href={`${sprite}#eye-closed`} />
                  </svg>
                )}
              </button>
            </div>
            {errors.password2 && (
              <p className={styles.errorsMassage}>{errors.password2.message}</p>
            )}
          </label>
        </div>
        <button className={styles.authBtn} type="submit">
          Registration
        </button>
        <p className={styles.authScreenNavigation}>
          Already have an account?&nbsp;
          <NavLink to="/login" className={styles.authScreenNavigationLink}>
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
