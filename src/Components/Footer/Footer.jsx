import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      {/* Footer  */}
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Apna Mart</h3>
                    <p className="text-gray-400">Premium footwear for every occasion. Step into style with confidence.</p>
                </div>
                
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
                        <li><Link to="#" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                        <li><Link to="#" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-semibold mb-4">Customer Service</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
                        <li><Link to="#" className="hover:text-white transition-colors">Track Order</Link></li>
                        <li><Link to="#" className="hover:text-white transition-colors">Size Guide</Link></li>
                        <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-semibold mb-4">Connect With Us</h4>
                    <div className="flex space-x-4">
                        <Link to="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                            <i className="fab fa-pinterest"></i>
                        </Link>
                    </div>
                    <div className="mt-6">
                        <p className="text-sm text-gray-400">© 2025 Apna Mart. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
