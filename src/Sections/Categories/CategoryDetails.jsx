import { useDispatch, useSelector } from "react-redux"
import { fetchProductsByCategory } from "../../store/action/categoryProductsAction";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addToCart } from "../../store/action/cartAction";
import { toast } from "react-toastify";


export default function CategoryDetails() {

    const { slug } = useParams();

    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.categoryProducts);

    useEffect(() => {
        if (slug) {
            dispatch(fetchProductsByCategory(slug));
        }
    }, [dispatch, slug])

    if (loading) {
        return <div className='flex justify-center'>
            <div className="my-50 w-12 h-12 rounded-full border-6 animate-spin border-blue-500 border-t-transparent"></div>
        </div>
    }

    const toastifyNotify = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.title} add to cart!`);
    }

    return (

        <div className="bg-gray-50 min-h-screen py-30 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                All Products
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">

                {products.map((product) => (
                    <div
                        key={product?.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"

                        onClick={() => {
                            dispatch(selectProduct(product))
                            navigate("/product-details")
                        }}
                    >
                        <div className="relative">
                            <img
                                src={product?.thumbnail}
                                alt={product?.title}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                            />

                            {/* {product?.brand && (
                                <div className="absolute top-2 right-2 px-3 rounded-full text-sm font-semibold text-white bg-blue-600/60">
                                    {product?.brand ? product?.brand : product?.title}
                                </div>
                            )} */}

                        </div>

                        <div className="p-6">
                            <h3 className="font-semibold text-gray-900 text-lg h-20">
                                {product?.title}
                            </h3>

                            <div className="flex items-center mt-2 text-sm font-bold">Brand:
                                <span className="text-gray-600 ml-1">
                                    {product?.brand}
                                </span>
                            </div>

                            <div className="flex items-center mt-2 text-sm font-bold">Warranty:
                                <span className="text-gray-600 ml-1">
                                    {product?.warrantyInformation}
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-2xl font-bold text-indigo-600">
                                    ${product?.price}
                                </span>
                            </div>

                            <button
                                onClick={(e) => {
                                    toastifyNotify(product)
                                    e.stopPropagation()
                                }}

                                className="w-full mt-4 contact-gradient text-white py-2 rounded-full hover:bg-indigo-700 transition hover:scale-105 cursor-pointer"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        // <div className="bg-gray-50 min-h-screen py-30 px-4 sm:px-6 lg:px-8">
        //     <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        //         {slug.replace("-", " ")} Products
        //     </h1>

        //     <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        //         {products.map(product => (
        //             <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        //                 <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
        //                 <div className="p-6">
        //                     <h3 className="font-semibold text-gray-900 text-lg h-20">{product.title}</h3>
        //                     <div className="text-2xl font-bold text-indigo-600">${product.price}</div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>

        // </div>
    )
}
