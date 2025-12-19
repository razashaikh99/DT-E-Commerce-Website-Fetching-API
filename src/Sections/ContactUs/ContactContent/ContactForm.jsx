import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { contactSchema, contactValidationSchema } from '../ContactSchema/ValidationSchema';

export default function ContactForm() {

    return (
        <div>
            <div className="contact-card bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <Formik
                    initialValues={contactSchema}
                    validationSchema={contactValidationSchema}
                    onSubmit={(values, { resetForm }) => {
                        console.log("Values: ", values);
                        toast.success("Form Submited Successfully...")
                        resetForm();
                    }}
                    validateOnBlur={false}
                    validateOnMount={false}
                    validateOnChange={false}
                >
                    {({ errors }) => (

                        <Form className='space-y-3'>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <Field
                                        type="text"
                                        name='firstName'
                                        placeholder="Your first name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                    {errors.firstName && (
                                        <p className='text-red-500 text-sm py-1'>{errors.firstName}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <Field
                                        type="text"
                                        name='lastName'
                                        placeholder="Your last name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                    {errors.lastName && (
                                        <p className='text-red-500 text-sm py-1'>{errors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <Field
                                    type="email"
                                    name='email'
                                    placeholder="your@gmail.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                {errors.email && (
                                    <p className='text-red-500 text-sm py-1'>{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <Field
                                    type="tel"
                                    name='tel'
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    placeholder="+92 300 1234567"
                                />
                                {errors.tel && (
                                    <p className='text-red-500 text-sm py-1'>{errors.tel}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <Field
                                    as="select"
                                    name='subject'
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    <option value="">Select Subject:</option>
                                    <option>Product Questions</option>
                                    <option>Order Support</option>
                                    <option>Returns & Exchanges</option>
                                    <option>Size Consultation</option>
                                    <option>Wholesale Inquiry</option>
                                    <option>Other</option>
                                </Field>
                                {errors.subject && (
                                    <p className='text-red-500 text-sm py-1'>{errors.subject}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <Field
                                    as="textarea"
                                    rows="5"
                                    name='message'
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    placeholder="Tell us how we can help you..."
                                />
                                {errors.message && (
                                    <p className='text-red-500 text-sm pb-1'>{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full contact-gradient text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-700 transition hover:scale-105 cursor-pointer">
                                Send Message
                            </button>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}



























































// =====================================================================================================






// import { useFormik } from 'formik';
// import { toast } from 'react-toastify';

// export default function ContactForm() {

//     const formik = useFormik({

//         initialValues: {
//             firstName: '',
//             lastName: '',
//             email: '',
//             tel: '',
//             subject: '',
//             message: ''
//         },

//         validate: values => {
//             const error = {};

//             if (!values.firstName) error.firstName = "First Name Required..."
//             if (!values.lastName) error.lastName = "Last Name Required..."
//             if (!values.email) {
//                 error.email = "Email Required..."
//             } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//                 error.email = "Invalid Email Format..."
//             }
//             if (!values.tel) error.tel = "Contact No Required..."
//             if (!values.subject) error.subject = "Subject Required..."
//             if (!values.message) error.message = "Message Required..."

//             return error;
//         },

//         onSubmit: (values, { resetForm }) => {
//             console.log('Form Data: ', values);
//             toast.success("Form Submitted SuccessFully...");
//             resetForm();
//         }

//     });

//     return (
//         <div>
//             <div className="contact-card bg-white rounded-2xl p-8 shadow-lg">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
//                 <form className="space-y-6" onSubmit={formik.handleSubmit}>

//                     <div className="grid md:grid-cols-2 gap-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                             <input
//                                 type="text"
//                                 name='firstName'
//                                 placeholder="Your first name"
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.firstName}
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                             <input
//                                 type="text"
//                                 name='lastName'
//                                 placeholder="Your last name"
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.lastName}
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                         <input
//                             type="email"
//                             name='email'
//                             placeholder="your@gmail.com"
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                             onChange={formik.handleChange}
//                             value={formik.values.email}
//                         />
//                         {
//                             errors
//                         }
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//                         <input
//                             type="tel"
//                             name='tel'
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                             placeholder="+92 300 1234567"
//                             onChange={formik.handleChange}
//                             value={formik.values.tel}
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                         <select
//                             name='subject'
//                             onChange={formik.handleChange}
//                             value={formik.values.subject}
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                         >
//                             <option value="">Select Subject:</option>
//                             <option>Product Questions</option>
//                             <option>Order Support</option>
//                             <option>Returns & Exchanges</option>
//                             <option>Size Consultation</option>
//                             <option>Wholesale Inquiry</option>
//                             <option>Other</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                         <textarea
//                             rows="5"
//                             name='message'
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                             placeholder="Tell us how we can help you..."
//                             onChange={formik.handleChange}
//                             value={formik.values.message}
//                         ></textarea>
//                     </div>

//                     <button
//                         type="submit"
//                         onClick={() => {
//                             if (!formik.isValid) {
//                                 toast.error("Please fill all required fields");
//                             }
//                         }}
//                         className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition hover:scale-105 cursor-pointer">
//                         Send Message
//                     </button>

//                 </form>
//             </div>
//         </div>
//     )
// }
