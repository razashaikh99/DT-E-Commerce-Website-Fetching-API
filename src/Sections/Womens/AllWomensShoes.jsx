import React from 'react'

export default function AllWomensShoes() {

    const womensShoesData = [
        {
            id: 1,
            name: 'Elegant Heels Classic',
            price: 4599,
            oldPrice: 5999,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop',
            alt: 'Elegant black high heels with pointed toe and slim heel',
            badge: 'Sale',
            category: 'womens'
        },
        {
            id: 2,
            name: 'Comfort Ballet Flats',
            price: 2999,
            oldPrice: null,
            rating: 4.3,
            image: 'https://images.unsplash.com/photo-1757598076944-530a7bb81d79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Soft leather ballet flats in nude color with comfortable sole',
            badge: 'New',
            category: 'womens'
        },
        {
            id: 3,
            name: 'Athletic Running Shoes',
            price: 5499,
            oldPrice: null,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop',
            alt: 'Pink and white running shoes with mesh upper and cushioned sole',
            badge: null,
            category: 'womens'
        },
        {
            id: 4,
            name: 'Casual Platform Sneakers',
            price: 3999,
            oldPrice: 4999,
            rating: 4.4,
            image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop',
            alt: 'White platform sneakers with chunky sole and leather accents',
            badge: 'Sale',
            category: 'womens'
        },
        {
            id: 5,
            name: 'Ankle Boots Fashion',
            price: 6499,
            oldPrice: 7999,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop',
            alt: 'Brown leather ankle boots with block heel and zip closure',
            badge: 'Sale',
            category: 'womens'
        },
        {
            id: 6,
            name: 'Wedges Summer Style',
            price: 3799,
            oldPrice: null,
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1738690347694-ba8e97dea392?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Beige wedges with braided detail and comfortable platform',
            badge: 'New',
            category: 'womens'
        },
        {
            id: 7,
            name: 'Sporty Walking Shoes',
            price: 4299,
            oldPrice: 5299,
            rating: 4.2,
            image: 'https://plus.unsplash.com/premium_photo-1663133703640-a8304731f8b2?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Gray and purple walking shoes with breathable mesh and cushioning',
            badge: 'Sale',
            category: 'womens'
        },
        {
            id: 8,
            name: 'Party Stilettos Gold',
            price: 6999,
            oldPrice: null,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1712193040438-1bcc495e1a4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Golden stilettos with glitter finish and slim high heel',
            badge: 'Luxury',
            category: 'womens'
        },
        {
            id: 9,
            name: 'Comfort Slip-on Loafers',
            price: 3299,
            oldPrice: null,
            rating: 4.1,
            image: 'https://plus.unsplash.com/premium_photo-1760574612711-ad77653e08ca?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Black slip-on loafers with tassel detail and soft leather',
            badge: null,
            category: 'womens'
        },
        {
            id: 10,
            name: 'Winter Boots Warm',
            price: 7999,
            oldPrice: 8999,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1704716416279-a78f2af17268?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Faux fur lined winter boots with waterproof exterior',
            badge: 'Winter',
            category: 'womens'
        },
        {
            id: 11,
            name: 'Office Pumps Professional',
            price: 4899,
            oldPrice: null,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1618274158630-bc47a614b3a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Nude colored office pumps with medium heel and pointed toe',
            badge: 'Professional',
            category: 'womens'
        },
        {
            id: 12,
            name: 'Casual Espadrilles Summer',
            price: 2599,
            oldPrice: 3499,
            rating: 4.0,
            image: 'https://images.unsplash.com/photo-1721924335651-378eece1b7d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Canvas espadrilles with jute sole in striped pattern',
            badge: 'Summer',
            category: 'womens'
        }
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
                    Women's Shoes Collection
                </h1>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {womensShoesData.map((shoe) => (
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
