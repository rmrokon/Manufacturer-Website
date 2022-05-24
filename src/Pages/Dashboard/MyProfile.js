import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useSingleUser from '../../hooks/useSingleUser';
import Loading from '../Shared/Loading';
import UpdateProfileModal from './UpdateProfileModal';


const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [userInfoFromDb] = useSingleUser();
    const [updating, setUpdating] = useState(false);
    const { education, linkedin, city, phone } = userInfoFromDb;
    const id = userInfoFromDb?._id;


    if (loading || updating) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    {
                        user?.photoURL ? <div className="w-24 h-24 rounded-full">
                            <img src={user?.photoURL} alt={'user'} />
                        </div>
                            :
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                                    <span className="text-5xl text-white">{user?.displayName?.slice(0, 1)}</span>
                                </div>
                            </div>
                    }
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>{user?.email}</p>
                    {
                        education && <p><span className='font-bold'>Eduation:</span> {education}</p>
                    }
                    {
                        linkedin && <p><span className='font-bold'>Linkedin: </span> {linkedin}</p>
                    }
                    {
                        city && <p><span className='font-bold'>City: </span> {city}</p>
                    }
                    {
                        phone && <p><span className='font-bold'>Phone: </span> {phone}</p>
                    }

                    <div className="card-actions">
                        <label htmlFor='update-profile-modal' className="btn btn-accent text-white modal-button mr-2">Update Profile</label>
                    </div>
                </div>
                <UpdateProfileModal
                    id={id}
                    updating={updating}
                    setUpdating={setUpdating}
                ></UpdateProfileModal>
            </div>
        </div>
    );
};

export default MyProfile;