import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../store/action/productAction';
import { selectProduct } from '../../store/action/productDetailAction';
import { addToCart } from '../../store/action/cartAction';
import ProductCard from '../../Components/ProductCard';
import NoProduct from '../../Components/NoProduct';
import Loader from '../../Components/Loader';
import ProductHeader from '../../Components/ProductHeader';

export default function AllProducts() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { products, loading } = useSelector(state => state.products);
    const { user } = useSelector( state => state.loginSlice);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (loading) {
        return <Loader
            text="Loading amazing products..."
        />
    }

    const toastifyNotify = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.title} added to cart! 🛒`);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-30">
            {/* Header Section */}
            <ProductHeader 
                heading="All Products"
                para="Browse through our complete collection of premium products"
                length={products?.length}
            />

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto">
                {products?.length === 0 ? (
                    <NoProduct />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
                        {products?.map((product) => (
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
                                    e.stopPropagation()
                                    {user ?
                                        toastifyNotify(product) :
                                        navigate("/login");
                                    }
                                }}
                            />
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
