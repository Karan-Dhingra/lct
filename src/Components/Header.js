import React from 'react'
import "./Header.css"
import {
    Link
} from "react-router-dom";

export const Header = () => {
    return (
        <nav className="navbar-new">

            <div className="nav-logo-new">
                <h1>LetCodeTogether</h1>
            </div>

            <div className="nav-lists-new">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

            </div>

            <div className="nav-login-new">
                <ul>
                    <li>
                        <Link to="/">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
