import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import AllServiceList from '../AllServiceList/AllServiceList';
import CustomerServiceList from '../CustomerServiceList/CustomerServiceList';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);
    
        useEffect(() => {
            fetch('http://localhost:5000/isAdmin', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: loggedInUser.email })
            })
                .then(res => res.json())
                .then(data => setIsAdmin(data));
    }, [])
    return (
        <div>
                {
                    isAdmin?
                    <AllServiceList></AllServiceList>
                    :
                    <CustomerServiceList></CustomerServiceList>
                }   
        </div>
    );
};

export default ServiceList;