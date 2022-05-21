import React from 'react';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';
import Banner from './Banner';
import Inventory from './Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Footer></Footer>
        </div>
    );
};

export default Home;