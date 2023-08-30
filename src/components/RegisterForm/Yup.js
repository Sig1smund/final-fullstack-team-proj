import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters!')
    .max(16, 'Name must be at most 16 characters!')
    .required('Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be at most 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
    ),
  password2: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export default registerSchema;
