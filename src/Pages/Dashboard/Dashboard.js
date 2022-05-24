import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
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
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/myorders'}>My Orders</Link></li>
                        <li><Link to={'/dashboard/myProfile'}>My Profile</Link></li>
                        <li><Link to={'/dashboard/addAReview'}>Add a Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;