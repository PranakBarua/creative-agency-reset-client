import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const onSubmit = data => {
        const date=new Date().toDateString();
        const admin={...data,date}
        fetch('http://localhost:5000/addAdmin',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(admin)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Admin saved successfully')
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
        
                    <input className="input-small" name="name" ref={register({ required: true })} placeholder="Enter Name"/>
                    {errors.name && <span className="error">Name is required</span>}
                    <br/>

                    <input className="input-small" name="email" ref={register({ required: true })} placeholder="Enter Email" />
                    {errors.email && <span className="error">Email is required</span>}
                    <br/>

                    <input className="submit-button" type="submit" />
                </form>
        </div>
    </div>
    );
};

export default AddAdmin;