import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const SingleReviewCard = ({ r }) => {
    const { name, rating, picture, review } = r;
    return (
        <div class="card card-side bg-base-100 shadow-xl p-2">
            <figure><img className='rounded-full' src={picture} alt="User" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='flex items-center'>{rating} <span><StarIcon className='w-5 h-5 text-orange-400'></StarIcon></span></p>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default SingleReviewCard;