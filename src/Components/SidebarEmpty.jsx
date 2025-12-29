import { ShoppingBag, ShoppingCart } from 'lucide-react'
import React from 'react'
import Button from './Button'

export default function SidebarEmpty({ onClick }) {
    return (
        <div className="flex flex-col items-center justify-center h-full py-20">
            <div className="w-32 h-32 mb-6 text-gray-300">
                <ShoppingCart size={120} color="gray" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">Your cart is empty</h3>
            <p className="text-gray-500 text-center mb-8">Add some amazing products to get started!</p>
            <Button
                icon={<ShoppingBag size={20} />}
                className="!py-2"
                onClick={onClick}
                text="Continue Shopping"
            />
        </div>
    )
}
