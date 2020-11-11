import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import './Navbar.css'
const Navbar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    return (
        <section className="navbar-section">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <img style={{height:'50px',marginLeft:'80px'}} src={logo} alt=""/>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-3">
                            <Link class="nav-link" href="/home">Home</Link>
                        </li>
                        <li class="nav-item mr-3">
                            <Link class="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item mr-3">
                            <Link class="nav-link" href="#">Our Portfolio</Link>
                        </li>
                        <li class="nav-item mr-3">
                            <Link class="nav-link" href="#">Our Team</Link>
                        </li>
                        <li class="nav-item mr-3">
                            <Link class="nav-link" href="#">Contact Us</Link>
                        </li>
                        <li class="nav-item mr-3">
                           { loggedInUser.email?
                            <h5>{loggedInUser.name}</h5>
                            :
                            <Link to="/login"><button className="btn btn-dark">Login</button></Link>}
                        </li>
                    </ul>
                </div>
            </nav>
        </section>

    );
};

export default Navbar;