import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFeatureProducts } from "../../../store/action/featureProductAction";
import { addToCart } from "../../../store/action/cartAction";
import { toast } from "react-toastify";
import { selectProduct } from "../../../store/action/productDetailAction";
import Button from "../../../Components/Button";
import ProductCard from "../../../Components/ProductCard";
import Loader from "../../../Components/Loader";
import ProductHeader from "../../../Components/ProductHeader";

export default function FeaturedProducts() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { products, loading } = useSelector(state => state.featureProduct)

    useEffect(() => {
        dispatch(fetchFeatureProducts());
    }, [dispatch])

    if (loading) {
        return <Loader
            text="Loading Feature products..."
        />
    }

    const toastifyNotify = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.title} added to cart!`);
    }

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ProductHeader
                    heading="Featured Products"
                    para="Discover our premium collection of trending products loved by customers"
                />

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            id={product.id}
                            onClick={() => {
                                dispatch(selectProduct(product))
                                navigate("/product-details")
                            }}
                            thumbnail={product?.thumbnail}
                            title={product?.title}
                            discountPercentage={product?.discountPercentage}
                            category={product?.category}
                            rating={product?.rating}
                            reviews={product?.reviews}
                            price={product?.price}
                            stock={product?.stock}
                            brand={product?.brand}
                            warrantyInformation={product?.warrantyInformation}
                            onPressButton={(e) => {
                                toastifyNotify(product)
                                e.stopPropagation()
                            }}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-16">
                    <Button
                        onClick={() => {
                            navigate("/all-products");
                        }}
                        text="View All Products"
                        className='!w-fit mx-auto px-12'
                        isBgColor="bg-white border border-gray-500"
                        isColor="text-black"
                    />
                </div>
            </div>
        </section>
    );
}







// =============================================================================================================================================================================================================================================================================================================================================================














// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function FeaturedProducts() {
//     const [productsData, setProductsData] = useState([]);

//     const navigate = useNavigate();

//     // 🔹 Step 1: Fetch API
//     useEffect(() => {
//         fetch("https://dummyjson.com/products")
//             .then(res => res.json())
//             .then(data => {
//                 // sirf 4 products chahiye
//                 setProductsData(data.products.slice(8, 16));
//             });
//     }, []);

//     return (
//         <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Header */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//                         Featured Products
//                     </h2>
//                     <p className="text-gray-600 text-xl max-w-4xl mx-auto">
//                         Discover our premium collection of trending products loved by customers
//                     </p>
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {productsData.map((product) => (
//                         <div
//                             key={product.id}
//                             className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
//                         >
//                             {/* Product Image */}
//                             <div className="relative overflow-hidden">
//                                 <img
//                                     src={product.thumbnail}
//                                     alt={product.title}
//                                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                                 />

//                                 {/* Discount Badge */}
//                                 {product.discountPercentage > 0 && (
//                                     <div className="absolute top-4 left-4 px-4 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full text-sm shadow-lg">
//                                         {Math.round(product.discountPercentage)}% OFF
//                                     </div>
//                                 )}

//                                 {/* Quick View Overlay */}
//                                 <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

//                                 </div>
//                             </div>

//                             {/* Product Details */}
//                             <div className="p-6">
//                                 {/* Title and Category */}
//                                 <div className="mb-4">
//                                     <h3 className="font-bold text-gray-900 text-lg line-clamp-2 min-h-[56px]">
//                                         {product.title}
//                                     </h3>
//                                     {product.category && (
//                                         <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
//                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                                             </svg>
//                                             <span className="capitalize">{product.category.replace(/-/g, ' ')}</span>
//                                         </p>
//                                     )}
//                                 </div>

//                                 {/* Ratings */}
//                                 <div className="flex items-center gap-2 mb-4">
//                                     <div className="flex items-center">
//                                         {[...Array(5)].map((_, idx) => (
//                                             <svg
//                                                 key={idx}
//                                                 className={`w-5 h-5 ${idx < Math.floor(product.rating) ? 'text-amber-500 fill-current' : 'text-gray-300'}`}
//                                                 viewBox="0 0 24 24"
//                                             >
//                                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                             </svg>
//                                         ))}
//                                     </div>
//                                     <span className="text-sm font-semibold text-gray-700">
//                                         {product.rating.toFixed(1)}
//                                     </span>
//                                     <span className="text-sm text-gray-500">
//                                         ({product.reviews?.length || Math.floor(Math.random() * 100) + 50} reviews)
//                                     </span>
//                                 </div>

//                                 {/* Prices */}
//                                 <div className="flex items-center justify-between mb-6">
//                                     <div>
//                                         <span className="text-3xl font-bold text-gray-900">
//                                             ${product.price.toFixed(2)}
//                                         </span>

//                                     </div>

//                                     {/* Stock Status */}
//                                     <div className={`text-sm px-3 py-1 rounded-full font-semibold ${product.stock > 0
//                                         ? 'bg-green-100 text-green-700'
//                                         : 'bg-red-100 text-red-700'
//                                         }`}>
//                                         {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
//                                     </div>
//                                 </div>

//                                 {/* Features List */}
//                                 <div className="space-y-2 mb-6">
//                                     {product.brand && (
//                                         <div className="flex items-center text-gray-700 text-sm">
//                                             <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                                             </svg>
//                                             <span>Brand: <span className="font-medium">{product.brand}</span></span>
//                                         </div>
//                                     )}

//                                     {product.warrantyInformation && (
//                                         <div className="flex items-center text-gray-700 text-sm">
//                                             <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                                             </svg>
//                                             <span>Warranty: <span className="font-medium">{product.warrantyInformation}</span></span>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Action Button */}
//                                 <button className="w-full contact-gradient text-white font-semibold py-3 px-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
//                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                                     </svg>
//                                     Add to Cart
//                                 </button>
//                             </div>

//                             {/* Corner Decoration */}
//                             <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-3xl" />
//                         </div>
//                     ))}
//                 </div>

//                 {/* View All Button */}
//                 <div className="text-center mt-16">
//                     <button
//                         onClick={() => {
//                             navigate("/all-products");
//                         }}
//                         className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
//                         <span>View All Products</span>
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }
