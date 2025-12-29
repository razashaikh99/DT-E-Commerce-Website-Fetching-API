import React from 'react'

export default function OfferSection() {
    return (
        <div>
            {/* Special Offer Banner */}
            <section className="py-26 bg-gradient-to-br from-indigo-900 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Summer Sale - Up to 50% Off</h2>
                    <p className="text-xl mb-8">Hurry! Limited time offer on selected styles. Don't miss out on these amazing deals.</p>
                    <div className="flex justify-center flex-wrap space-x-4 space-y-4">
                        <div className="bg-white text-indigo-900 px-4 py-2 rounded-lg">
                            <span className="text-2xl font-bold">02</span>
                            <span className="text-sm">Days</span>
                        </div>
                        <div className="bg-white text-indigo-900 px-4 py-2 rounded-lg">
                            <span className="text-2xl font-bold">18</span>
                            <span className="text-sm">Hours</span>
                        </div>
                        <div className="bg-white text-indigo-900 px-4 py-2 rounded-lg">
                            <span className="text-2xl font-bold">45</span>
                            <span className="text-sm">Mins</span>
                        </div>
                        <div className="bg-white text-indigo-900 px-4 py-2 rounded-lg">
                            <span className="text-2xl font-bold">30</span>
                            <span className="text-sm">Secs</span>
                        </div>
                    </div>
                    <button className="mt-8 bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition hover:scale-105 cursor-pointer">
                        Shop Sale Items
                    </button>
                </div>
            </section>
        </div>
    )
}
