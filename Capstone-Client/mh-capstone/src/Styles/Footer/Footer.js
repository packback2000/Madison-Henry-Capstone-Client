
import '../Footer/Footer.css';
import React from "react";
import AboutPage from '../../Pages/AboutPage';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className='footer'> 
            <h1>Footer</h1>

            <div className='footer-nav'>
                <ul>
                <li>Web Security</li>
                <li>Cryptography</li>
                <li>Binary Exploitation</li>
                <li>Digital Forensics</li>
                <li>Reverse Engineering</li>
                <li>General</li>
                </ul>
            </div>

            <div><Link to={'/about'}>About Us</Link></div>
        </section>
    )
}