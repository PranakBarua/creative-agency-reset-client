import React from 'react';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'
import './Work.css'
const Work = () => {
    return (
            <div className="mt-5">
                <div id="carouselExampleIndicators" class="carousel slide work-section" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-4">
                                    <img src={carousel1} class="d-block w-100" alt="..."/>
                                </div>
                                <div className="col-md-4">
                                    <img src={carousel2} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        
                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={carousel3} class="d-block w-100" alt="..."/>
                                </div>
                                <div className="col-md-4">
                                    <img src={carousel4} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={carousel5} class="d-block w-100" alt="..."/>
                                </div>
                                <div className="col-md-4">
                                    <img src={carousel1} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>
            </div>
    );
};

export default Work;