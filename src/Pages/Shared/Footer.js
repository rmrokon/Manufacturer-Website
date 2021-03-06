import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Footer = () => {
    const [user] = useAuthState(auth);
    return (
        <section className='bg-footer-bg bg-center bg-no-repeat'>
            <footer className="footer p-10 text-accent justify-items-center">
                <div>
                    <span className="footer-title">Useful Links</span>
                    <ul>
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/reviews'}>Reviews</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <ul>
                        <li>Cecilia Chapman</li>
                        <li>711-2880 Nulla St.</li>
                        <li>Mankato Mississippi 96522</li>
                        <li>(257) 563-7401</li>
                    </ul>
                </div>
                <div>
                    <span className="footer-title">Others</span>
                    <ul>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                        <li><Link to={'/reviews'}>Reviews</Link></li>
                        <li><Link to={'/portfolio'}>My Portfolio</Link></li>
                        {user && <li><Link to={'/login'}>Login</Link></li>}
                    </ul>
                </div>
            </footer>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved by Smart Drilling</p>
            </div>
        </section>
    );
};

export default Footer;