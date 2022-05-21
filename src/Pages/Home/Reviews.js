import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReviewCard from './SingleReviewCard';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h3 className='text-3xl text-primary text-center font-bold'>Reviews</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
                {
                    reviews.map(r => <SingleReviewCard key={r._id} r={r}></SingleReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;