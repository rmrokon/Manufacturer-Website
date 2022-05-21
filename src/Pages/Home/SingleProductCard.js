import React from 'react';

const SingleProductCard = ({ product }) => {
    const { name, description, price, quantity, min_order, img } = product;
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl p-2">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div>
                    <p>Price: ${price}</p>
                    <p>Stock Available: {quantity}</p>
                    <p>Minimum Order: {min_order}</p>
                </div>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary text-white">Place an Order</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;