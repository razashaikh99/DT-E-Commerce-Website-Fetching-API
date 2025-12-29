import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../store/action/productAction';
import { selectProduct } from '../../store/action/productDetailAction';
import { addToCart } from '../../store/action/cartAction';
import Button from '../../Components/Button';
import ProductCard from '../../Components/ProductCard';

export default function AllProducts() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { products, loading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (loading) {
        return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full border-[6px] border-blue-500 border-t-transparent animate-spin mb-6"></div>
                <p className="text-gray-600 text-lg font-medium">Loading amazing products...</p>
            </div>
        </div>
    }

    const toastifyNotify = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.title} added to cart! 🛒`);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-30">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-12">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        All Products
                    </h1>
                    <p className="text-gray-600 text-lg max-w-4xl mx-auto">
                        Browse through our complete collection of premium products
                        {products.length > 0 && (
                            <span className="text-blue-600 font-semibold ml-2">
                                ({products.length} products available)
                            </span>
                        )}
                    </p>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto">
                {products.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
                        <p className="text-gray-500">Check back later for new arrivals</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ProductCard
                                                            key={product?.id}
                                                            onClick={() => {
                                                                dispatch(selectProduct(product))
                                                                navigate("/product-details")
                                                            }}
                                                            thumbnail={product?.thumbnail}
                                                            title={product?.title}
                                                            rating={product?.rating}
                                                            brand={product?.brand}
                                                            warrantyInformation={product?.warrantyInformation}
                                                            availabilityStatus={product?.availabilityStatus}
                                                            price={product?.price}
                                                            onCardPress={(e) => {
                                                                toastifyNotify(product)
                                                                e.stopPropagation()
                                                            }}
                                                        />
                            // <div
                            //     key={product?.id}
                            //     className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
                            //     onClick={() => {
                            //         dispatch(selectProduct(product))
                            //         navigate("/product-details")
                            //     }}
                            // >
                            //     {/* Product Image */}
                            //     <div className="relative overflow-hidden">
                            //         <img
                            //             src={product?.thumbnail}
                            //             alt={product?.title}
                            //             className="w-full h-62 object-cover group-hover:scale-110 transition-transform duration-700"
                            //             loading="lazy"
                            //         />

                            //         {/* Brand Badge */}
                            //         {product?.brand && (
                            //             <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold text-white bg-blue-600/90 backdrop-blur-sm">
                            //                 {product.brand}
                            //             </div>
                            //         )}

                            //         {/* Quick View Overlay */}
                            //         <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            //         </div>
                            //     </div>

                            //     {/* Product Details */}
                            //     <div className="p-6">
                            //         <div className="flex items-start justify-between mb-3">
                            //             <h3 className="font-bold text-gray-900 text-lg line-clamp-2 flex-1 mr-3">
                            //                 {product?.title}
                            //             </h3>
                            //             <div className="flex items-center text-amber-400">
                            //                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            //                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            //                 </svg>
                            //                 <span className="ml-1 font-semibold">{product?.rating?.toFixed(1) || '4.5'}</span>
                            //             </div>
                            //         </div>

                            //         <div className="space-y-2 mb-4">
                            //             {product?.category && (
                            //                 <div className="flex items-center text-gray-700">
                            //                     <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            //                     </svg>
                            //                     <span className="text-sm">Category: <span className="font-medium capitalize">{product.category.replace(/-/g, ' ')}</span></span>
                            //                 </div>
                            //             )}

                            //             {product?.brand && (
                            //                 <div className="flex items-center text-gray-700">
                            //                     <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            //                     </svg>
                            //                     <span className="text-sm">Brand: <span className="font-medium">{product.brand}</span></span>
                            //                 </div>
                            //             )}

                            //             {product?.availabilityStatus && (
                            //                 <div className="flex items-center text-gray-700">
                            //                     <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            //                     </svg>
                            //                     <span className="text-sm">Status: <span className={`font-medium ${product.availabilityStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                            //                         {product.availabilityStatus}
                            //                     </span></span>
                            //                 </div>
                            //             )}
                            //         </div>

                            //         <div className="flex items-center justify-between mb-6">
                            //             <div>
                            //                 <span className="text-3xl font-bold text-gray-900">
                            //                     ${product?.price?.toFixed(2)}
                            //                 </span>
                            //             </div>
                            //         </div>

                            //         <div className="flex gap-3">
                            //             {/* <button
                            //                 onClick={(e) => {
                            //                     toastifyNotify(product)
                            //                     e.stopPropagation()
                            //                 }}
                            //                 className="flex-1 contact-gradient text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                            //             >
                            //                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            //                 </svg>
                            //                 Add to Cart
                            //             </button> */}
                            //             <Button 
                            //                 icon={true}
                            //                 text='Add to Cart'
                            //                 onClick={(e) => {
                            //                     toastifyNotify(product)
                            //                     e.stopPropagation()
                            //                 }} 
                            //             />

                            //             <button
                            //                 onClick={(e) => {
                            //                     e.stopPropagation()
                            //                     dispatch(selectProduct(product))
                            //                     navigate("/product-details")
                            //                 }}
                            //                 className="px-3 py-3 border-2 border-blue-600 text-blue-600 cursor-pointer font-semibold rounded-full hover:bg-blue-50 transition-colors"
                            //             >
                            //                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            //                 </svg>
                            //             </button>
                            //         </div>
                            //     </div>
                            // </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}







// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ >=|=|=< /=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// =\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\  FETCH  \=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\
// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ >=|=|=< /=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/



// import { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import { CartContext } from '../../context/CartContext';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// export default function AllProducts() {

//     const [AllProductsData, setAllProductsData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const { addToCart, setSelectedItem } = useContext(CartContext)
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch("https://dummyjson.com/products")
//             .then(res => res.json())
//             .then(data => {
//                 setAllProductsData(data.products);
//                 setLoading(false);
//             })
//             .catch(err => console.error(err));
//     }, []);

//     if (loading) {
//         return <div className='flex justify-center'>
//             <div className="my-50 w-12 h-12 rounded-full border-6 animate-spin border-blue-500 border-t-transparent"></div>
//         </div>
//     }

//     const toastifyNotify = (product) => {
//         addToCart(product)
//         toast.success(`${product.title} added to cart!`)
//     }

//     return (
//         <div className="bg-gray-50 min-h-screen py-30 px-4 sm:px-6 lg:px-8">
//             <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
//                 All Products
//             </h1>

//             <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">

//                 {AllProductsData.map((product) => (
//                     <div
//                         key={product.id}
//                         className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"

//                         onClick={() => { 
//                             setSelectedItem(product)
//                             navigate("/product-details")
//                         }}
//                     >
//                         <div className="relative">
//                             <img
//                                 src={product.thumbnail}
//                                 alt={product.title}
//                                 className="w-full h-48 object-cover"
//                                 loading="lazy"
//                             />

//                             {product.brand && (
//                                 <div className="absolute top-2 right-2 px-3 rounded-full text-sm font-semibold text-white bg-orange-400/80">
//                                     {product.brand}
//                                 </div>
//                             )}

//                         </div>

//                         <div className="p-6">
//                             <h3 className="font-semibold text-gray-900 text-lg h-20">
//                                 {product.title}
//                             </h3>

//                             <div className="flex items-center mt-2 text-sm font-bold">Category:
//                                 <span className="text-gray-600 ml-1">
//                                     {product.category}
//                                 </span>
//                             </div>

//                             <div className="flex items-center justify-between mt-4">
//                                 <span className="text-2xl font-bold text-indigo-600">
//                                     ${product.price}
//                                 </span>
//                             </div>

//                             <button
//                                 onClick={(e) => {
//                                     toastifyNotify(product)
//                                     e.stopPropagation()
//                                 }}
                                
//                                 className="w-full mt-4 contact-gradient text-white py-2 rounded-full hover:bg-indigo-700 transition hover:scale-105 cursor-pointer"
//                             >
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
