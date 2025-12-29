import { ChevronLeft } from 'lucide-react'
import React from 'react'

export default function Breadcrumb({ onClick, ...props }) {
    return (
        <div className="mb-8">
            <nav className="flex items-center text-sm text-gray-600">
                <ChevronLeft size={18} color='gray' />
                <button
                    onClick={onClick}
                    className="flex items-center hover:text-blue-600 transition-colors cursor-pointer pl-1"
                >
                    Back to Products
                </button>
                <span className="mx-2">/</span>
                <span className="text-gray-400 capitalize">{props.category}</span>
            </nav>
        </div>
    )
}
