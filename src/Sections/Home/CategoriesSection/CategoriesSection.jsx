import React from 'react'

export default function CategoriesSection() {
    return (
        <div>
            {/* Categories Section  */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Shop By Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="category-card bg-gray-100 rounded-2xl p-6 text-center cursor-pointer hover:bg-indigo-100">
                            <div className="w-20 h-20 mx-auto mb-4 bg-indigo-200 rounded-full flex items-center justify-center">
                                <i className="fas fa-male text-3xl text-indigo-600"></i>
                            </div>
                            <h3 className="font-semibold text-gray-900">Men's Shoes</h3>
                            <p className="text-sm text-gray-600 mt-2">Formal & Casual</p>
                        </div>

                        <div className="category-card bg-gray-100 rounded-2xl p-6 text-center cursor-pointer hover:bg-pink-100">
                            <div className="w-20 h-20 mx-auto mb-4 bg-pink-200 rounded-full flex items-center justify-center">
                                <i className="fas fa-female text-3xl text-pink-600"></i>
                            </div>
                            <h3 className="font-semibold text-gray-900">Women's Shoes</h3>
                            <p className="text-sm text-gray-600 mt-2">Heels & Flats</p>
                        </div>

                        <div className="category-card bg-gray-100 rounded-2xl p-6 text-center cursor-pointer hover:bg-green-100">
                            <div className="w-20 h-20 mx-auto mb-4 bg-green-200 rounded-full flex items-center justify-center">
                                <i className="fas fa-child text-3xl text-green-600"></i>
                            </div>
                            <h3 className="font-semibold text-gray-900">Kids' Shoes</h3>
                            <p className="text-sm text-gray-600 mt-2">Comfort & Style</p>
                        </div>

                        <div className="category-card bg-gray-100 rounded-2xl p-6 text-center cursor-pointer hover:bg-yellow-100">
                            <div className="w-20 h-20 mx-auto mb-4 bg-yellow-200 rounded-full flex items-center justify-center">
                                <i className="fas fa-running text-3xl text-yellow-600"></i>
                            </div>
                            <h3 className="font-semibold text-gray-900">Sports Shoes</h3>
                            <p className="text-sm text-gray-600 mt-2">Performance & Training</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
