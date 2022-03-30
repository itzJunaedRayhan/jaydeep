import React from 'react';
import './Menubar.css'
import profile from '../../../images/profile.jpg'
import menuIcon from '../../../images/menu-bar.png'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../../App';
const Menubar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const closeNav = () => {
        document.getElementById('menu').style.visibility = 'hidden';
    }
    const openNav = () => {
        document.getElementById('menu').style.visibility = 'visible'
    }
    return (
        <>
            <div className="navbar-wrapper">
                <div className="row container-fluid hamburger-section">
                    <div className="hamburger-icon">
                        <a href="javascript:void(0)" onClick={openNav} class="openBtn">
                            <img src={menuIcon} alt="" />
                        </a>
                    </div>
                    <div className="hamburger-profile">
                        <Link to="/admin/addService">
                            <img src={profile} alt="" className="profile" />
                        </Link>
                    </div>
                </div>

                <div className="brand">
                    <a href="">
                        <Link to="/home">Let's Travel</Link>
                    </a>
                </div>
                <div className="menu-items ml-auto">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/servicesSection">Services</Link></li>
                        <li><Link to="/aboutUs">About Us</Link></li>
                        <li><Link to="/contactUs">Contact Us</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><Link to="/admin/addService">Admin</Link></li>
                        <li><Link to="/login" className="login">Login</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mobile-menu" id="menu" style={{ visibility: 'hidden' }}>
                <a href="javascript:void(0)" onClick={closeNav} class="closeBtn"><span>&times;</span></a>
                <ul>
                    <li onClick={closeNav}><Link to="/home">Home</Link></li>
                    <li onClick={closeNav}><Link to="/servicesSection">Service</Link></li>
                    <li onClick={closeNav}><Link to="/aboutUs">About Us</Link></li>
                    <li onClick={closeNav}><Link to="/contactUs">Contact Us</Link> </li>
                    <li onClick={closeNav}><Link to="/reviews">Reviews</Link></li>
                    <li onClick={closeNav}><Link to="/admin/addService">Admin</Link></li>
                    <li onClick={closeNav}><Link to="/login" className="login">Login</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Menubar;