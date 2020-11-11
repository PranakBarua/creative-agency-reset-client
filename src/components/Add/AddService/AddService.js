import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const [service,setService]=useState({})
    const [file,setFile]=useState(null)
    const handleBlur=e=>{
        const newService={...service}
        newService[e.target.name]=e.target.value;
        setService(newService)
    }
    const handleFileChange=e=>{
        const newFile=e.target.files[0]
        setFile(newFile)
    }
    const handleSubmit=()=>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', service.title)
        formData.append('description', service.description)

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                alert('Service saved successfully')
            }
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="row">
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 mt-5 ml-5" style={{height:'100%'}}>
        <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="title">Service Title</label>
                        <br/>
                        <input onBlur={handleBlur} type="text" class="input-small" name="title" placeholder="Enter title"/>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <br/>
                        <input onBlur={handleBlur} type="text" class="input-big" name="description" placeholder=" Enter Description"/>
                    </div>
                    <div class="form-group">
                        <label for="icon">Icon</label>
                        <br/>
                        <input onChange={handleFileChange} type="file" class="" id="icon" placeholder="Upload image"/>
                    </div>
                    <button type="submit" class="submit-button">Submit</button>
                    </form>
        </div>
    </div>
    );
};

export default AddService;