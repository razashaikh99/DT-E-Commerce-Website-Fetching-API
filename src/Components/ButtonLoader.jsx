import React from 'react'

export default function ButtonLoader({ ...props }) {
    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <div className="w-5 h-5 mx-auto rounded-full border-[3px] border-white border-t-transparent animate-spin"></div>
                <p className="text-gray-600 text-lg font-medium">{props.text}</p>
            </div>
        </div>
    )
}
