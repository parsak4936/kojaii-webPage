import React from 'react';
import contactUs from '../Images/conntact_us.png'
import AbsoluteWrapper from "../AbsoluteWrapper";
 
import './About.css'
 

 function About() {
 
  return(
<>

    <AbsoluteWrapper>
 <div className="aboutus-container">

     <h1 className='header-for-images'>با ما در ارتباط باشید</h1>
         <p className="c-txt">شما میتوانید از طری راه هاری ارتباطی زیر با ما در ارتباط باشید</p>
     <div className="c-socials">
         <p >kojaii@gmai.com</p>
     </div>


     <img src={contactUs} alt=" " className="c-img" />



 </div>
    </AbsoluteWrapper>
    </>
  ) 
  
}
export default About;
