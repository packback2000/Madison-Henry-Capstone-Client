
import '../Footer/Footer.css';
import React from "react";

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
        </section>
    )
}