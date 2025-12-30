import { Minus, Plus, Trash2 } from 'lucide-react'
import React from 'react'
import ProductQuantity from './ProductQuantity'

export default function SidebarProductCard({ onClick, onClickIncrease, onClickDecrease, ...props }) {
    return (
        <div
            key={props.id}
            className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300">
            <div className="flex gap-4">
                {/* Product Image */}
                <div className="relative">
                    <img
                        src={props.thumbnail}
                        alt={props.title}
                        className="w-24 h-24 object-cover rounded-xl"
                    />
                    <div className="absolute -top-2 -right-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {props.qty}
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900 text-lg line-clamp-2">
                            {props.title}
                        </h3>
                        <button
                            onClick={onClick}
                        >
                            <Trash2 size={18} color="red" className="cursor-pointer" />
                        </button>
                    </div>

                    <div className="flex justify-between items-center pt-3 pr-3">
                        <ProductQuantity
                            onClickDecrease={onClickDecrease}
                            quantity={props.qty}
                            onClickIncrease={onClickIncrease}
                        />
                        {/* <div className="flex items-center gap-3 mt-4">
                            <button
                                onClick={onClickDecrease}
                                className="px-2 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition cursor-pointer"
                            >
                                <Minus size={15} />
                            </button>

                            <span className="font-bold text-gray-900">{props.qty}</span>

                            <button
                                onClick={onClickIncrease}
                                // disabled={quantity === maxQuantity}
                                // disabled={qty === maxQty}
                                className="px-2 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition cursor-pointer"
                            >
                                <Plus size={15} />
                            </button>
                        </div> */}

                        <div className="flex items-center justify-between mt-4 pl-4">
                            <div className="text-right">
                                <p className="text-xl font-bold text-blue-600">
                                    ${(props.price * props.qty).toFixed(2)}/-
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
