import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './ShowCustomerService.css'
const ShowCustomerService = (props) => {
    const {service,details,status}=props.serviceInfo;
    const {image} = props.images
    // console.log(props.images.image)
    return (

        <div className="customer-service-section"  style={{display:'block'}}>
           <div  className="ml-auto">
               {/* {
                   props.images &&
                   <img src={`data:image/png;base64,${props.images.image.img}`} style={{height:'80px'}} alt=""/>
               } */}
               <h4>{status}</h4>
           </div>
           <div>
                <h2>{service}</h2>
                <p>{details}</p>
           </div>
        </div>
    );
};

export default ShowCustomerService;