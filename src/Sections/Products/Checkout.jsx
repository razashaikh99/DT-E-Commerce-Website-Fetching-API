import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

    const navigate = useNavigate();

    const cartItems = useSelector(state => state.cartProduct.cartItems);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="max-w-4xl mx-auto mt-24 p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex items-center gap-4 border-b pb-3">
                            <img src={item.thumbnail} className="w-20 h-20 rounded" />
                            <div>
                                <h2 className="font-semibold">{item.title}</h2>
                                <p>Qty: {item.qty}</p>
                                <p className="font-bold text-indigo-600">
                                    ${item.price.toFixed(2) * item.qty.toFixed(2)}/-
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="mt-6 text-xl font-bold">
                        Total: ${totalPrice.toFixed(2)}/-
                    </div>

                    <button
                        className="bg-green-600 text-white py-3 rounded-lg w-full mt-4 hover:bg-green-700"
                        onClick={() => navigate("/confirm-order")}
                    >
                        Confirm Order
                    </button>
                </div>
            )}

        </div>
    );
}
