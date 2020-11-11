import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './AddReview.css'
const AddReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const onSubmit = data => {
        const date=new Date().toDateString();
        const img=loggedInUser.img;
        const review={...data,date,img}
        fetch('http://localhost:5000/addReview',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Review saved successfully')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    };
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9" style={{height:'100%'}}>
                    <form className="ship-form mt-5 ml-5" onSubmit={handleSubmit(onSubmit)}>
            
                        <input className="input-small" name="name" ref={register({ required: true })} placeholder="Your Name"/>
                        {errors.name && <span className="error">name is required</span>}
                        <br/>

                        <input className="input-small" name="companyNameAndDesignation" ref={register({ required: true })} placeholder="Company's name,Designation" />
                        {errors.companyNameAndDesignation && <span className="error">Company Name And Designation is required</span>}
                        <br/>

                        <input className="input-big" name="description" ref={register({ required: true })}  placeholder="Description"/>
                        {errors.description && <span className="error">Description is required</span>}
                        <br/>

                        <input className="submit-button" type="submit" />
                    </form>
            </div>
        </div>
    );
};

export default AddReview;