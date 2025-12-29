import React from 'react'
import Button from './Button'
import { ChartColumnStacked, CircleCheckBig, Plus, ShieldCheck } from 'lucide-react'

export default function ProductCard({ onClick, onCardPress, ...props }) {
    return (
        <div
            key={props.key}
            className="group bg-white flex flex-col rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
            onClick={onClick}
        >
            <div className="relative overflow-hidden">
                <img
                    src={props.thumbnail}
                    alt={props.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Discount Badge */}
                {props.discountPercentage > 0 && (
                    <div className="absolute top-4 left-4 px-4 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full text-sm shadow-lg">
                        {Math.round(props.discountPercentage)}% OFF
                    </div>
                )}

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                </div>
            </div>

            {/* Product Details */}
            <div className="p-6 flex-1 flex flex-col">
                <div>

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
                            <div className="flex items-center gap-2 text-gray-700">
                                <ChartColumnStacked size={18} color='gray' />
                                <span className="text-sm">Brand: <span className="font-medium">{props.brand}</span></span>
                            </div>
                        )}

                        {props?.warrantyInformation && (
                            <div className="flex items-center gap-2 text-gray-700">
                                <ShieldCheck size={18} color='gray' />
                                <span className="text-sm">Warranty: <span className="font-medium">{props.warrantyInformation}</span></span>
                            </div>
                        )}

                        {props.availabilityStatus && (
                            <div className="flex items-center gap-2 text-gray-700">
                                <CircleCheckBig size={18} color='gray' />
                                <span className="text-sm">Status: <span className={`font-medium ${props.availabilityStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                                    {props.availabilityStatus}
                                </span></span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-1"></div>

                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <span className="text-3xl font-bold text-gray-900">
                                ${props.price}
                            </span>
                        </div>
                    </div>

                    {/* Add to cart */}
                    <Button
                        onClick={onCardPress}
                        icon={<Plus size={18} />}
                        text='Add to Cart'
                    />
                </div>
            </div>

        </div>

    )
}
