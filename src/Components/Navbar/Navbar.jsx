import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import CartSidebar from './CartSidebar';
import { CartContext } from '../../context/CartContext';

export default function Navbar() {

    const [cartOpen, setCartOpen] = useState(false);
    const { cartItems } = useContext(CartContext);

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.qty, 0)

    return (
        <div>
            <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center">
                            <Link
                                to="/">
                                <span className="font-extrabold font-sans text-3xl text-indigo-600">APNA-MART</span>
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
                                className="text-gray-700 hover:text-indigo-600">All Products</Link>
                            <Link
                                to="/about-us"
                                onClick={() => setCartOpen(false)}
                                className="text-gray-700 hover:text-indigo-600">About Us</Link>
                            <Link
                                to="/contact-us"
                                onClick={() => setCartOpen(false)}
                                className="text-gray-700 hover:text-indigo-600">Contact Us</Link>
                        </div>

                        <div className="flex items-center space-x-4">
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

                            <button className="text-gray-700 hover:text-indigo-600">
                                <i className="fas fa-user text-lg"></i>
                            </button>
                            <button className="md:hidden text-gray-700">
                                <i className="fas fa-bars text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <CartSidebar
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
            />
        </div>
    )
}
