import { CircleCheckBig, ShieldCheck } from 'lucide-react'

export default function KeyFeatures({ ...props }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Warranty */}
            <div className="bg-blue-50/50 p-4 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <ShieldCheck size={18} color='blue' />
                    </div>
                    <span className="font-semibold text-gray-900">Warranty</span>
                </div>
                <p className="text-gray-600">{props.warrantyInformation || '1 Year Warranty'}</p>
            </div>

            {/* Return Policy */}
            <div className="bg-green-50/50 p-4 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CircleCheckBig size={18} color='green' />
                    </div>
                    <span className="font-semibold text-gray-900">Return Policy</span>
                </div>
                <p className="text-gray-600">{props.returnPolicy || '30 Days Return'}</p>
            </div>
        </div>
    )
}
