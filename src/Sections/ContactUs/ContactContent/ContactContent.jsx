import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import MapContent from './MapContent'

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
                    <MapContent />
                </div>
            </section>
        </div>
    )
}
