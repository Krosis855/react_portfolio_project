import React, {useState} from 'react';
import { Button } from './ButtonComponents';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Dogs N' Cats
                        <i class="fa fa-angellist" aria-hidden="true"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"} ></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home 
                                <i className="fa fa-home fa-lg"></i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                About 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/dogs" className="nav-links" onClick={closeMobileMenu}>
                                Dogs 
                                {/*<img src="assets/images/dogicon3.jpeg" />*/}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/cats" className="nav-links" onClick={closeMobileMenu}>
                                Cats 
                                {/*<img src="/assets/images/catface.jpeg" />*/}
                            </Link>
                        </li>
                        <li className='nav-item-mobile'>
                            <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Log In
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">LOG IN</Button> }    
                </div>
            </nav>
        </>
    )
}

export default Navbar;