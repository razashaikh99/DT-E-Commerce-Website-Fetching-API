import React from 'react'

export default function Loader({ ...props }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full border-[6px] border-blue-500 border-t-transparent animate-spin mb-6"></div>
                <p className="text-gray-600 text-lg font-medium">{props.text}</p>
            </div>
        </div>
    )
}
