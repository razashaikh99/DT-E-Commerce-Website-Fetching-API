import { Minus, Plus } from 'lucide-react'

export default function ProductQuantity({ onClickDecrease, onClickIncrease, ...props }) {
    return (
        <div className="flex items-center border-2 border-gray-300 rounded-full overflow-hidden">
            {/* Minus Button */}
            <button
                onClick={onClickDecrease}
                disabled={props.decreaseDisabled}
                className="p-3 text-2xl w-full h-full font-bold text-gray-600 hover:bg-gray-200 rounded-full transition cursor-pointer"
            >
                <Minus size={18} />
            </button>

            {/* Quantity Number */}
            <span className="px-2 py-1 text-lg font-bold text-gray-900 select-none">
                {props.quantity}
                {/* <input type="number" className='w-10 border-none hover:border-none' value={props.quantity} onChange={props.onChange} /> */}
            </span>

            {/* Plus Button */}
            <button
                onClick={onClickIncrease}
                disabled={props.IncreaseDisabled}
                className="p-3 text-2xl w-full h-full font-bold text-gray-600 hover:bg-gray-200 rounded-full transition cursor-pointer"
            >
                <Plus size={18} />
            </button>
        </div>
    )
}
