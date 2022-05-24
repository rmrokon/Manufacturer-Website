import React from 'react';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import FlashSale from './FlashSale';
import Inventory from './Inventory';
import ReviewsOnHome from './ReviewsOnHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <FlashSale></FlashSale> */}
            <Inventory></Inventory>
            <BusinessSummary></BusinessSummary>
            <ReviewsOnHome></ReviewsOnHome>
            <Footer></Footer>
        </div>
    );
};

export default Home;