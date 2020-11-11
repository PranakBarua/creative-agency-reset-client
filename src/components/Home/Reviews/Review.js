import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import customer from '../../../images/customer-1.png'
const Review = () => {
    // const reviews=[
    //     {
    //         name:"Pranak",
    //         img:customer,
    //         companyNameAndDesignation:'CEO,Manpol',
    //         description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum eum commodi vitae alias porro excepturi consectetur aperiam ut saepe.'
    //     },
    //     {
    //         name:"Pranak",
    //         img:customer,
    //         companyNameAndDesignation:'CEO,Manpol',
    //         description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum eum commodi vitae alias porro excepturi consectetur aperiam ut saepe.'
    //     },
    //     {
    //         name:"Pranak",
    //         img:customer,
    //         companyNameAndDesignation:'CEO,Manpol',
    //         description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum eum commodi vitae alias porro excepturi consectetur aperiam ut saepe.'
    //     },
    // ]
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setReviews(data)
        })
    },[])
    return (
        <div className="mt-5">
            <h3 className=" text-center">Clients <span style={{color:'green'}}>Feedback</span></h3>
            <div className="row mt-5">
                {
                    reviews.map(review=><SingleReview review={review}></SingleReview>)
                }
            </div>
        </div>
        
    );
};

export default Review;