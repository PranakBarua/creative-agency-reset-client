import React, { useEffect, useState } from 'react';
import './Services.css'
import service from '../../../images/icons/service1.png'
import SingleService from '../SingleService/SingleService';
const Services = () => {
    // const services=[
    //     {
    //         img:service,
    //         title:'Web & Mobile design',
    //         description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum eum commodi vitae alias porro excepturi consectetur aperiam ut saepe.'
    //     },
    //     {
    //         img:service,
    //         title:'Graphic Design',
    //         description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum eum commodi vitae alias porro excepturi consectetur aperiam ut saepe.'
    //     },
    //     {
    //         img:service,
    //         title:'Web development',
    //         description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum eum commodi vitae alias porro excepturi consectetur aperiam ut saepe.'
    //     },
    // ]
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mt-5">
            <h3 className="text-center">Provide awesome <span className="text-color">services</span></h3>
            <div className="row mt-5">
                {
                    services.map(service=><SingleService service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;