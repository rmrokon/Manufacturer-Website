import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center w-58">

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-40 bg-gray-100 text-base-content rounded-lg">
                        {admin && <>
                            <li><Link to={'/dashboard/myProfile'}>My Profile</Link></li>
                            <li><Link to={'/dashboard/allUser'}>Manage Users</Link></li>
                            <li><Link to={'/dashboard/allUser'}>Manage All Orders</Link></li>
                            <li><Link to={'/dashboard/allUser'}>Add A Product</Link></li>
                            <li><Link to={'/dashboard/allUser'}>Manage Products</Link></li>
                        </>}
                        {!admin && <><li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                            <li><Link to={'/dashboard/addAReview'}>Add a Review</Link></li>
                        </>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;