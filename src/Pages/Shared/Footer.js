import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='bg-footer-bg bg-center bg-no-repeat'>
            <footer className="footer p-10 text-accent justify-items-center">
                <div>
                    <span className="footer-title">Services</span>
                    <ul>
                        <li><Link to={'/appoinment'}>Appoinment</Link></li>
                        <li><Link to={'/reviews'}>Reviews</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <ul>
                        <li><Link to={'/appoinment'}>Appoinment</Link></li>
                        <li><Link to={'/reviews'}>Reviews</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <ul>
                        <li><Link to={'/appoinment'}>Appoinment</Link></li>
                        <li><Link to={'/reviews'}>Reviews</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                </div>
            </footer>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
            </div>
        </section>
    );
};

export default Footer;