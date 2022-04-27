import '../Header/Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../Assets/Arrow.png'

export default function Header() {

    function Previous() {
        window.history.back()
    }
    return(
        <section className="header">

            <p onClick={Previous}>Back</p>

            <Link to={`/subjects`}>
            <h1>Cyber Questions</h1>
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