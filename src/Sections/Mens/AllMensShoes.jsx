import React from 'react'

export default function AllMensShoes() {

    const mensShoesData = [
        {
            id: 1,
            name: 'Casual Streetwear Loafers',
            price: 2999,
            oldPrice: 3499,
            rating: 4.2,
            image:
                'https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=1171&auto=format&fit=crop',
            alt: 'Casual brown loafers with soft leather and comfortable sole',
            badge: 'Sale',
        },
        {
            id: 2,
            name: 'Trailblazer Hiking Boots',
            price: 6999,
            oldPrice: null,
            rating: 4.7,
            image:
                'https://plus.unsplash.com/premium_photo-1737582995174-63f640aac617?q=80&w=1170&auto=format&fit=crop',
            alt: 'Durable hiking boots with rugged sole and waterproof material',
            badge: 'New',
        },
        {
            id: 3,
            name: 'Urban Classic Sneakers',
            price: 3499,
            oldPrice: 4999,
            rating: 4.5,
            image:
                'https://images.unsplash.com/photo-1698611028521-4c284ca88b11?q=80&w=687&auto=format&fit=crop',
            alt: 'Premium white leather sneakers with blue accent details',
            badge: 'Sale',
        },
        {
            id: 4,
            name: 'Executive Formal Shoes',
            price: 5999,
            oldPrice: null,
            rating: 5.0,
            image:
                'https://images.unsplash.com/photo-1664505504065-31f8937d2261?q=80&w=1333&auto=format&fit=crop',
            alt: 'Elegant black polished formal shoes',
            badge: null,
        },
        {
            id: 5,
            name: 'Performance Runner Pro',
            price: 4299,
            oldPrice: null,
            rating: 4.0,
            image:
                'https://plus.unsplash.com/premium_photo-1661293833437-47e8ec0719a0?q=80&w=1170&auto=format&fit=crop',
            alt: 'Red and black performance running shoes',
            badge: null,
        },
        {
            id: 6,
            name: 'Vintage Retro Sneakers',
            price: 3799,
            oldPrice: 4499,
            rating: 4.3,
            image:
                'https://images.unsplash.com/photo-1584735175097-719d848f8449?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Retro style sneakers with classic design',
            badge: 'Sale',
        },
        {
            id: 7,
            name: 'Mountain Grip Trek Shoes',
            price: 7599,
            oldPrice: null,
            rating: 4.8,
            image:
                'https://images.unsplash.com/photo-1634044439395-3251148b9b2c?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'High-grip trekking shoes for mountains',
            badge: 'New',
        },
        {
            id: 8,
            name: 'Elite Leather Derby',
            price: 6499,
            oldPrice: 6999,
            rating: 4.6,
            image:
                'https://images.unsplash.com/photo-1614732145188-bb8b5e12968c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Premium leather derby formal shoes',
            badge: 'Sale',
        },
        {
            id: 9,
            name: 'SportFlex Lightweight',
            price: 2999,
            oldPrice: null,
            rating: 3.9,
            image:
                'https://hips.hearstapps.com/hmg-prod/images/run-lightweight-running-shoes-682b51023eccc.jpg',
            alt: 'Lightweight running shoes with breathable mesh',
            badge: null,
        },
        {
            id: 10,
            name: 'Classic Oxford Premium',
            price: 7199,
            oldPrice: null,
            rating: 4.9,
            image:
                'https://i.pinimg.com/736x/4b/db/1b/4bdb1be30e261ec1873498b2bddc42d1.jpg',
            alt: 'High-quality formal oxford shoes',
            badge: 'New',
        },
        {
            id: 11,
            name: 'Street Runner X-Series',
            price: 3299,
            oldPrice: 3999,
            rating: 4.1,
            image:
                'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1000&auto=format&fit=crop',
            alt: 'Trendy street running sneakers',
            badge: 'Sale',
        },
        {
            id: 12,
            name: 'UltraSoft Foam Slides',
            price: 1999,
            oldPrice: null,
            rating: 4.4,
            image:
                'https://sc04.alicdn.com/kf/Hd9a19bbdcbaf4da38e0421f9ef91677ad.jpg',
            alt: 'Comfortable soft foam slides for casual wear',
            badge: null,
        },
    ];


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
        <div>
            <div className="bg-gray-50 min-h-screen py-30 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                    Men's Shoes Collection
                </h1>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {mensShoesData.map((shoe) => (
                        <div
                            key={shoe.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative">
                                <img
                                    src={shoe.image}
                                    alt={shoe.alt}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                                {shoe.badge && (
                                    <div
                                        className={`absolute top-3 right-3 px-2 py-1 rounded text-sm font-semibold text-white ${shoe.badge === 'Sale'
                                            ? 'bg-red-500'
                                            : shoe.badge === 'New'
                                                ? 'bg-green-500'
                                                : 'bg-indigo-600'
                                            }`}
                                    >
                                        {shoe.badge}
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-gray-900 text-lg">{shoe.name}</h3>
                                <div className="flex items-center mt-2">
                                    <StarRating rating={shoe.rating} />
                                    <span className="text-sm text-gray-600 ml-2">({shoe.rating.toFixed(1)})</span>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-2xl font-bold text-indigo-600">${shoe.price.toLocaleString()}</span>
                                    {shoe.oldPrice && (
                                        <span className="text-sm text-gray-500 line-through">${shoe.oldPrice.toLocaleString()}</span>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    className="w-full mt-4 contact-gradient text-white py-2 rounded-lg hover:bg-indigo-700 transition hover:scale-105 cursor-pointer"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
