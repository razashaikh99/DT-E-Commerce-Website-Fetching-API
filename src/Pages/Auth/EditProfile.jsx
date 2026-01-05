
import ProductHeader from '../../Components/ProductHeader';
import { Camera, Mail, Pencil, ShieldAlert, User } from 'lucide-react';
import ProfileCard from '../../Components/ProfileCard';
import Button from '../../Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { editProfileSchema, editProfileValidationSchema } from '../../schema/editProfileSchema';
import { useEffect, useRef, useState } from 'react';
import { fetchUserProfileData } from '../../store/action/userProfileAction';
import Loader from '../../Components/Loader';
import { updateUserProfile } from '../../store/action/editProfileAction';

export default function EditProfile() {

    const dispatch = useDispatch();
    const fileInputRef = useRef();
    const [file, setFile] = useState(null);

    const { loading, userData } = useSelector(state => state.userProfile);

    useEffect(() => {
        dispatch(fetchUserProfileData());
    }, [])

    if (loading) {
        return <Loader
            text="Loading User Data..."
        />
    }

    const onSubmit = (values) => {
        // const payload = new FormData();
        // payload.append("username", values.username)
        // payload.append("firstName", values.firstName)
        // payload.append("lastName", values.lastName)
        // payload.append("email", values.email)
        // payload.append("gender", values.gender)

        const payload = {
            username: values?.username,
            firstName: values?.firstName,
            lastName: values?.lastName,
            email: values?.email,
            gender: values?.gender,
        }

        dispatch(updateUserProfile(payload, userData?.id))
    }

    const handleButton = () => {
        fileInputRef.current?.click();
    }

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    }

    return (
        <div className="pt-32 pb-16">
            <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='bg-white rounded-3xl p-8 shadow-xl'>

                    {/* Header Section */}
                    <ProductHeader
                        heading="Edit Profile"
                        para="Edit your personal information"
                    />

                    <Formik
                        initialValues={{
                            image: userData?.image,
                            username: userData?.username,
                            firstName: userData?.firstName,
                            lastName: userData?.lastName,
                            email: userData?.email,
                            gender: userData?.gender,
                        }}
                        validationSchema={editProfileValidationSchema}
                        onSubmit={(values) => {
                            console.log("Values => ", values);
                            onSubmit(values)
                        }}
                        validateOnBlur={true}
                        validateOnChange={true}
                    >
                        {({ handleSubmit, errors, setFieldValue, values, setFieldTouched, touched }) => {
                            // console.log("values => ", values);
                            console.log("Error => ", errors);

                            return (
                                <Form>

                                    {/* Profile Image */}
                                    {/* <div className='flex justify-center mb-8'>
                                        <div className="relative">
                                            <img
                                                className='w-32 h-32 rounded-full border-3 border-gray-300 shadow-lg object-cover'
                                                src={values?.image}
                                                alt="User Profile Image"
                                            />
                                            <div className='absolute right-0 bottom-10 inset-23 w-8 h-8 bg-blue-700 rounded-full cursor-pointer flex justify-center items-center'
                                                onClick={handleButton}
                                            >
                                                <Camera size={16} color='white' />
                                            </div>
                                        </div>
                                    </div> */}

                                    <input type="file" className='hidden' ref={fileInputRef} onClick={handleFileChange} />

                                    {/* User Info Cards */}
                                    <div className='space-y-6'>
                                        {/* Username Card */}
                                        <ProfileCard
                                            bgColor="bg-blue-50"
                                            bgIconColor="bg-blue-100"
                                            icon={<User size={18} color='blue' />}
                                            input={true}
                                            inputPlaceholder="Username"
                                            inputType="text"
                                            value={values?.username}
                                            onChange={(e) => {
                                                setFieldValue('username', e.target.value)
                                                setFieldTouched('username', true, false)
                                            }}
                                            errors={touched?.username ? errors.username : ''}
                                        />
                                        {/* Name Card */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <ProfileCard
                                                bgColor="bg-green-50"
                                                bgIconColor="bg-green-100"
                                                icon={<User size={18} color='green' />}
                                                input={true}
                                                inputPlaceholder="First Name"
                                                inputType="text"
                                                value={values?.firstName}
                                                onChange={(e) => {
                                                    setFieldValue('firstName', e.target.value)
                                                    setFieldTouched('firstName', true, false)
                                                }}
                                                errors={touched?.firstName ? errors.firstName : ''}
                                            />
                                            <ProfileCard
                                                bgColor="bg-purple-50"
                                                bgIconColor="bg-purple-100"
                                                icon={<User size={18} color='purple' />}
                                                input={true}
                                                inputPlaceholder="Last Name"
                                                inputType="text"
                                                value={values?.lastName}
                                                onChange={(e) => {
                                                    setFieldValue('lastName', e.target.value)
                                                    setFieldTouched('lastName', true, false)
                                                }}
                                                errors={touched?.lastName ? errors.lastName : ''}
                                            />
                                        </div>
                                        {/* Email Card */}
                                        <ProfileCard
                                            bgColor="bg-yellow-50"
                                            bgIconColor="bg-yellow-100"
                                            icon={<Mail size={18} color='orange' />}
                                            input={true}
                                            inputPlaceholder="Email"
                                            inputType="email"
                                            value={values?.email}
                                            onChange={(e) => {
                                                setFieldValue('email', e.target.value)
                                                setFieldTouched('email', true, false)
                                            }}
                                            errors={touched?.email ? errors.email : ''}
                                        />

                                        {/* Gender Card */}
                                        <ProfileCard
                                            bgColor="bg-pink-50"
                                            bgIconColor="bg-pink-100"
                                            icon={<ShieldAlert size={18} color='red' />}
                                            input={true}
                                            inputPlaceholder="Gender"
                                            inputType="text"
                                            value={values?.gender}
                                            onChange={(e) => {
                                                setFieldValue('gender', e.target.value)
                                                setFieldTouched('gender', true, false)
                                            }}
                                            errors={touched?.gender ? errors.gender : ''}
                                        />
                                    </div>

                                    {/* Edit Button */}
                                    <Button
                                        type="submit"
                                        className="!mt-8"
                                        text="Edit Profile"
                                        onClick={() =>
                                            handleSubmit()
                                        }
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