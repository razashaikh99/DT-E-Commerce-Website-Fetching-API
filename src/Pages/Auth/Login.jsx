import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { Form, Formik } from 'formik'
import { loginSchema, loginValidationSchema } from '../../schema/loginSchema'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Loader } from 'lucide-react'
import { fetchLoginApi } from '../../store/action/loginAction'

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, user } = useSelector(state => state.loginSlice);

    const onSubmit = (values, resetForm) => {
        const payload = {
            username: values.username,
            password: values.password,
        }

        dispatch(fetchLoginApi(payload, navigate))
        resetForm();

    }

    return (
        <div className="pt-30 pb-16">
            <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='contact-card bg-white rounded-2xl p-8 shadow-lg'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-6 text-center'>Login</h2>
                    <Formik
                        initialValues={loginSchema}
                        validationSchema={loginValidationSchema}
                        onSubmit={(values, { resetForm }) => {
                            console.log("Values: ", values);
                            onSubmit(values, resetForm);
                        }}
                        validateOnBlur={true}
                        validateOnChange={true}
                    >
                        {({ handleSubmit, errors, setFieldValue, values, setFieldTouched, touched }) => {
                            console.log("values => ", values);
                            console.log(errors);

                            return (
                                <Form>
                                    <Input
                                        className="!my-3"
                                        label="Username"
                                        type="text"
                                        placeholder="razashaikh"
                                        value={values?.username}
                                        errors={touched?.username ? errors.username : ''}
                                        onChange={(e) => {
                                            setFieldValue('username', e.target.value)
                                            setFieldTouched('username', true, false)
                                        }}
                                    />
                                    <Input
                                        className="!mb-6"
                                        label="Password"
                                        type="password"
                                        placeholder="********"
                                        errors={touched?.password ? errors.password : ''}
                                        onChange={(e) => {
                                            setFieldValue('password', e.target.value)
                                            setFieldTouched('password', true, false)
                                        }}
                                        value={values.password}
                                    />
                                    <Button
                                        type="submit"
                                        text="Login"
                                        onClick={() =>
                                            handleSubmit()
                                        }
                                        isDisabled={loading}
                                    />
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
