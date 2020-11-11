import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'
const SingleService = (props) => {
    const {title,description}=props.service
    const {img}=props.service.image
    return (
        <div className="col-md-4 mt-5 service-section" >
            <Link to={`/shipment/${title}`}>
            <div className="text-center">
                <div className="text-center">
                    <img  className="mt-3" src={`data:image/png;base64,${img}`} style={{height:'80px'}} alt="..."/>
                </div>
                <div>
                    <h5 className="mt-3 text-center text-color-info">{title}</h5>
                    <p className="mt-3 text-color-info" >{description}</p>
                </div>
            </div>
            </Link>
           
        </div>
    );
};

export default SingleService;