import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import './SlideShow_bootstrap.css'
export default class Slideshow_bootstrap extends Component {


    render() {
        return (
<>

<div className="  slideshow-container ">

        <Carousel>
            <Carousel.Item interval={1000}>

                <img
                    className="d-block w-100"
                    src="https://picsum.photos/900/451/?random"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/900/452/?random"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/900/450/?random"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>



</>
        );
    }
}
