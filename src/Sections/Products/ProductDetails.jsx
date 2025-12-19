import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../store/action/cartAction';

export default function ProductDetails() {

    const dispatch = useDispatch();

    const selectedItem = useSelector(state => state.selectedProduct?.selectedItem)
    // const cartItems = useSelector(state => state.cart.cartItems); 

    if (!selectedItem) return <p className="py-60 text-center text-red-600/50 text-4xl font-extrabold">No Product Selected!</p>

    const toastifyNotify = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.title} added to cart!`)
    }

    return (
        <section className="bg-gray-50 min-h-screen pt-40 pb-25">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div key={selectedItem?.id} className="grid md:grid-cols-2 gap-12 items-start">

                    <div className="flex justify-center md:justify-start" >
                        <img
                            src={selectedItem?.images}
                            alt="Product"
                            className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                        />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-gray-900">
                            {selectedItem?.title}
                        </h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-3xl font-bold text-indigo-600">${selectedItem?.price} </span>
                        </div>
                        <hr />
                        <p className="text-gray-700">
                            {selectedItem?.description}
                        </p>
                        <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Category: </span>
                            {selectedItem?.category}
                        </div>
                        <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Rating: </span>
                            {selectedItem?.rating}
                        </div>
                        <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Brand:  </span>
                            {!selectedItem.brand ? "Null" : selectedItem?.brand}
                        </div>
                        <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Stock Item: </span>
                            {selectedItem?.stock}
                        </div>
                        <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Available Stock: </span>
                            {selectedItem?.availabilityStatus}
                        </div>
                        <div className="text-indigo-600 font-semibold"><span className="text-gray-500">Return Policy: </span>
                            {selectedItem?.returnPolicy}
                        </div>
                        <button onClick={() => toastifyNotify(selectedItem)}
                            className="w-60 mt-4 contact-gradient text-white py-3 rounded-full hover:bg-indigo-700 transition hover:scale-105 cursor-pointer"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section >
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
