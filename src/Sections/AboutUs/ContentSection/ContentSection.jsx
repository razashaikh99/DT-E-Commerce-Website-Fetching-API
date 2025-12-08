import React from 'react'

export default function ContentSection() {
    return (
        <div>
            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53bf129a-3531-40d2-8cc6-2f05a95829b1.png"
                            alt="Stylish sneakers on display"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            StyleStep started as a small boutique with a passion for footwear. Over the years, we have grown into a trusted brand known for our dedication to quality and customer satisfaction. Our collections are carefully curated to meet the diverse tastes and needs of our customers.
                        </p>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Why Choose Us?</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Premium materials and craftsmanship</li>
                            <li>Wide range of styles for men, women, and kids</li>
                            <li>Comfort-focused designs for everyday wear</li>
                            <li>Excellent customer service and support</li>
                            <li>Eco-friendly and sustainable practices</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
