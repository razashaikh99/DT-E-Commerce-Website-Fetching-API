import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../store/action/cartAction';
import { decreaseQuantity, increaseQuantity } from '../../store/slice/productDetailSlice';
import Button from '../../Components/Button';
import { useState } from 'react';
import NoProduct from '../../Components/NoProduct';
import Breadcrumb from '../../Components/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { Box, ChartBarStacked, Check, CircleCheckBig, Clock, LockKeyhole, Minus, PackageCheck, Plus, ShieldCheck, Shuffle } from 'lucide-react';
import ProductQuantity from '../../Components/ProductQuantity';
import KeyFeatures from '../../Components/KeyFeatures';

export default function ProductDetails() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { selectedItem, quantity, maxQuantity, } = useSelector(state => state.selectedProduct)
    const [activeImage, setActiveImage] = useState(0)

    console.log(activeImage);

    if (!selectedItem) return <NoProduct />

    const toastifyNotify = (product) => {
        dispatch(addToCart({
            ...selectedItem,
            qty: quantity
        }));
        toast.success(`${product.title} (${quantity} items) added to cart!`);
    }

    const handleOnchange = (e) => {
        const value = Number(e.target.value)
        if (!isNaN(value)) {
            dispatch(increaseQuantity(value))
        }
    }

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <Breadcrumb
                    onClick={() => navigate(-1)}
                    category={selectedItem?.category}
                />

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Product Images Section */}
                    <div className="space-y-6">
                        {/* Main Image */}
                        <div className="relative bg-white rounded-3xl shadow-2xl p-8 overflow-hidden group">
                            <div className="absolute top-6 right-6 z-10">
                                {selectedItem?.discountPercentage && (
                                    <span className="px-4 py-2 bg-red-500 text-white font-bold rounded-full text-sm">
                                        {Math.round(selectedItem.discountPercentage)}% OFF
                                    </span>
                                )}
                            </div>
                            <img
                                src={activeImage || selectedItem?.thumbnail}
                                alt={selectedItem?.title}
                                className="w-full h-auto max-h-96 object-contain transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Thumbnails (if available) */}
                        {selectedItem?.images?.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-4">
                                {selectedItem.images.map((img, index) => (
                                    <button
                                        key={index}
                                        className="flex-shrink-0 w-24 h-24 bg-white rounded-xl shadow-md overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all"
                                        onClick={() => setActiveImage(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Details Section */}
                    <div className="space-y-8">
                        {/* Title and Rating */}
                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                                    {selectedItem?.title}
                                </h1>
                                <div className="flex items-center gap-1 bg-amber-50 px-8 py-2 rounded-full">
                                    <svg className="w-6 h-6 text-amber-500 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="font-bold text-gray-900">{selectedItem?.rating?.toFixed(1) || '4.5'}</span>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold text-blue-700">
                                    ${selectedItem?.price?.toFixed(2)}
                                </span>
                                {selectedItem?.discountPercentage && (
                                    <>
                                        <span className="text-2xl text-gray-400 line-through">
                                            ${(selectedItem.price / (1 - selectedItem.discountPercentage / 100)).toFixed(2)}
                                        </span>
                                        <span className="px-4 py-1 bg-red-100 text-red-600 font-bold rounded-full">
                                            Save {Math.round(selectedItem.discountPercentage)}%
                                        </span>
                                    </>
                                )}
                            </div>

                            {/* Stock Status */}
                            <div className="flex items-center gap-3">
                                <div className={`px-4 py-2 rounded-full font-semibold ${selectedItem?.availabilityStatus === 'In Stock'
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
                                    }`}>
                                    {selectedItem?.availabilityStatus || 'Out of Stock'}
                                </div>
                                <span className="text-gray-600">
                                    {selectedItem?.stock} units available
                                </span>
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-6 mt-6">
                            <span className="text-lg font-semibold text-gray-700">
                                Quantity
                            </span>

                            <ProductQuantity
                                onClickDecrease={() => dispatch(decreaseQuantity())}
                                onClickIncrease={() => dispatch(increaseQuantity())}
                                quantity={quantity}
                                decreaseDisabled={quantity === 1}
                                IncreaseDisabled={quantity === maxQuantity}
                                onChange={handleOnchange}

                            />
                        </div>

                        {/* Divider */}
                        <div className="border border-gray-200 my-8"></div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">Description</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {selectedItem?.description}
                            </p>
                        </div>

                        {/* Key Features */}
                        <KeyFeatures
                            warrantyInformation={selectedItem?.warrantyInformation}
                            returnPolicy={selectedItem?.returnPolicy}
                        />

                        {/* Product Details Grid */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Product Details</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Shuffle size={18} color='gray' />
                                        <span className="text-gray-600">Brand:</span>
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900 block">
                                        {selectedItem?.brand || 'Unknown Brand'}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <ChartBarStacked size={18} color='gray' />
                                        <span className="text-gray-600">Category:</span>
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900 capitalize">
                                        {selectedItem?.category?.replace(/-/g, ' ') || 'Uncategorized'}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Box size={18} color='gray' />
                                        <span className="text-gray-600">SKU:</span>
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900">
                                        {selectedItem?.id || 'N/A'}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Clock size={18} color='gray' />
                                        <span className="text-gray-600">Shipping:</span>
                                    </div>
                                    <span className="text-lg font-semibold text-green-600">
                                        Free Shipping
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                            <Button
                                onClick={() => toastifyNotify(selectedItem)}
                                icon={<Plus size={18} />}
                                text='Add to Cart'
                            />
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Check size={20} color='green' />
                                <span>Authentic Products</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <LockKeyhole size={20} color='green' />
                                <span>Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <PackageCheck size={20} color='green' />
                                <span>Fast Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}







// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ >=|=|=< /=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// =\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\  -----  \=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ >=|=|=< /=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/



// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import { toast } from 'react-toastify';

// export default function ProductDetails() {

//     const { addToCart, selectedItem } = useContext(CartContext);

//     if (!selectedItem) return <p className="py-60 text-center text-red-600/50 text-4xl font-extrabold">No Product Selected!</p>

//     const toastifyNotify = (product) => {
//         addToCart(product)
//         toast.success(`${product.title} added to cart!`)
//     }

//     return (
//         <section className="bg-gray-50 min-h-screen pt-40 pb-25">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 <div key={selectedItem?.id} className="grid md:grid-cols-2 gap-12 items-start">

//                     <div className="flex justify-center md:justify-start" >
//                         <img
//                             src={selectedItem?.images}
//                             alt="Product"
//                             className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
//                         />
//                     </div>

//                     <div className="space-y-4">
//                         <h1 className="text-4xl font-bold text-gray-900">
//                             {selectedItem?.title}
//                         </h1>
//                         <div className="flex items-center space-x-4">
//                             <span className="text-3xl font-bold text-indigo-600">${selectedItem?.price} </span>
//                         </div>
//                         <hr />
//                         <p className="text-gray-700">
//                             {selectedItem?.description}
//                         </p>
//                         <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Category: </span>
//                             {selectedItem?.category}
//                         </div>
//                         <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Rating: </span>
//                             {selectedItem?.rating}
//                         </div>
//                         <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Brand:  </span>
//                             {!selectedItem.brand ? "Null" : selectedItem?.brand}
//                         </div>
//                         <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Stock Item: </span>
//                             {selectedItem?.stock}
//                         </div>
//                         <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Available Stock: </span>
//                             {selectedItem?.availabilityStatus}
//                         </div>
//                         <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Return Policy: </span>
//                             {selectedItem?.returnPolicy}
//                         </div>
//                         <button onClick={() => toastifyNotify(selectedItem)}
//                             className="w-60 mt-4 contact-gradient text-white py-3 rounded-full hover:bg-indigo-700 transition hover:scale-105 cursor-pointer"
//                         >
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section >
//     );
// }
