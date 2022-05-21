import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-banner-img bg-center">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Let's put our efforts together!</h1>
                    <p className="mb-5">Smart Drilling is always ahead of it's time. We manufacture premium quality advanced carpentry tools! Explore our inventory and choose your desired item!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;