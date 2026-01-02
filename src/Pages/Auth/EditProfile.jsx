
import ProductHeader from '../../Components/ProductHeader';
import { Mail, ShieldAlert, User } from 'lucide-react';
import ProfileCard from '../../Components/ProfileCard';
import Button from '../../Components/Button';
import { useDispatch } from 'react-redux';

export default function EditProfile() {

    const dispatch = useDispatch();

    

    return (
        <div className="pt-32 pb-16">
            <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='bg-white rounded-3xl p-8 shadow-xl'>

                    {/* Header Section */}
                    <ProductHeader
                        heading="Edit Profile"
                        para="Edit your personal information"
                    />

                    {/* Profile Image */}
                    <div className='flex justify-center mb-8'>
                        <div className="relative">
                            <img
                                className='w-32 h-32 rounded-full border-3 border-gray-300 shadow-lg object-cover'
                                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                                alt="User Profile Image"
                            />
                        </div>
                    </div>

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
                            />
                            <ProfileCard
                                bgColor="bg-purple-50"
                                bgIconColor="bg-purple-100"
                                icon={<User size={18} color='purple' />}
                                input={true}
                                inputPlaceholder="Last Name"
                                inputType="text"
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
                        />

                        {/* Gender Card */}
                        <ProfileCard
                            bgColor="bg-pink-50"
                            bgIconColor="bg-pink-100"
                            icon={<ShieldAlert size={18} color='red' />}
                            input={true}
                            inputPlaceholder="Gender"
                            inputType="text"
                        />
                    </div>

                    {/* Edit Button */}
                    <Button
                        className="!mt-8"
                        text="Edit Profile"
                    />

                </div>
            </div>
        </div>
    )
}