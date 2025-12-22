import { useDispatch, useSelector } from "react-redux"
import { fetchProductsByCategory } from "../../store/action/categoryProductsAction";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { addToCart } from "../../store/action/cartAction";
import { toast } from "react-toastify";
import { selectProduct } from "../../store/action/productDetailAction";

export default function CategoryDetails() {

    const { slug } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.categoryProducts);

    useEffect(() => {
        if (slug) {
            dispatch(fetchProductsByCategory(slug));
        }
    }, [dispatch, slug])

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full border-[6px] border-blue-500 border-t-transparent animate-spin mb-6"></div>
                    <p className="text-gray-600 text-lg font-medium">Loading amazing products...</p>
                </div>
            </div>
        )
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
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 capitalize tracking-tight">
                        {slug.replace(/-/g, " ")}
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover premium products in this category
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
                        <p className="text-gray-500">Try another category or check back later</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product?.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
                                onClick={() => {
                                    dispatch(selectProduct(product))
                                    navigate("/product-details")
                                }}
                            >
                                {/* Product Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product?.thumbnail}
                                        alt={product?.title}
                                        className="w-full h-62 object-cover group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />

                                    {/* Quick View Overlay */}
                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-bold text-gray-900 text-lg line-clamp-2 flex-1 mr-3">
                                            {product?.title}
                                        </h3>
                                        <div className="flex items-center text-amber-400">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                            <span className="ml-1 font-semibold">{product?.rating?.toFixed(1) || '4.5'}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        {product?.brand && (
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                <span className="text-sm">Brand: <span className="font-medium">{product.brand}</span></span>
                                            </div>
                                        )}

                                        {product?.warrantyInformation && (
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                                <span className="text-sm">Warranty: <span className="font-medium">{product.warrantyInformation}</span></span>
                                            </div>
                                        )}

                                        {product?.availabilityStatus && (
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-sm">Status: <span className={`font-medium ${product.availabilityStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                                                    {product.availabilityStatus}
                                                </span></span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <span className="text-3xl font-bold text-gray-900">
                                                ${product?.price}
                                            </span>
                                        </div>
                                        
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={(e) => {
                                                toastifyNotify(product)
                                                e.stopPropagation()
                                            }}
                                            className="flex-1 contact-gradient text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            Add to Cart
                                        </button>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                dispatch(selectProduct(product))
                                                navigate("/product-details")
                                            }}
                                            className="px-3 py-3 border-2 border-blue-600 text-blue-600 cursor-pointer font-semibold rounded-full hover:bg-blue-50 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Back to Categories Button */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center justify-center gap-2 mx-auto px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Categories
                </button>
            </div>
        </div>
    )
}