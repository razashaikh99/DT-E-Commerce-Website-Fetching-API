import React from 'react'

export default function NewsletterSection() {
    return (
        <div>
            {/* Newsletter */}
            <section className="py-16 contact-gradient text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
                    <p className="text-lg mb-8">Subscribe to get exclusive offers, new arrivals, and style tips delivered to your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input type="email" placeholder="Enter your email address" className="px-6 py-3 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto border-2" />
                            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition hover:scale-105 cursor-pointer whitespace-nowrap">
                                Subscribe Now
                            </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
