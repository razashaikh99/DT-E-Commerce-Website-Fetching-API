import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfileData } from '../../store/action/userProfileAction';
import Loader from '../../Components/Loader';
import { useEffect } from 'react';
import { getToken } from '../../utils/utils';
import ProductHeader from '../../Components/ProductHeader';
import { Mail, ShieldAlert, User } from 'lucide-react';
import ProfileCard from '../../Components/ProfileCard';

export default function UserProfile() {

    const dispatch = useDispatch();
    const token = getToken()

    console.log("token => ", token);

    const { loading, userData } = useSelector(state => state.userProfile);

    useEffect(() => {
        dispatch(fetchUserProfileData());
    }, []);

    if (loading) {
        return <Loader
            text="Loading User Data..."
        />
    }

    return (
        <div className="pt-32 pb-16">
            <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='bg-white rounded-3xl p-8 shadow-xl'>

                    {/* Header Section */}
                    <ProductHeader
                        heading="User Profile"
                        para="View your personal information"
                    />

                    {/* Profile Image */}
                    <div className='flex justify-center mb-8'>
                        <div className="relative">
                            <img
                                className='w-32 h-32 rounded-full border-3 border-gray-300 shadow-lg object-cover'
                                src={userData?.image}
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
                            title="Username"
                            data={userData?.username}
                        />

                        {/* Name Card */}
                        <ProfileCard
                            bgColor="bg-green-50"
                            bgIconColor="bg-green-100"
                            icon={<User size={18} color='green' />}
                            title="First Name"
                            data={userData?.firstName}
                        />
                        <ProfileCard
                            bgColor="bg-purple-50"
                            bgIconColor="bg-purple-100"
                            icon={<User size={18} color='purple' />}
                            title="Last Name"
                            data={userData?.lastName}
                        />
                    </div>

                    {/* Email Card */}
                    <ProfileCard
                        bgColor="bg-yellow-50"
                        bgIconColor="bg-yellow-100"
                        icon={<Mail size={18} color='orange' />}
                        title="Email"
                        data={userData?.email}
                    />

                    {/* Gender Card */}
                    <ProfileCard
                        bgColor="bg-pink-50"
                        bgIconColor="bg-pink-100"
                        icon={<ShieldAlert size={18} color='red' />}
                        title="Gender"
                        data={userData?.gender}
                    />
                </div>

                {/* Edit Button */}
                {/* <div className="mt-8 text-center">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                            <span className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                                Edit Profile
                            </span>
                        </button>
                    </div> */}

            </div>
        </div>
        </div >
    )
}