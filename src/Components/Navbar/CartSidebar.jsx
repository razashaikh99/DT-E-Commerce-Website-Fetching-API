import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../store/action/cartAction";

export default function CartSidebar({ isOpen, onClose }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector(
        state => state.cartProduct.cartItems
    );

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div>
            <div
                className={`fixed inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-300 z-40
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
            ></div>
            <div
                className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-xl p-6 z-50
                transition-transform duration-300
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
                    <button onClick={onClose}>
                        <i className="fas fa-times text-gray-600 text-xl cursor-pointer"></i>
                    </button>
                </div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="space-y-4 h-full overflow-y-auto">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 border-b pb-3">
                                <img
                                    src={item.thumbnail}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">Qty: {item.qty}</p>
                                    <p className="text-indigo-600 font-bold">
                                        ${item.price.toFixed(2) * item.qty.toFixed(2)}/-
                                    </p>
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="text-red-500 text-sm mt-1 cursor-pointer"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="mt-4 pb-6 font-bold text-xl">
                            Total: ${totalPrice.toFixed(2)}/-
                        </div>
                        <button
                            onClick={() => {
                                onClose();
                                navigate("/checkout");
                            }}
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 hover:bg-indigo-700 transition mb-10"
                        >
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}