import React from 'react'

export default function Button({ onClick, className, isBgColor = false, isColor = false, icon = false, ...props }) {
    return (
        <button
            onClick={onClick}
            className={`${className} ${isBgColor ? isBgColor : 'contact-gradient'} ${isColor ? isColor : 'text-white'} w-full flex-1 font-semibold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer `}
        >
            {icon &&
                <span>{icon}</span>
            }
            {props.text}
        </button>
    )
}
