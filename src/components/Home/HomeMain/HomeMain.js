import React from 'react';
import './HomeMain.css'
import frame from '../../../images/logos/Frame.png'
const HomeMain = () => {
    return (
        <div className="main-section">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5 mt-5">
                    <h1>Let's Grow Your <br/>Brand To The <br/>Next Level</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum eum commodi vitae alias porro excepturi consectetur aperiam ut saepe.</p>
                    <div className="btn btn-dark">Hire us</div>
                </div>
                <div className="col-md-5 mt-5">
                    <img src={frame} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;