import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage'
import ContactUsPage from '../Pages/ContactUsPage/ContactUsPage'
import AllProducts from '../Sections/Products/AllProducts'
import ProductDetails from '../Sections/Products/ProductDetails'
import Checkout from '../Sections/Products/Checkout'
import ConfirmOrder from '../Sections/Products/ConfirmOrder'
import Category from '../Pages/Categories/Category'
import CategoryDetails from '../Sections/Categories/CategoryDetails'
import Login from '../Pages/Auth/Login'
import UserProfile from '../Pages/Auth/UserProfile'

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details" element={<ProductDetails />} />
                <Route path="/categories" element={<Category />} />
                <Route path="/categories/:slug" element={<CategoryDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/confirm-order" element={<ConfirmOrder />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </div>
    )
}
