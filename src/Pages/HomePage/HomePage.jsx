import React from 'react'
import HeroSection from '../../Sections/Home/HeroSection/HeroSection'
import CategoriesSection from '../../Sections/Home/CategoriesSection/CategoriesSection'
import FeaturedProducts from '../../Sections/Home/FeaturedProducts/FeaturedProducts'
import OfferSection from '../../Sections/Home/OfferSection/OfferSection'
import NewsletterSection from '../../Sections/Home/NewsletterSection/NewsletterSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            {/* <CategoriesSection /> */}
            <FeaturedProducts />
            <OfferSection />
            <NewsletterSection />
        </>
    )
}
