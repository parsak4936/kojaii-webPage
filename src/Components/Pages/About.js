import React from 'react';
import contactUs from '../Images/conntact_us.png'
import AbsoluteWrapper from "../AbsoluteWrapper";
 
import './About.css'
 

 function About() {
 
  return(
<>

    <AbsoluteWrapper>
 <div className="aboutus-container">

     <h1 className='header-for-images'>Nigma</h1>

         <p className="c-txt">ioquae s iure quidem? Optio quae s iure quidem? Optio quae ssed voluptatem veritatis at?</p>
        <img src={contactUs} alt=" " className="c-img" />



 </div>
    </AbsoluteWrapper>
    </>
  ) 
  
}
export default About;
