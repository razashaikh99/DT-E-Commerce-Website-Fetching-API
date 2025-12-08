import React from 'react'

export default function NewsletterSection() {
    return (
        <div>
            {/* Newsletter Section */}
            <section className="py-16 contact-gradient text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
                    <p className="text-lg mb-8">
                        Subscribe to our newsletter for exclusive offers, new arrivals, and style tips.
                    </p>
                    <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-6 py-3 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto border-2"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap hover:scale-105 cursor-pointer"
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
