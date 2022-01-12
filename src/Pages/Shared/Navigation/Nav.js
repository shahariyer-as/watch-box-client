import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../../image/logo.png';


import useAuth from '../../Login/Login/Firebase/Hooks/useFirebase';
const Nav = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <div className='mega-nav pb-3'>
                <nav>
                    <div className="wrapper animate__backInDown">
                        <div className="logo">
                            <Link to="/home">
                                <img src={logo} alt="" width={90} /></Link>
                        </div>
                        <input type="radio" name="slider" id="menu-btn" />
                        <input type="radio" name="slider" id="close-btn" />
                        <ul className="nav-links">
                            <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/trees">Products</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {
                                user?.email ?

                                    <li>
                                        <li><Link to="" onClick={logout}>LogOut</Link></li>

                                    </li>

                                    :
                                    <li><Link to="/login">Login</Link></li>
                            }
                            <span className="logout-img px-3"><img className="logout-img" src={user.photoURL} alt="" /></span>

                        </ul>
                        <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                    </div>
                </nav>
            </div>

        </div >
    );
};

export default Nav;