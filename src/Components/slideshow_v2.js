import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
 import { config } from "react-spring";
 import {v1 as uuidv4} from "uuid"; 
export default class Slideshow_v2 extends Component {
  state = {
    goToSlide: 0,
    
    showNavigation: true,
    config: config.gentle
  };

  slides = [
   
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });


  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
         
          
         
         
          
  
        </div>
      </div>
    );
  }
}
