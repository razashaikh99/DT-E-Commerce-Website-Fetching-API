import React from 'react'

export default function HeroSection() {
    return (
        <div>
             {/* Hero Section  */}
            <section className="hero-gradient text-white pt-30 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Step Into Style With Premium Footwear
                            </h1>
                            <p className="text-xl text-indigo-100">
                                Discover the perfect pair that combines comfort, style, and quality craftsmanship.
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition hover:scale-105 cursor-pointer">
                                    Shop Now
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition hover:scale-105 cursor-pointer">
                                    Explore Collection
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53bf129a-3531-40d2-8cc6-2f05a95829b1.png" alt="Modern athletic sneakers in various colors arranged artistically on a clean white background" className="rounded-2xl shadow-2xl" onerror="this.style.display='none'" />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-indigo-600">$399</div>
                                        <div className="text-sm text-gray-600">Starting at</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
