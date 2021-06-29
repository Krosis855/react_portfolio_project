import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ReactDom from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Dogs N' Cats <i class="fa fa-angellist" aria-hidden="true"></i>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;