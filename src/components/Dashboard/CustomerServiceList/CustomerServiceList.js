import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import CustomerService from '../CutomerService/CustomerService';
import ShowCustomerService from '../ShowCustomerService/ShowCustomerService';
import Sidebar from '../Sidebar/Sidebar';

const CustomerServiceList = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const [services,setServices]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/ServiceEnrollByCustomer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-4">
                {
                    services.map(serviceInfo=><CustomerService serviceInfo={serviceInfo}></CustomerService>)
                }  
            </div>
        </div>
    );
};

export default CustomerServiceList;