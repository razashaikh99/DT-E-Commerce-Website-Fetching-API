import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';

export default function AllProducts() {

    const [AllProductsData, setAllProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setAllProductsData(data.products);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    if (loading) {
        // return <h2 className="text-center pt-80 pb-90 text-4xl">Loading...</h2>;
        return <div className='flex justify-center'>
            <div className="my-50 w-12 h-12 rounded-full border-6 animate-spin border-blue-500 border-t-transparent"></div>
        </div>
    }

    const toastifyNotify = (product) => {
        addToCart(product)
        toast.success(`${product.title} added to cart!`)
    }

    return (
        <div className="bg-gray-50 min-h-screen py-30 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                All Products
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">

                {AllProductsData.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                            />

                            {product.brand && (
                                <div className="absolute top-2 right-2 px-3 rounded-full text-sm font-semibold text-white bg-orange-400/80">
                                    {product.brand}
                                </div>
                            )}

                        </div>

                        <div className="p-6">
                            <h3 className="font-semibold text-gray-900 text-lg h-20">
                                {product.title}
                            </h3>

                            <div className="flex items-center mt-2 text-sm font-bold">Category:
                                <span className="text-gray-600 ml-1">
                                    {product.category}
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-2xl font-bold text-indigo-600">
                                    ${product.price}
                                </span>
                            </div>

                            <button
                                onClick={() => toastifyNotify(product)}
                                className="w-full mt-4 contact-gradient text-white py-2 rounded-full hover:bg-indigo-700 transition hover:scale-105 cursor-pointer"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
