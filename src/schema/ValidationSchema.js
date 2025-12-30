import * as yup from 'yup';

export const contactSchema = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    subject: '',
    message: ''
};

export const contactValidationSchema = yup.object().shape({
    firstName: yup.string().required('First Name Required...'),
    lastName: yup.string().required('Last Name Required...'),
    email: yup.string().email().required('Email Required...').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid Email'),
    tel: yup.string().required('Contact No Required...').matches(/^[0-9+ ]+$/, 'Invalid Phone Number'),
    subject: yup.string().required('Subject Required...'),
    message: yup.string().required('Message Required...')
})