import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const containerStyle={
        backgroundColor:"#F4FDFB",
        height:"100%"
    }
    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2 mr-5 col-sm-1">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-10">
                
            </div>
        </div>
    );
};

export default Dashboard;