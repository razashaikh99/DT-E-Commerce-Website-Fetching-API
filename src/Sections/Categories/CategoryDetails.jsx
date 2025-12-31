import { useDispatch, useSelector } from "react-redux"
import { fetchProductsByCategory } from "../../store/action/categoryProductsAction";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { addToCart } from "../../store/action/cartAction";
import { toast } from "react-toastify";
import { selectProduct } from "../../store/action/productDetailAction";
import Button from "../../Components/Button";
import NoProduct from "../../Components/NoProduct";
import ProductCard from "../../Components/ProductCard";
import Loader from "../../Components/Loader";
import CategoryDetailHeader from "../../Components/CategoryDetailHeader";
import { ArrowLeft } from "lucide-react";

export default function CategoryDetails() {

    const { slug } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.categoryProducts);
    const { user } = useSelector( state => state.loginSlice);

    useEffect(() => {
        if (slug) {
            dispatch(fetchProductsByCategory(slug));
        }
    }, [dispatch, slug])

    if (loading) {
        return (
            <Loader
                text="Loading amazing products..."
            />
        )
    }

    const toastifyNotify = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.title} added to cart! 🛒`);
    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-30">
            {/* Header Section */}
            <CategoryDetailHeader
                length={products?.length}
                slug={slug}
            />

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto">
                {products.length === 0 ? (
                    <NoProduct />
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
                                    e.stopPropagation()
                                    {
                                        user ?
                                            toastifyNotify(product) :
                                            navigate("/login");
                                    }
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Back to Categories Button */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
                <Button
                    onClick={() => navigate(-1)}
                    text="Back to Categories"
                    className='!w-fit mx-auto px-12'
                    icon={<ArrowLeft size={18} />}
                    isBgColor="bg-white border border-gray-500"
                    isColor="text-gray-900"
                />
            </div>
        </div>
    )
}