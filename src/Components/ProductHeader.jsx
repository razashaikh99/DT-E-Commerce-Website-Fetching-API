import React from 'react'

export default function ProductHeader({ ...props }) {
    return (
        <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                    {props.heading}
                </h1>
                <p className="text-gray-600 text-lg max-w-4xl mx-auto">
                    {props.para}
                    {props.length > 0 && (
                        <span className="text-blue-600 font-semibold ml-2">
                            ({props.length} products available)
                        </span>
                    )}
                </p>
            </div>
        </div>
    )
}
