import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactInfo() {
    return (
        <div>
            <div className="space-y-8">
                <div className="contact-card bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-map-marker-alt text-indigo-600 text-xl"></i>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Store Address</h3>
                                <p className="text-gray-600">123 Fashion Street, Mall Road<br />New Delhi, Delhi 110001<br />India</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-phone text-indigo-600 text-xl"></i>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Phone Numbers</h3>
                                <p className="text-gray-600">
                                    Customer Care: <Link to="tel:+911234567890" className="text-indigo-600 hover:underline">+91 123 456 7890</Link><br />
                                    Sales: <Link to="tel:+919876543210" className="text-indigo-600 hover:underline">+91 987 654 3210</Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-envelope text-indigo-600 text-xl"></i>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Email Addresses</h3>
                                <p className="text-gray-600">
                                    General: <Link to="mailto:info@stylestep.com" className="text-indigo-600 hover:underline">info@stylestep.com</Link><br />
                                    Support: <Link to="mailto:support@stylestep.com" className="text-indigo-600 hover:underline">support@stylestep.com</Link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* FAQ Section */}
                <div className="contact-card bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Help</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">❓ What's your return policy?</h3>
                            <p className="text-sm text-gray-600">We offer 30-day returns on unworn shoes with original packaging. Some exclusions apply.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">❓ Do you offer international shipping?</h3>
                            <p className="text-sm text-gray-600">Yes, we ship to over 50 countries worldwide. Shipping rates vary by location.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
