import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ConfirmOrder() {

    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cartProduct.cartItems);
    const [orderNumber, setOrderNumber] = useState('');

    // Generate random order number
    useEffect(() => {
        const randomOrderNum = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
        setOrderNumber(randomOrderNum);

        // Auto redirect after 10 seconds
        const timer = setTimeout(() => {
            navigate("/");
        }, 10000);

        return () => clearTimeout(timer);
    }, [navigate]);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000); // 5 days from now

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 pt-30">
            <div className="max-w-4xl mx-auto">

                {/* Success Animation */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30"></div>
                    </div>
                </div>

                {/* Confirmation Message */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Order Confirmed!
                    </h1>
                    <p className="text-gray-600 text-xl mb-6 max-w-2xl mx-auto">
                        Thank you for your purchase! Your order has been successfully placed and is being processed.
                    </p>

                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Order Number: <span className="font-bold">{orderNumber}</span>
                    </div>
                </div>

                {/* Order Summary Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 transform transition-all duration-500 hover:shadow-3xl">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Order Details */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Order Details</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Order Date:</span>
                                    <span className="font-semibold">{new Date().toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total Items:</span>
                                    <span className="font-semibold">{cartItems.length} items</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Payment Method:</span>
                                    <span className="font-semibold">Credit Card</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Estimated Delivery:</span>
                                    <span className="font-semibold text-blue-600">
                                        {estimatedDelivery.toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Total Amount */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 border-b pb-3">Order Total</h2>

                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal:</span>
                                    <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping:</span>
                                    <span className="font-semibold text-green-600">FREE</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tax:</span>
                                    <span className="font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
                                </div>

                                <div className="border-t pt-3 mt-3">
                                    <div className="flex justify-between text-xl font-bold text-gray-900">
                                        <span>Total Amount:</span>
                                        <span>${(totalPrice * 1.1).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Items Preview */}
                    {cartItems.length > 0 && (
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Items in your order:</h3>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {cartItems.slice(0, 4).map((item, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-20 h-20 object-cover rounded-xl border-2 border-white shadow-md"
                                        />
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                                            {item.qty}
                                        </div>
                                    </div>
                                ))}
                                {cartItems.length > 4 && (
                                    <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                                        <span className="text-gray-500 font-bold">+{cartItems.length - 4}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Next Steps */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Email Confirmation</h3>
                        <p className="text-gray-600 text-sm">Check your email for order details and tracking</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Track Your Order</h3>
                        <p className="text-gray-600 text-sm">Track shipping status in your account</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                        <p className="text-gray-600 text-sm">Contact our support team 24/7</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => {
                            window.location.href = "/";
                        }}
                        className="contact-gradient text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 min-w-[250px]"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Back to Home
                    </button>

                </div>

                {/* Auto Redirect Timer */}
                <div className="text-center mt-12 pt-8 border-t border-gray-200">
                    <p className="text-gray-500 mb-2">
                        You will be redirected to homepage in <span className="font-bold text-blue-600">10 seconds</span>
                    </p>
                    <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
                        <div className="h-full bg-green-500 rounded-full animate-[progress_10s_linear]"></div>
                    </div>
                </div>

                {/* Trust Message */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Your payment is secure and your order is confirmed
                    </p>
                </div>

                {/* Add CSS for progress bar animation */}
                <style jsx>{`
                    @keyframes progress {
                        from { width: 0%; }
                        to { width: 100%; }
                    }
                `}</style>
            </div>
        </div>
    );
}