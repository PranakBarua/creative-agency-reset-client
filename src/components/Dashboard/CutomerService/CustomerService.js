import React, { useEffect, useState } from 'react';
import ShowCustomerService from '../ShowCustomerService/ShowCustomerService';
import './CustomerService.css'
const CustomerService = ({serviceInfo}) => {
    const [images,setImages]=useState([])
    const {service}=serviceInfo
    // console.log(props.serviceInfo)
    useEffect(() => {
        fetch('http://localhost:5000/serviceByTitle', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ title: service })
        })
            .then(res => res.json())
            .then(data => {
                setImages(data)
            });
    }, [])
    return (
        <div>
                {
                    <ShowCustomerService serviceInfo={serviceInfo} images={images}></ShowCustomerService>
                }
        </div>
    );
};

export default CustomerService;