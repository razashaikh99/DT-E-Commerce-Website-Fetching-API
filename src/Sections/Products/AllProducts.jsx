import { useEffect, useState } from 'react';

export default function AllProducts() {

    const [AllProductsData, setAllProductsData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const StarRating = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="flex text-yellow-400">
                {[...Array(fullStars)].map((_, i) => (
                    <i key={`full-${i}`} className="fas fa-star"></i>
                ))}
                {halfStar && <i className="fas fa-star-half-alt"></i>}
                {[...Array(emptyStars)].map((_, i) => (
                    <i key={`empty-${i}`} className="far fa-star"></i>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen py-30 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                All Products
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

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
                                <div className="absolute top-3 right-3 px-2 py-1 rounded text-sm font-semibold text-white bg-indigo-600">
                                    {product.brand}
                                </div>
                            )}

                        </div>

                        <div className="p-6">
                            <h3 className="font-semibold text-gray-900 text-lg">
                                {product.title}
                            </h3>

                            <div className="flex items-center mt-2">
                                <StarRating rating={product.rating} />
                                <span className="text-sm text-gray-600 ml-2">
                                    ({product.rating})
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-2xl font-bold text-indigo-600">
                                    ${product.price}
                                </span>
                            </div>

                            <button
                                className="w-full mt-4 contact-gradient text-white py-2 rounded-lg hover:bg-indigo-700 transition hover:scale-105 cursor-pointer"
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
