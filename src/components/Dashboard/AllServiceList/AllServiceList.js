import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllServiceList = () => {
    const [allServices,setAllServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allServices')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAllServices(data)
        })
    },[])
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
           <table className="table table-borderless">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Project Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allServices.map((service,index)=>
                           <tr>
                               <td>{index+1}</td>
                               <td>{service.name}</td>
                               <td>{service.email}</td>
                               <td>{service.service}</td>
                               <td>{service.details}</td>
                               <td>{service.status}</td>
                               
                           </tr> 
                            
                            )
                    }
                </tbody>

            </table>
           </div>
           </div>
    );
};

export default AllServiceList;