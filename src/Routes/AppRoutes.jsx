import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage'
import ContactUsPage from '../Pages/ContactUsPage/ContactUsPage'
import WomensShoes from '../Pages/WomensShoes/WomensShoes'
import MensShoes from '../Pages/MensShoes/MensShoes'

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mens-shoes" element={<MensShoes />} />
                <Route path="/womens-shoes" element={<WomensShoes />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
        </div>
    )
}
