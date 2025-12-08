import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            {/* Navigation  */}
            <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-indigo-600">Apna Mart</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
                            <Link to="/all-products" className="text-gray-700 hover:text-indigo-600 transition-colors">All Products</Link>
                            <Link to="/about-us" className="text-gray-700 hover:text-indigo-600 transition-colors">About Us</Link>
                            <Link to="/contact-us" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact Us</Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="text-gray-700 hover:text-indigo-600">
                                <i className="fas fa-search text-lg"></i>
                            </button>
                            <button className="text-gray-700 hover:text-indigo-600">
                                <i className="fas fa-shopping-cart text-lg"></i>
                                <span className="absolute -mt-2 -ml-2 bg-indigo-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">3</span>
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
        </div>
    )
}
