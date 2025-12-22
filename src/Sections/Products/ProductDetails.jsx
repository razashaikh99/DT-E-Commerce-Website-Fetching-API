import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../store/action/cartAction';

export default function ProductDetails() {

    const dispatch = useDispatch();

    const selectedItem = useSelector(state => state.selectedProduct?.selectedItem)
    // const cartItems = useSelector(state => state.cart.cartItems); 

    if (!selectedItem) return <p className="py-60 text-center text-red-600/50 text-4xl font-extrabold">No Product Selected!</p>

    const toastifyNotify = (product) => {
        dispatch(addToCart(product));
        toast.success(`${product.title} added to cart!`);
    }

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <nav className="flex items-center text-sm text-gray-600">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center hover:text-blue-600 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Products
                        </button>
                        <span className="mx-2">/</span>
                        <span className="text-gray-400 capitalize">{selectedItem?.category}</span>
                    </nav>
                </div>

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
                                src={selectedItem?.images?.[0] || selectedItem?.thumbnail}
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

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-8"></div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">Description</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {selectedItem?.description}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50/50 p-4 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-gray-900">Warranty</span>
                                </div>
                                <p className="text-gray-600">{selectedItem?.warrantyInformation || '1 Year Warranty'}</p>
                            </div>

                            <div className="bg-green-50/50 p-4 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-gray-900">Return Policy</span>
                                </div>
                                <p className="text-gray-600">{selectedItem?.returnPolicy || '30 Days Return'}</p>
                            </div>
                        </div>

                        {/* Product Details Grid */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Product Details</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span className="text-gray-600">Brand:</span>
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900 block">
                                        {selectedItem?.brand || 'Unknown Brand'}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                        <span className="text-gray-600">Category:</span>
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900 capitalize">
                                        {selectedItem?.category?.replace(/-/g, ' ') || 'Uncategorized'}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                        <span className="text-gray-600">SKU:</span>
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900">
                                        {selectedItem?.id || 'N/A'}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
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
                            <button
                                onClick={() => toastifyNotify(selectedItem)}
                                className="contact-gradient text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex-1 flex items-center justify-center gap-3"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add to Cart
                            </button>

                            {/* <button
                                onClick={() => navigate("/checkout")}
                                className="bg-white border-2 border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex-1 flex items-center justify-center gap-3"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                Buy Now
                            </button> */}
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Authentic Products</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
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
