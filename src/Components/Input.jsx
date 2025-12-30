
export default function Input({ ...props }) {
    return (
        <div className={props.className}>
            <label className="block text-sm font-medium text-gray-700 mb-2">{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
            />
            {props.errors && (
                <p className='text-red-500 text-sm py-1'>{props.errors}</p>
            )}
        </div>
    )
}
