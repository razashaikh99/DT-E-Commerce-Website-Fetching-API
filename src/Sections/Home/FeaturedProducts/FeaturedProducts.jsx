import React, { useEffect, useState } from "react";

export default function FeaturedProducts() {
    const [productsData, setProductsData] = useState([]);

    // 🔹 Step 1: Fetch API
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                // sirf 4 products chahiye
                setProductsData(data.products.slice(0, 4));
            });
    }, []);

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
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                />

                                {/* Badge → agar discountPercentage ho to show karo */}
                                {product.discountPercentage > 0 && (
                                    <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-1 rounded text-sm">
                                        {product.discountPercentage}% OFF
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="font-semibold text-gray-900">{product.title}</h3>

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

                                    {/* DummyJSON me oldPrice nahi hota → calculate kar lete */}
                                    <span className="text-sm text-gray-500 line-through">
                                        ${Math.round(product.price * 1.2)}
                                    </span>
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
