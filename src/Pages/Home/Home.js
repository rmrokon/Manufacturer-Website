import React from 'react';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Inventory from './Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;