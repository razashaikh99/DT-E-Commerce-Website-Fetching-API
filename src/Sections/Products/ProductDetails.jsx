import React, { useEffect, useState } from "react";

export default function ProductDetails() {

    const [productData, setProductData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(data => {
                setProductData(data)
                setLoading(false)
            })
            .catch(err => console.log("Single Product Error: ", err))
    }, []);

    if (loading) {
        return <div className='flex justify-center items-center'>
            <div className="my-50 w-12 h-12 rounded-full border-6 animate-spin border-blue-500 border-t-transparent"></div>
        </div>
    }

    return (
        <section className="bg-gray-50 min-h-screen py-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* {productData?.map((a) => ( */}
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Left Side - Product Image */}
                    <div className="flex justify-center md:justify-start" >
                        <img
                            src={productData?.images}
                            alt="Product"
                            className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                        />
                    </div>

                    {/* Right Side - Product Details */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold text-gray-900">
                            {productData?.title}
                        </h1>

                        <div className="flex items-center space-x-4">
                            <span className="text-indigo-600 font-semibold">{productData.brand}</span>
                            <div className="flex text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <span className="text-gray-600">{productData.rating}</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-3xl font-bold text-indigo-600">${productData.price}</span>
                        </div>

                        <p className="text-gray-700">
                            {productData.description}
                        </p>

                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition hover:scale-105">
                            Add to Cart
                        </button>
                    </div>
                </div>
                {/* ))} */}
            </div>
        </section >
    );
}
