import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../../interceptor/axiosPrivate';
import Loading from '../Shared/Loading';

const AddAReview = () => {
    const [user, loading] = useAuthState(auth);
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    let data;


    const handleAddReview = (e) => {
        e.preventDefault();
        const clientReview = {
            name: user?.displayName,
            picture: user?.photoURL,
            rating,
            review: e.target.review.value
        }

        axiosPrivate.post("https://smart-drilling.herokuapp.com/addAReview", clientReview).then(res => res.json());
    }



    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl text-center text-accent font-bold mb-12'>Add a review</h3>
            <p>Rate us out of 5:</p>
            <form onSubmit={handleAddReview}>
                <div className="rating my-5">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" onClick={() => setRating(1)} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" onClick={() => setRating(2)} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" onClick={() => setRating(3)} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" onClick={() => setRating(4)} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" onClick={() => setRating(5)} />
                </div>
                <div>
                    <textarea className="textarea textarea-warning mb-5" placeholder="Write you review here" name='review' style={{ resize: "none", width: "40rem", height: "10rem" }}></textarea>
                </div>
                <input className='btn btn-primary text-white' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddAReview;