import React from 'react'

export default function Button({ onClick, icon = false, ...props }) {
    return (
        <button
            onClick={onClick}
            className="w-full flex-1 contact-gradient text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
            {icon &&
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            }
            {props.text}
        </button>
    )
}
