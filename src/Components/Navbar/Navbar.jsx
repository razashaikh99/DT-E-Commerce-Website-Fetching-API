import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import CartSidebar from './CartSidebar';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { setLogout } from '../../store/slice/userProfileSlice';
import { toast } from 'react-toastify';

export default function Navbar() {

    const [cartOpen, setCartOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const cartItems = useSelector(
        state => state.cartProduct.cartItems
    );

    const { user } = useSelector(
        state => state.loginSlice
    );

    const { userData } = useSelector(
        state => state.userProfile

    );

    const totalQuantity = cartItems.reduce(
        (acc, item) => acc + item.qty,
        0
    );

    const toggleDropdown = () => {
        setIsProfileOpen(!isProfileOpen)
    }

    console.log("Login User => ", user);

    return (
        <div>
            <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center">
                            <Link
                                to="/">
                                <span className="font-extrabold text-3xl text-indigo-600">AlBayt Mart</span>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                to="/"
                                onClick={() => setCartOpen(false)}
                                className="text-gray-700 hover:text-indigo-600">Home</Link>
                            <Link
                                to="/all-products"
                                onClick={() => setCartOpen(false)}
                                className="text-gray-700 hover:text-indigo-600">Products</Link>
                            <Link
                                to="/categories"
                                onClick={() => setCartOpen(false)}
                                className="text-gray-700 hover:text-indigo-600">Categories</Link>
                            <Link
                                to="/about-us"
                                onClick={() => setCartOpen(false)}
                                className="text-gray-700 hover:text-indigo-600">About Us</Link>
                            <Link
                                to="/contact-us"
                                onClick={() => setCartOpen(false)}
                                className="text-gray-700 hover:text-indigo-600">Contact Us</Link>
                        </div>

                        <div className="flex items-center space-x-6">

                            <button className="text-gray-700 hover:text-indigo-600">
                                <i className="fas fa-search text-lg"></i>
                            </button>

                            <button
                                className="text-gray-700 hover:text-indigo-600 relative cursor-pointer"
                                onClick={() => setCartOpen(!cartOpen)}
                            >
                                <i className="fas fa-shopping-cart text-lg"></i>
                                {totalQuantity > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                                        {totalQuantity}
                                    </span>
                                )}
                            </button>

                            {user ? (
                                <button
                                    onClick={() => {
                                        toggleDropdown()
                                    }}>
                                    {userData?.image ? (
                                        <img
                                            className="w-8 h-8 rounded-full cursor-pointer border-2 border-gray-200 object-cover"
                                            src={userData?.image}
                                            alt="User Profile"
                                        />
                                    ) : (
                                        <i className="fas fa-user text-lg text-gray-700 hover:text-indigo-600"></i>
                                    )}
                                </button>
                            ) : (
                                <Button
                                    onClick={() => navigate("/login")}
                                    className="!px-10 !py-2"
                                    text="Login"
                                />
                            )}

                            {isProfileOpen && (
                                <div className="absolute right-5 mt-40 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-50">

                                    {/* 1. View Profile */}
                                    {user ?
                                        (
                                            <button
                                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    navigate("/profile");
                                                    setIsProfileOpen(false);
                                                }}
                                            >
                                                View Profile
                                            </button>
                                        ) : (
                                            <button
                                                className="hidden w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    navigate("/login");
                                                    setIsProfileOpen(false);
                                                }}
                                            >
                                                View Profile
                                            </button>
                                        )
                                    }

                                    {/* 2. Edit Profile */}
                                    <button
                                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            navigate("/edit-profile");
                                            setIsProfileOpen(false);
                                        }}
                                    >
                                        Edit Profile
                                    </button>

                                    {/* 3. Logout */}
                                    <button
                                        className="block w-full text-left font-medium px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer"
                                        onClick={() => {
                                            dispatch(setLogout());
                                            window.location.href = "/";
                                            setIsProfileOpen(false);
                                            // toast.info("User Logout...")
                                            // navigate("/");
                                            // setLogout();
                                        }}
                                    >
                                        Logout
                                    </button>

                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </nav >

            <CartSidebar
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
            />
        </div >
    )
}
