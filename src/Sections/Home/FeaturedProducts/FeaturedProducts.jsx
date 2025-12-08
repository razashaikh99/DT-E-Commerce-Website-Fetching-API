import React from 'react'

export default function FeaturedProducts() {
    const productsData = [
        {
            id: 1,
            name: "Urban Classic Sneakers",
            price: 3499,
            oldPrice: 4999,
            rating: 4.5,
            badge: "Sale",
            image: "https://images.unsplash.com/photo-1698611028521-4c284ca88b11?q=80&w=687&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "Executive Formal Shoes",
            price: 5999,
            oldPrice: 6999,
            rating: 5.0,
            badge: null,
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a5eed44f-6a4b-4a2d-be07-440216d317ab.png",
        },
        {
            id: 3,
            name: "Ankle Boots Fashion",
            price: 4299,
            oldPrice: 4999,
            rating: 4.0,
            badge: null,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop",
        },
        {
            id: 4,
            name: "Comfort Ballet Flats",
            price: 3799,
            oldPrice: 4399,
            rating: 4.5,
            badge: "New",
            image: "https://images.unsplash.com/photo-1757598076944-530a7bb81d79?q=80&w=1170&auto=format&fit=crop",
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Featured Products</h2>
                    <p className="text-gray-600 mt-4">Discover our most popular footwear collection</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {productsData.map((product) => (
                        <div key={product.id} className="product-card bg-white rounded-2xl overflow-hidden shadow-lg">
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />

                                {/* Badge */}
                                {product.badge && (
                                    <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-1 rounded text-sm">
                                        {product.badge}
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="font-semibold text-gray-900">{product.name}</h3>

                                {/* Ratings */}
                                <div className="flex items-center mt-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(Math.floor(product.rating))].map((_, idx) => (
                                            <i key={idx} className="fas fa-star"></i>
                                        ))}
                                        {product.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                                    </div>
                                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                                </div>

                                {/* Prices */}
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                                    {product.oldPrice && (
                                        <span className="text-sm text-gray-500 line-through">${product.oldPrice}</span>
                                    )}
                                </div>

                                <button className="w-full mt-4 contact-gradient text-white py-2 rounded-lg hover:bg-indigo-700 transition hover:scale-105 cursor-pointer">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
