import * as yup from 'yup';

export const loginSchema = {
    email: '',
    password: '',
};

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email().required('Email Required...').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid Email'),
    password: yup.string().required('Message Required...')
})