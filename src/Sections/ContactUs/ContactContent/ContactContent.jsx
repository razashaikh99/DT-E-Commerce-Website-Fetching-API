import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactContent() {
    return (
        <div>
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="contact-card bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your first name" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your last name" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="your@email.com" required />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="+91 1234567890" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                                        <option>General Inquiry</option>
                                        <option>Product Questions</option>
                                        <option>Order Support</option>
                                        <option>Returns & Exchanges</option>
                                        <option>Size Consultation</option>
                                        <option>Wholesale Inquiry</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Tell us how we can help you..." required></textarea>
                                </div>

                                <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition hover:scale-105 cursor-pointer">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
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

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-clock text-indigo-600 text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Business Hours</h3>
                                            <p className="text-gray-600">
                                                Monday - Friday: 9:00 AM - 9:00 PM<br />
                                                Saturday - Sunday: 10:00 AM - 8:00 PM
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
                                        <h3 className="font-semibold text-gray-900 mb-2">❓ How do I track my order?</h3>
                                        <p className="text-sm text-gray-600">You can track your order through your account dashboard or using the tracking number sent to your email.</p>
                                    </div>
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

                    {/* Map Section */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Find Our Store</h2>
                        <div className="map-container">
                            <img src="https://www.pins.pk/uploads/project/18-siteplan.jpg" alt="Map showing StyleStep store location in New Delhi with modern shopping district surroundings" className="w-full h-96 object-cover" onerror="this.style.display='none'" />
                            <div className="bg-white p-4 text-center">
                                <p className="text-gray-600">📍 Located in the heart of New Delhi's fashion district</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
