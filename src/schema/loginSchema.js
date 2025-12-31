import * as yup from 'yup';

export const loginSchema = {
    username: '',
    password: '',
};

export const loginValidationSchema = yup.object().shape({
    // email: yup.string().email().required('Email Required...').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid Email'),
    username: yup.string().required('Username Required...'),
    password: yup.string().required('Message Required...')
})