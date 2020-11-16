import React from 'react';
import contactUs from '../Images/conntact_us.png'
import AbsoluteWrapper from "../AbsoluteWrapper";
 
import './About.css'
import ScrollAnimation from "react-animate-on-scroll";
 

 function About() {
 
  return(
<>

    <AbsoluteWrapper>
 <div className="aboutus-container">
<div className='header-for-images'>
    <ScrollAnimation animateIn='animate__fadeIn'>
        <h1 >با ما در ارتباط باشید</h1>

    </ScrollAnimation>

</div>
 <div className="c-txt">
     <ScrollAnimation animateIn='animate__bounceInLeft'>
         <p >شما میتوانید از طری راه هاری ارتباطی زیر با ما در ارتباط باشید</p>
     </ScrollAnimation>

 </div>

     <div className="c-socials">
         <ScrollAnimation animateIn='animate__fadeIn'>
             <p >kojaii@gmai.com</p>
         </ScrollAnimation>

     </div>


     <img src={contactUs} alt=" " className="c-img" />



 </div>
    </AbsoluteWrapper>
    </>
  ) 
  
}
export default About;
