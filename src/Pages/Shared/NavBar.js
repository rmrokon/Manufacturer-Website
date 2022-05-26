import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';

const NavBar = () => {
    const [user, loading] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    if (loading) {
        return <Loading></Loading>
    }

    // if (user && !user.displayName) {
    //     return <Loading></Loading>
    // }



    const menuItems = <>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/reviews'}>Reviews</Link></li>
        <li><Link to={'/blogs'}>Blogs</Link></li>
        {!user && <li><Link to={'/register'}>Register</Link></li>}
        <li><Link to={'/contact'}>Contact Us</Link></li>
        {user && <li><Link to={'/dashboard'}>Dashboard</Link></li>}
        <li>{user ? <button onClick={logout}>Logout</button> : <Link to={'/login'}>Login</Link>}</li>
        {user && <>
            <li><Link to={'/dashboard/myProfile'}>

                {
                    <>
                        {user?.photoURL ? <div className="avatar flex items-center">
                            <div className="w-8 rounded mr-2">
                                <img src={user?.photoURL} alt="user Avatar" />
                            </div>
                            {user?.displayName}
                        </div> : <div class="avatar placeholder flex items-center">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-8 mr-2">
                                <span class="text-s text-white">{user?.displayName?.slice(0, 1)}</span>
                            </div>
                            <h3>{user?.displayName}</h3>
                        </div>}
                    </>

                }
            </Link>
            </li>
        </>
        }
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='/home' className="btn bg-primary border-0 text-white normal-case text-xl rounded">Smart Drilling</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {
                user && <div className="navbar-end">
                    <label tabIndex="1" htmlFor="dboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            }
        </div>
    );
};

export default NavBar;