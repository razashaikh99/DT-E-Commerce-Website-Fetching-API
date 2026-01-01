import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfileData } from '../../store/action/userProfileAction';
import Loader from '../../Components/Loader';
import { useEffect } from 'react';
import { getToken } from '../../utils/utils';
import ProductHeader from '../../Components/ProductHeader';
import { Mail, ShieldAlert, User } from 'lucide-react';

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
                        <div className='bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-100 hover:shadow-md transition-shadow'>
                            <div className="flex items-center">
                                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                    <User size={18} color='blue' />
                                </div>
                                <div>
                                    <p className='text-sm font-medium text-gray-600'>Username</p>
                                    <p className='text-lg font-semibold text-gray-900'>{userData?.username}</p>
                                </div>
                            </div>
                        </div>

                        {/* Name Card */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className='bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-100 hover:shadow-md transition-shadow'>
                                <div className="flex items-center">
                                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                                        <User size={18} color='green' />
                                    </div>
                                    <div>
                                        <p className='text-sm font-medium text-gray-600'>First Name</p>
                                        <p className='text-lg font-semibold text-gray-900'>{userData?.firstName}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-100 hover:shadow-md transition-shadow'>
                                <div className="flex items-center">
                                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                                        <User size={18} color='purple' />
                                    </div>
                                    <div>
                                        <p className='text-sm font-medium text-gray-600'>Last Name</p>
                                        <p className='text-lg font-semibold text-gray-900'>{userData?.lastName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className='bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-100 hover:shadow-md transition-shadow'>
                            <div className="flex items-center">
                                <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                                    <Mail size={18} color="orange" />
                                </div>
                                <div>
                                    <p className='text-sm font-medium text-gray-600'>Email Address</p>
                                    <p className='text-lg font-semibold text-gray-900 break-all'>{userData?.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Gender Card */}
                        <div className='bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-100 hover:shadow-md transition-shadow'>
                            <div className="flex items-center">
                                <div className="bg-pink-100 p-2 rounded-lg mr-4">
                                    {/* <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                    </svg> */}
                                    <ShieldAlert size={18} color='red' />
                                </div>
                                <div>
                                    <p className='text-sm font-medium text-gray-600'>Gender</p>
                                    <p className='text-lg font-semibold text-gray-900'>{userData?.gender}</p>
                                </div>
                            </div>
                        </div>
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
        </div>
    )
}