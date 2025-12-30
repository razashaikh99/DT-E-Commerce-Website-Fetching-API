import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { Form, Formik } from 'formik'
import { loginSchema, loginValidationSchema } from '../../schema/loginSchema'
import { toast } from 'react-toastify'

export default function Login() {

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
                            toast.success("User Login Successfully...")
                            resetForm();
                        }}
                        validateOnBlur={false}
                        validateOnMount={false}
                        validateOnChange={false}
                    >
                        {({ errors, handleSubmit, setFeildValue, values }) => {
                            console.log("values => ", values?.email);
                            return (
                                <Form>
                                    <Input
                                        className="!my-3"
                                        label="Email Address"
                                        type="email"
                                        placeholder="razashaikh@gmail.com"
                                        errors={errors.email}
                                        onChange={(e) => setFeildValue('email', e.target.value)}
                                        values={values.email}
                                    />
                                    <Input
                                        className="!mb-6"
                                        label="Password"
                                        type="password"
                                        errors={errors.password}
                                        onChange={(e) => setFeildaValue('password', e.target.value)}
                                        values={values.password}
                                    />
                                    <Button
                                        type="submit"
                                        text="Login"
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
