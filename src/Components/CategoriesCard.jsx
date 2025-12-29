import React from 'react'
import Button from './Button'

export default function CategoriesCard({ onClick, ...props }) {
    return (
        <div
            key={props.index}
            onClick={onClick}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2"
        >
            <div className="relative h-38 overflow-hidden">
                <img
                    src={props.image || "https://t3.ftcdn.net/jpg/05/32/38/82/360_F_532388287_lEM2pgAFstzdukcxrk09YlEzTKB5iZaR.jpg"}
                    alt={props.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-0 right-0 px-4">
                    <h2 className="text-white text-xl font-bold capitalize text-center drop-shadow-lg">
                        {props.name}
                    </h2>

                </div>
                <div className="absolute top-4 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
            <div className="p-5 bg-gradient-to-r from-gray-50 to-white">
                <Button
                    text="Browse Category"
                />
            </div>
        </div>
    )
}
