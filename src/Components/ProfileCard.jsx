import React from 'react'

export default function ProfileCard({ ...props }) {
    return (
        <div className='flex flex-col '>
            <div className={`${props.bgColor} rounded-xl p-4 border border-blue-100 hover:shadow-md transition-shadow`}>
                <div className="flex items-center">
                    <div className={`${props.bgIconColor} p-2 rounded-lg mr-4`}>
                        {props.icon}
                    </div>
                    <div>
                        <p className='text-sm font-medium text-gray-600'>{props.title}</p>
                        <p className='text-lg font-semibold text-gray-900'>{props.data}</p>
                    </div>
                    {props.input &&
                        <input
                            className='px-2 py-1 rounded-sm w-full outline-none'
                            placeholder={props.inputPlaceholder}
                            type={props.inputType}
                            name={props.inputName}
                            onChange={props.onChange}
                            value={props.value}
                        />
                    }

                </div>
            </div>
            {props.errors && (
                <p className='text-red-500 text-sm py-1'>{props.errors}</p>
            )}
        </div>
    )
}
