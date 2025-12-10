// import { useNavigate } from "react-router-dom";

export default function ConfirmOrder() {

    // const navigate = useNavigate();

    return (
        <div className="text-center py-40">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Order Confirmed!</h2>
            <p className="text-gray-700">Thank you for your purchase. Your order has been placed successfully.</p>
            <button
                onClick={() => {
                    window.location.href = "/";
                }}
                className="w-90 bg-indigo-600 text-white py-2 rounded-lg mt-4 hover:bg-indigo-700 transition"
            >
                Back to Home!
            </button>
        </div>
    );
}
