import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from "../../logo.jpg";
import logo01 from "../../img/logo01.svg";
import "./Title.css";

function Title(){
    return (
        <>
            <Carousel autoPlay interval="5000" transitionTime="1000" infiniteLoop>
                <div>
                    <img src={logo01} alt=""/>
                </div>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <img src={logo} alt=""/>
                </div>
            </Carousel>
        </>
    );
}

export default Title;