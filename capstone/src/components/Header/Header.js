import React from "react";
import { Link } from "react-router-dom";
import '../Header/Header.css'

export default function Header() {
    return(
        <section className="header">
            <Link to={'/subjects'}>
                <p>Header</p>
            </Link>
        </section>
    )
}