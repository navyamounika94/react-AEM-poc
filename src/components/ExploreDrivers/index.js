import React, { Component } from 'react';
import { MapTo } from '@adobe/cq-react-editable-components';
import Slider from 'react-slick';
import SliderArrow from '../../SliderArrow';
import { Card, CardBody } from 'reactstrap';


const ExploreDriversEditConfig = {

    emptyLabel: 'ExploreDrivers',

    isEmpty: function (props) {
        //return !props || !props.title || props.title.trim().length < 1;
        return true;

    }
};

class ExploreDrivers extends Component {

    render() {
        const settings = {
            
            centerMode: false,
            dots: false,
            infinite: true,
            nextArrow: <SliderArrow />,
            prevArrow: <SliderArrow />,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '55px',
                    dots: true,
                    infinite: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 640,
                settings: {
                    centerMode: true,
                    centerPadding: '46px',
                    dots: true,
                    infinite: true,
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }],
            slidesToScroll: 3,
            slidesToShow: 3,
            speed: 500,
        };
        return (
            <div className="carousel-wrapper hmpg-section row unauth-carousel">
                <h3 className="m-auto col-12 explore-drivers-title" id="explore-drivers-title">
                Explore Drivers
                </h3>
                <p className="m-auto col-12 explore-drivers-subtitle">
                Discover the latest promotions, events and exclusive content
                </p>
                <div className="ld-carousel">
                    <div className="col-md-12 m-auto cwrapper">
                        <Slider className="carousel-slider"{...settings}>
                                            
                                                <Card key={0} className="ld-tile" style={{ display: "inline-block", width: "100%" }}>

                                                    <div className="img-wrapper">
                                                        <a href="https://staging.drivers.lexus.com/lexusdrivers/service">
                                                        <img  className="carousel-img" src="/Assets/LexusDrivers-2.jpg" />
                                                        </a>
                                                    </div>
                                                    <CardBody className="carousel-card-body">
                                                        <div class="wrap-copy">
                                                            <h6 class="carousel-title">SERVICE BY LEXUS</h6>
                                                            <p class="carousel-subTitle"style={{ marginBottom:"16px" }}> From precision-crafted genuine parts to master technicians who know your Lexus best, this is a service experience</p>
                                                        </div>
                                                        <a classname="exploreUnderline" href="#">LEARN MORE</a>
                                                    </CardBody>
                                                </Card>
                                            
                                            
                                            <Card key={0} className="ld-tile" style={{ display: "inline-block", width: "100%" }}>

                                                <div className="img-wrapper">
                                                <a href="https://staging.drivers.lexus.com/lexusdrivers/technology/lexusapp">
                                                    <img  className="carousel-img" src="/Assets/LexusDrivers-3.jpg" />
                                                    </a>
                                                </div>
                                                <CardBody className="carousel-card-body">
                                                    <div class="wrap-copy">
                                                        <h6 class="carousel-title">LEXUS APP</h6>
                                                        <p class="carousel-subTitle" style={{ marginBottom:"16px" }}>  with your smartphone, schedule a service appointment and more with the all-new Lexus</p>
                                                    </div>
                                                    <a classname="exploreUnderline" href="#">LEARN MORE</a>
                                                </CardBody>
                                            </Card>
                                      
                                        
                                        <Card key={0} className="ld-tile" style={{ display: "inline-block", width: "100%" }}>

                                            <div className="img-wrapper">
                                            <a href="https://staging.drivers.lexus.com/lexusdrivers/service/guest-experience">
                                                <img  className="carousel-img" src="/Assets/LexusDrivers.jpg" />
                                                </a>
                                            </div>
                                            <CardBody className="carousel-card-body">
                                                <div class="wrap-copy">
                                                    <h6 class="carousel-title">LEXUS AMENITIES</h6>
                                                    <p class="carousel-subTitle" style={{ marginBottom:"16px" }}> Take advantage of the amenities at your Lexus dealer</p>
                                                </div>
                                                <a classname="exploreUnderline" href="#">LEARN MORE</a>
                                            </CardBody>
                                        </Card>
                                        <Card key={0} className="ld-tile" style={{ display: "inline-block", width: "100%" }}>

                                            <div className="img-wrapper">
                                            <a href="https://staging.drivers.lexus.com/lexusdrivers/experiences/Inside%20Lexus">
                                                <img  className="carousel-img" src="/Assets/LexusDrivers-4.jpg" />
                                                </a>
                                            </div>
                                            <CardBody className="carousel-card-body">
                                                <div class="wrap-copy">
                                                    <h6 class="carousel-title">INSIDE LEXUS</h6>
                                                    <p class="carousel-subTitle" style={{ marginBottom:"16px" }}> Be the first to know about all things Lexus from future vehicle information to exclusive tips for Lexus drivers.</p>
                                                </div>
                                                <a classname="exploreUnderline" href="#">LEARN MORE</a>
                                            </CardBody>
                                        </Card>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapTo('TMNA/components/manuals')(ExploreDrivers, ExploreDriversEditConfig);