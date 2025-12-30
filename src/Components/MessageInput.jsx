import React from 'react'

export default function MessageInput({ ...props }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{props.label}</label>
            <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows={props.rows}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
            />
            {props.errors && (
                <p className='text-red-500 text-sm pb-1'>{props.errors}</p>
            )}
        </div>
    )
}
