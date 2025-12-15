import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

export default function ContactContent() {
    return (
        <div>
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <ContactForm />

                        {/* Contact Information */}
                        <ContactInfo />
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
