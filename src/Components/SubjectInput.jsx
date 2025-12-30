import React from 'react'
import { contactSubjectDropdown } from '../Config/config'

export default function SubjectInput({ ...props }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{props.label}</label>
            <select
                as={props.as}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
                <option value="">Select Subject:</option>
                {contactSubjectDropdown.map((value, index) => (
                    <option value={value.id} key={index}>{value.option}</option>
                ))}
            </select>
            {props.errors && (
                <p className='text-red-500 text-sm py-1'>{props.errors}</p>
            )}
        </div>
    )
}
