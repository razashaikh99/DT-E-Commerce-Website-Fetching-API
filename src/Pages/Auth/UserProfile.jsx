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
                    {/* <div className='flex justify-center mb-8'>
                        <div className="relative">
                            <img
                                className='w-32 h-32 rounded-full border-3 border-gray-300 shadow-lg object-cover'
                                src={userData?.image}
                                alt="User Profile Image"
                            />
                        </div>
                    </div> */}

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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                </div>
            </div>
        </div>
    )
}