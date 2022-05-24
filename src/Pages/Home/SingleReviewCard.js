import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SingleReviewCard = ({ r }) => {
    const [user, loading] = useAuthState(auth);
    const { name, rating, picture, review } = r;

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl p-2 items-center">
            <div class="avatar">
                {
                    picture ? <div class="w-12 h-12 rounded-full">
                        <img src={picture} alt={'user'} />
                    </div>
                        :
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                                <span class="text-s text-white">{user?.displayName?.slice(0, 1)}</span>
                            </div>
                        </div>
                }
            </div>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='flex items-center'>{rating} <span><StarIcon className='w-5 h-5 text-orange-400'></StarIcon></span></p>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default SingleReviewCard;