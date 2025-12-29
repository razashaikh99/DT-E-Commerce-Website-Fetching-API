import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../store/action/cartAction";
import Button from "../Button";
import { Handbag, Minus, Plus, ShoppingBag, ShoppingCart, Trash2, X } from "lucide-react";
import SidebarProductCard from "../SidebarProductCard";
import SidebarEmpty from "../SidebarEmpty";

export default function CartSidebar({ isOpen, onClose }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector(
        state => state.cartProduct.cartItems
    );

    // const { quantity, maxQuantity } = useSelector(state => state.addToCart)

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/0 backdrop-blur-sm transition-all duration-500 z-40
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
                                <Handbag size={20} />
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
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Cart Content */}
                <div className="h-[calc(100vh-180px)] overflow-y-auto p-6">
                    {cartItems.length === 0 ? (
                        <SidebarEmpty
                            onClick={onClose}
                        />
                    ) : (
                        <div className="space-y-6 pb-30">
                            {cartItems.map((item) => (
                                <SidebarProductCard
                                    id={item?.id}
                                    thumbnail={item?.thumbnail}
                                    title={item?.title}
                                    qty={item?.qty}
                                    price={item?.price}
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    onClickDecrease={() => dispatch(decreaseQuantity(item.id))}
                                    onClickIncrease={() => dispatch(increaseQuantity(item.id))}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Cart Footer */}
                {cartItems.length > 0 && (
                    <div className="border-t border-gray-200 bg-white p-6 absolute bottom-0 w-full">
                        {/* Order Summary */}
                        <div className="space-y-3 mb-6">
                            <div>
                                <div className="flex justify-between text-xl font-bold text-gray-900">
                                    <span>Total Price:</span>
                                    <span>${(totalPrice).toFixed(2)}/-</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">

                            <Button
                                onClick={() => {
                                    onClose();
                                    navigate("/checkout");
                                }}
                                icon={<Plus size={18} />}
                                text="Proceed to Checkout"

                            />
                            <Button
                                onClick={() => {
                                    onClose();
                                    navigate("/checkout");
                                }}
                                icon={<ShoppingCart size={18} />}
                                text="Continue Shopping"
                                isBgColor="bg-white border border-blue-600"
                                isColor="text-blue-500"
                            />

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}