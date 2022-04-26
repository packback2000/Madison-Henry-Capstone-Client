import '../Header/Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <section className="header">


            <Link to={`/subjects`}>
            <h1>CanHack</h1>
            </Link>
            
            <form>
                <input
                    placeholder='Search...'
                    type='text'
                />
            </form>
            <p>Login</p>

        </section>
)}