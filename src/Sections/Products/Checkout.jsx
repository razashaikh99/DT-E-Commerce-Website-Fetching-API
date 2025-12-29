import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductHeader from "../../Components/ProductHeader";
import { BadgeCheck, ChartColumnStacked, Check, Handbag, LockKeyhole, X } from "lucide-react";
import Button from "../../Components/Button";

export default function Checkout() {

    const navigate = useNavigate();

    const cartItems = useSelector(state => state.cartProduct.cartItems);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const tax = totalPrice * 0.1; // 10% tax
    const shipping = totalPrice > 100 ? 0 : 9.99; // Free shipping over $100
    const finalTotal = totalPrice + tax + shipping;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-30">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <ProductHeader
                    heading="Checkout"
                    para="Review your order and complete your purchase"
                />

                {cartItems.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
                        <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
                            <Handbag size={100} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-3">Your cart is empty</h3>
                        <p className="text-gray-500 mb-8">Add some products to proceed with checkout</p>
                        <Button
                            className="!w-fit mx-auto px-8"
                            onClick={() => navigate("/")}
                            text="Continue Shopping"
                        />
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Left Column - Order Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Order Summary Card */}
                            <div className="bg-white rounded-3xl shadow-xl p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
                                    <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
                                        {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                                            <div className="flex gap-4">
                                                {/* Product Image */}
                                                <div className="relative flex-shrink-0">
                                                    <img
                                                        src={item.thumbnail}
                                                        alt={item.title}
                                                        className="w-24 h-24 object-cover rounded-xl border-2 border-white shadow-md"
                                                    />
                                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                                        {item.qty}
                                                    </div>
                                                </div>

                                                {/* Product Details */}
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <h3 className="font-bold text-gray-900 text-lg line-clamp-2 pr-4">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-xl font-bold text-gray-900">
                                                            ${(item.price * item.qty).toFixed(2)}
                                                        </p>
                                                    </div>

                                                    {item.brand && (
                                                        <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
                                                            <ChartColumnStacked size={18} color='gray' />
                                                            {item.brand}
                                                        </p>
                                                    )}

                                                    <div className="flex items-center justify-between mt-4">
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <span className="font-medium">Qty: {item.qty}</span>
                                                            <span className="text-gray-400"><X size={16} /></span>
                                                            <span>${item.price.toFixed(2)} each</span>
                                                        </div>
                                                        {item.discountPercentage && (
                                                            <span className="text-sm text-green-600 font-semibold">
                                                                Save ${(item.price * item.qty * item.discountPercentage / 100).toFixed(2)}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Payment Method Card */}
                            <div className="bg-white rounded-3xl shadow-xl p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <button className="p-4 border-2 border-gray-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all flex flex-col items-center">
                                        <BadgeCheck size={28} color="blue" />
                                        <span className="font-medium pt-3">Credit Card</span>
                                    </button>
                                    <button className="p-4 border-2 border-gray-200 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all flex flex-col items-center">
                                        <BadgeCheck size={28} color="orange" />
                                        <span className="font-medium pt-3">PayPal</span>
                                    </button>
                                    <button className="p-4 border-2 border-gray-200 rounded-2xl hover:border-yellow-500 hover:bg-yellow-50 transition-all flex flex-col items-center">
                                        <BadgeCheck size={28} color="green" />
                                        <span className="font-medium pt-3">Stripe</span>
                                    </button>
                                    <button className="p-4 border-2 border-gray-200 rounded-2xl hover:border-purple-500 hover:bg-purple-50 transition-all flex flex-col items-center">
                                        <BadgeCheck size={28} color="purple" />
                                        <span className="font-medium pt-3">Apple Pay</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Order Total & Checkout */}
                        <div className="space-y-6">
                            {/* Order Total Card */}
                            <div className="bg-white rounded-3xl shadow-xl p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Total</h2>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal ({cartItems.length} items)</span>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>

                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className={shipping === 0 ? "text-green-600 font-semibold" : ""}>
                                            {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax (10%)</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>

                                    {totalPrice > 100 && (
                                        <div className="flex justify-between text-green-600 font-semibold">
                                            <span>Shipping Discount</span>
                                            <span>- $9.99</span>
                                        </div>
                                    )}

                                    <div className="border-t pt-4 mt-4">
                                        <div className="flex justify-between text-2xl font-bold text-gray-900">
                                            <span>Total</span>
                                            <span>${finalTotal.toFixed(2)}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2">Including all taxes and fees</p>
                                    </div>
                                </div>


                            </div>

                            {/* Checkout Button Card */}
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-xl p-6">
                                <div className="text-center text-white mb-6">
                                    <h3 className="text-xl font-bold mb-2">Secure Checkout</h3>
                                    <p className="text-blue-100">Your payment is 100% protected</p>
                                </div>

                                <button
                                    onClick={() => navigate("/confirm-order")}
                                    className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    <Check />
                                    Confirm Order
                                </button>

                                <div className="flex items-center justify-center gap-3 mt-6 text-blue-100 text-sm">
                                    <LockKeyhole />
                                    <span>SSL Encrypted Payment</span>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="bg-white rounded-3xl shadow-xl p-6">
                                <div className="flex flex-wrap justify-center gap-6">
                                    <div className="text-center">
                                        <div className="w-10 h-10 mx-auto mb-2 text-green-500">
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">Secure</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-10 h-10 mx-auto mb-2 text-blue-500">
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">Fast</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-10 h-10 mx-auto mb-2 text-purple-500">
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">Reliable</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}