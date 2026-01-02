import * as yup from 'yup';

export const editProfileSchema = {
    image: "",
    username: "",
    firstName: "", 
    lastName: "",
    email: "",
    gender: "",
};

export const editProfileValidationSchema = yup.object().shape({
    username: yup.string().required('Username Required...'),
    firstName: yup.string().required('First Name Required...'),
    lastName: yup.string().required('Last Name Required...'),
    email: yup.string().required('Email Required...'),
    gender: yup.string().required('Gender Required...'),
});