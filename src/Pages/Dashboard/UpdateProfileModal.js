import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useSingleUser from '../../hooks/useSingleUser';
import axiosPrivate from '../../interceptor/axiosPrivate';
import Loading from '../Shared/Loading';


const UpdateProfileModal = ({ id, updating, setUpdating }) => {
    const [user, loading] = useAuthState(auth);
    const [userInfoFromDb] = useSingleUser();
    const { education, linkedin, city, phone } = userInfoFromDb;
    const navigate = useNavigate();

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setUpdating(true);
        const userInfo = {
            name: user?.displayName || null,
            education: e.target.education.value || null,
            linkedin: e.target.linkedin.value || null,
            city: e.target.city.value || null,
            phone: e.target.phone.value || null,
        }

        console.log(userInfo);


        const url = `https://smart-drilling.herokuapp.com/updateAUser/${id}`;
        const { data } = await axiosPrivate.put(url, userInfo).then(res => {
            // res.json()
            if (res?.data?.modifiedCount === 1) {
                window.location.reload();
            }
        });

    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <input type="checkbox" id="update-profile-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="update-profile-modal" className="btn btn-accent btn-sm btn-circle absolute right-2 top-2 text-white">✕</label>
                    <h3 className="font-bold text-lg">Update Profile</h3>
                    <form action="" className='w-full' onSubmit={handleProfileUpdate}>
                        <div className="form-control my-2">
                            <label className="input-group">
                                <span>Education</span>
                                <input type="text" placeholder="ex: BSc. , MSc. etc." className="input input-bordered w-full" name='education' defaultValue={education} />
                            </label>
                        </div>
                        <div className="form-control mb-2">
                            <label className="input-group">
                                <span>Linkedin</span>
                                <input type="text" placeholder="@your-username" className="input input-bordered w-full" name='linkedin' defaultValue={linkedin} />
                            </label>
                        </div>
                        <div className="form-control mb-2">
                            <label className="input-group">
                                <span>City</span>
                                <input type="text" placeholder="City you live in" className="input input-bordered w-full" name='city' defaultValue={city} />
                            </label>
                        </div>
                        <div className="form-control mb-2">
                            <label className="input-group">
                                <span>Phone</span>
                                <input type="text" placeholder="Your Phone Number" className="input input-bordered w-full" name='phone' defaultValue={phone} />
                            </label>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="update-profile-modal" className="btn btn-accent text-white"><input type="submit" value="Update" /></label>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfileModal;