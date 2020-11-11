import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { userContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Shipment = () => {
    const {title}=useParams()
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(userContext)

    const onSubmit = data => {
        const date=new Date().toDateString();
        const review={...data,date,status:'Pending'}
        fetch('http://localhost:5000/shipment',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Service enroll successfully')
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
        
                    <input className="input-small" name="name" ref={register({ required: true })} placeholder="Your name/Company's name"/>
                    {errors.name && <span className="error">name is required</span>}
                    <br/>

                    <input className="input-small" defaultValue={loggedInUser.email} name="email" ref={register({ required: true })} placeholder="Your email address" />
                    {errors.email && <span className="error">Email is required</span>}
                    <br/>

                    <input className="input-small" defaultValue={title} name="service" ref={register({ required: true })} placeholder="Service" />
                    {errors.service && <span className="error">Service is required</span>}
                    <br/>

                    <input className="input-big" name="details" ref={register({ required: true })}  placeholder="Project Details"/>
                    {errors.details && <span className="error">Details is required</span>}
                    <br/>

                    <input className="input-small" name="price" ref={register({ required: true })}  placeholder="Price"/>
                    {errors.price && <span className="error">Price is required</span>}
                    <br/>

                    <input className="submit-button" type="submit" />
                </form>
        </div>
    </div>
    );
};

export default Shipment;