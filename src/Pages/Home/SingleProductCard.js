import React from 'react';
import { Link } from 'react-router-dom';

const SingleProductCard = ({ product }) => {
    const { name, description, price, quantity, min_order, img, _id } = product;
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl p-2">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div>
                    <p className='font-bold'>Price: ${price}</p>
                    <p><span className='text-green-600'>Stock Available:</span> {quantity} units</p>
                    <p>Minimum Order: {min_order} units</p>
                </div>
                <div class="card-actions justify-end">
                    <Link to={`/purchase/${_id}`}><button class="btn btn-primary text-white">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;