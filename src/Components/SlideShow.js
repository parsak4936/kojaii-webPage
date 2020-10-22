import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 
 import './SlideShow.css'


const Slideshow = () => {
    return (
      <div className="slideShow">
        <Slide easing="ease">
          <div className="each-slide">
            <div className='slide-images' >
              <span>Slide 1</span>
            </div>
          </div>


          <div className="each-slide">
            <div  className='slide-images' >
              <span>Slide 2</span>
            </div>
          </div>


          <div className="each-slide">
            <div   className='slide-images'>
              <span>Slide 3</span>
            </div>
          </div>


          <div className="each-slide">
            <div  className='slide-images' >
              <span>Slide 4</span>
            </div>
          </div>
          <div className="each-slide">
            <div  className='slide-images' >
              <span>Slide 4</span>
            </div>
          </div>

        </Slide>
      </div>
    )
};

export default Slideshow;