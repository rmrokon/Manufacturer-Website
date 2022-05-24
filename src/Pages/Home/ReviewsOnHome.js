import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import SingleReviewCard from './SingleReviewCard';

const ReviewsOnHome = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h3 className='text-3xl text-primary text-center font-bold'>Reviews</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
                {
                    reviews.slice(0, 4).map(r => <SingleReviewCard key={r._id} r={r}></SingleReviewCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to={'/reviews'}><button className='btn btn-primary text-white'>Read All Reviews</button></Link>
            </div>
        </div>
    );
};

export default ReviewsOnHome;