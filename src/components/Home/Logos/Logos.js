import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import './Logos.css'
const Logos = () => {
    return (
        <div className="row  d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-2">
                <img src={slack} className="logo-img" alt=""/>
            </div>
            <div className="col-md-2">
                <img src={google} className="logo-img" alt=""/>
            </div>
            <div className="col-md-2">
                <img src={uber} className="logo-img" alt=""/>
            </div>
            <div className="col-md-2">
                <img src={netflix} className="logo-img" alt=""/>
            </div>
            <div className="col-md-2">
                <img src={airbnb} className="logo-img" alt=""/>
            </div>
        </div>
    );
};

export default Logos;