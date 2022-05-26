import React from 'react';
import notFound from '../../assets/images/404 Page Not Found.png';

const NotFound = () => {
    return (
        <div className='flex justify-center mt-24'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;