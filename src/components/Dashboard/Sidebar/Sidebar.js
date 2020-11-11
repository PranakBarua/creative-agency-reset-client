import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGripHorizontal, faUserPlus, faUsers,faShoppingCart,faSignOutAlt,faStreetView } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    return (
        <div id="sidebar" className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/serviceList" className="text-white" >
                            <FontAwesomeIcon icon={faStreetView} /> <span>Service list</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addReview" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;