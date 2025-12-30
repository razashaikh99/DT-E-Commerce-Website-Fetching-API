import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { contactSchema, contactValidationSchema } from '../../../schema/contactSchema';
import Input from '../../../Components/Input';
import SubjectInput from '../../../Components/SubjectInput';
import MessageInput from '../../../Components/MessageInput';
import Button from '../../../Components/Button';

export default function ContactForm() {

    return (
        <div className="contact-card bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <Formik
                initialValues={contactSchema}
                validationSchema={contactValidationSchema}
                onSubmit={(values, { resetForm }) => {
                    alert("Values: ", values);
                    toast.success("Form Submited Successfully...")
                    resetForm();
                }}
                validateOnBlur={false}
                validateOnMount={false}
                validateOnChange={false}
            >
                {({ errors, handleSubmit, setFieldValue, values }) => {
                    console.log("values ===> ", values?.firstName)
                    return (
                        <Form className='space-y-3'>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    label="First Name"
                                    type="text"
                                    name="firstName"
                                    placeholder="Muhammad Raza"
                                    errors={errors.firstName}
                                    onChange={(e) => setFieldValue('firstName', e.target.value)}
                                    value={values.firstName}
                                />
                                <Input
                                    label="Last Name"
                                    type="text"
                                    name="lastName"
                                    placeholder="Shaikh"
                                    errors={errors.lastName}
                                    onChange={(e) => setFieldValue('lastName', e.target.value)}
                                    value={values.lastName}
                                />
                            </div>
                            <Input
                                label="Email Address"
                                type="email"
                                name="email"
                                placeholder="razashaikh@gmail.com"
                                errors={errors.email}
                                onChange={(e) => setFieldValue('email', e.target.value)}
                                value={values.email}
                            />
                            <Input
                                label="Phone Number"
                                type="tel"
                                name="tel"
                                placeholder="+92 300 1234567"
                                errors={errors.tel}
                                onChange={(e) => setFieldValue('tel', e.target.value)}
                                value={values.tel}
                            />
                            <SubjectInput
                                label="Subject"
                                as="select"
                                name="subject"
                                errors={errors.subject}
                                value={values.subject}
                                onChange={(e) => setFieldValue('subject', e.target.value)}
                            />
                            <MessageInput
                                label="Message"
                                rows="5"
                                name='message'
                                errors={errors.message}
                                value={values.message}
                                onChange={(e) => setFieldValue('message', e.target.value)}
                                placeholder="Tell us how we can help you..."
                            />
                            <Button
                                text="Send Message"
                                type="submit"
                            />
                        </Form>
                    )
                }}

            </Formik>
        </div>
    )
}

