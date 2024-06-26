import React from 'react'
import Listings from '../../Components/Listings/Listings'
import HeroSection from '../../Components/LandingPage/HeroSection'
import InfoSection from '../../Components/LandingPage/InfoSection'
import ProductBanner from '../../Components/LandingPage/ProductBanner'
import ColorChangingText from '../../Components/TextEffects/ColorChangingText'
import { categoriesList } from '../../Constants/CategoriesListingData'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <ColorChangingText />
            <InfoSection />
            <ProductBanner />
            <Listings categories={categoriesList} />
        </>
    )
}

export default HomePage
