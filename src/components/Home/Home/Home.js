import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HomeMain from '../HomeMain/HomeMain';
import Logos from '../Logos/Logos';
import Review from '../Reviews/Review';
import Services from '../Services/Services';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeMain></HomeMain>
            <Logos></Logos>
            <Services></Services>
            <Work></Work>
            <Review></Review>
        </div>
    );
};

export default Home;