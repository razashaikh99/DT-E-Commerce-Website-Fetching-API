import { Handbag, X } from 'lucide-react'
import React from 'react'

export default function SidebarHeader({ onClick, ...props }) {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Handbag size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Shopping Cart</h2>
                        <p className="text-blue-100 text-sm mt-1">
                            {props.length} {props.length === 1 ? 'item' : 'items'} in cart
                        </p>
                    </div>
                </div>
                <button
                    onClick={onClick}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    )
}
