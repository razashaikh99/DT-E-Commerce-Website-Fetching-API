import React from 'react'
import Button from './Button'

export default function ProductCard({ onClick, onCardPress, ...props }) {
    return (
        <div
            key={props.key}
            className="group bg-white flex flex-col rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
            onClick={onClick}
        >
            {/* Product Image */}
            <div className="relative overflow-hidden">
                <img
                    src={props.thumbnail}
                    alt={props.title}
                    className="w-full h-62 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                />

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                </div>
            </div>

            {/* Product Details */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="">

                    <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-gray-900 text-lg line-clamp-2 flex-1 mr-3">
                            {props.title}
                        </h3>
                        <div className="flex items-center text-amber-400">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span className="ml-1 font-semibold">{props.rating?.toFixed(1) || '4.5'}</span>
                        </div>
                    </div>

                    <div className="space-y-2 mb-4">
                        {props.brand && (
                            <div className="flex items-center text-gray-700">
                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span className="text-sm">Brand: <span className="font-medium">{props.brand}</span></span>
                            </div>
                        )}

                        {props?.warrantyInformation && (
                            <div className="flex items-center text-gray-700">
                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="text-sm">Warranty: <span className="font-medium">{props.warrantyInformation}</span></span>
                            </div>
                        )}

                        {props.availabilityStatus && (
                            <div className="flex items-center text-gray-700">
                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm">Status: <span className={`font-medium ${props.availabilityStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                                    {props.availabilityStatus}
                                </span></span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-1">
                </div>

                <div className="">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <span className="text-3xl font-bold text-gray-900">
                                ${props.price}
                            </span>
                        </div>
                    </div>


                    <Button
                        onClick={onCardPress}
                        icon={true}
                        text='Add to Cart'
                    />
                </div>
            </div>

        </div>

    )
}
