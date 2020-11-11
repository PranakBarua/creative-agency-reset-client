import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const {name,img,companyNameAndDesignation,description}=props.review
    return (
        <div className="col-md-4">
            <div  className="review-section">
            <div className="name-description">
                <div className="image-cropper">
                    <img className="pic" src={img} alt=""/>
                </div>
                <div className="ml-5">
                    <h3>{name}</h3>
                    <h5>{companyNameAndDesignation}</h5>
                </div>
            </div>
            <div>
                <p className="mt-3">{description}</p>
            </div>
            </div>
        </div>
    );
};

export default SingleReview;