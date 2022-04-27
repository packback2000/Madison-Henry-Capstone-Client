import '../Footer/Footer.css';
import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className='footer'> 
            <div className='footer-nav'>
                <ul>
                <li><Link to='/subjects/1'>Web Security</Link></li>
                <li><Link to='/subjects/2'>Cryptography</Link></li>
                <li><Link to='/subjects/5'>Binary Exploitation</Link></li>
                <li><Link to='/subjects/3'>Digital Forensics</Link></li>
                <li><Link to='/subjects/4'>Reverse Engineering</Link></li>
                <li><Link to='/subjects/6'>General</Link></li>
                </ul>
            </div>

            <div><Link to={'/about'}>About Us</Link></div>
        </section>
    )
}