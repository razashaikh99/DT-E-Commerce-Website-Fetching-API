import React from 'react'

export default function CategoryBottomCard({ ...props }) {
    return (
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600">{props.text1}</div>
            <div className="text-gray-600 mt-2">{props.text2}</div>
        </div>
    )
}
