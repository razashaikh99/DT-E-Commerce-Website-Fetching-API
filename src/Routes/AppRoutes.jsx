import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage'
import ContactUsPage from '../Pages/ContactUsPage/ContactUsPage'
import AllProducts from '../Sections/Products/AllProducts'
import ProductDetails from '../Sections/Products/ProductDetails'
import Checkout from '../Sections/Products/Checkout'
import ConfirmOrder from '../Sections/Products/ConfirmOrder'

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/confirm-order" element={<ConfirmOrder />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
        </div>
    )
}
