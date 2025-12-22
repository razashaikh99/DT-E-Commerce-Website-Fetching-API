import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

    const navigate = useNavigate();

    const cartItems = useSelector(state => state.cartProduct.cartItems);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="max-w-5xl mx-auto mt-20 p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Checkout</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="bg-white border-b-3 border-green-600 w-28 h-28 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                                    <p className="text-gray-600 mt-1">Quantity: <span className="font-medium">{item.qty}</span></p>
                                    <p className="text-indigo-600 font-bold mt-1 text-lg">
                                        ${(item.price * item.qty).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow">
                        <span className="text-2xl font-bold text-gray-800">Total: ${totalPrice.toFixed(2)}</span>
                        <button
                            onClick={() => navigate("/confirm-order")}
                            className="mt-4 sm:mt-0 contact-gradient text-white py-3 px-8 rounded-full hover:bg-green-700 font-semibold transition hover:scale-105 cursor-pointer"
                        >
                            Confirm Order
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
