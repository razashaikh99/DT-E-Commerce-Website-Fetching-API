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
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-500 z-40
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
            ></div>

            {/* Cart Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-gradient-to-b from-white to-gray-50 shadow-2xl z-50
            transition-all duration-500 ease-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Cart Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">Shopping Cart</h2>
                                <p className="text-blue-100 text-sm mt-1">
                                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Cart Content */}
                <div className="h-[calc(100vh-180px)] overflow-y-auto p-6 pb-40">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full py-20">
                            <div className="w-32 h-32 mb-6 text-gray-300">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-700 mb-3">Your cart is empty</h3>
                            <p className="text-gray-500 text-center mb-8">Add some amazing products to get started!</p>
                            <button
                                onClick={onClose}
                                className="contact-gradient text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300">
                                    <div className="flex gap-4">
                                        {/* Product Image */}
                                        <div className="relative">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-24 h-24 object-cover rounded-xl"
                                            />
                                            <div className="absolute -top-2 -right-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                                {item.qty}
                                            </div>
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-bold text-gray-900 text-lg line-clamp-2 pr-4">
                                                    {item.title}
                                                </h3>
                                                <button
                                                    onClick={() => dispatch(removeFromCart(item.id))}
                                                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 p-1"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="">
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-bold text-blue-600">
                                                        ${(item.price * item.qty).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Cart Footer */}
                {cartItems.length > 0 && (
                    <div className="border-t border-gray-200 bg-white p-6 absolute bottom-0 w-full">
                        {/* Order Summary */}
                        <div className="space-y-3 mb-6">
                           
                            <div className="">
                                <div className="flex justify-between text-xl font-bold text-gray-900">
                                    <span>Total Price:</span>
                                    <span>${(totalPrice).toFixed(2)}/-</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <button
                                onClick={() => {
                                    onClose();
                                    navigate("/checkout");
                                }}
                                className="contact-gradient text-white font-bold py-3 w-full rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                Proceed to Checkout
                            </button>

                            <button
                                onClick={onClose}
                                className="w-full py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Continue Shopping
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}