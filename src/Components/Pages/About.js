import React from 'react';
import contactUs from '../Images/ContactUs.svg'
import AbsoluteWrapper from "../AbsoluteWrapper";
import './About.css'
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
 

 function About() {
 
  return(
<>

    <AbsoluteWrapper>

            <div className="aboutus-container">
                <div className='header-for-images'>

                    <center>  <h1 >با <span className="nigma-txt"> کجایی</span> در ارتباط باشید</h1></center>



                </div>
                <div className="c-txt animation fadeIn slower delay-2s">

                        <center>
                            <p>
                                <span>کجایی</span> به منظور تسهیل ارتباط خود با کاربران سایت، اطلاعات تماس خود را ارائه می‌نماید. کاربران عزیز می‌توانند با استفاده از اطلاعات تماس ذیل ما را از نظرات و پیشنهادات خود مطلع سازند و ما را در جهت رسیدن به اهداف سایت یاری دهند
                            </p>

                        </center>


                </div>

                <div className="c-socials-container">
                    <ScrollAnimation classname="c-socials " animateIn='animate__fadeIn'>
                        <Link
                            className=' sup-email'
                            to='/'
                            target='_blank'
                            aria-label='email'
                        >

                            <span className= "txt_sup" >   kojaii@gmail.com   </span>

                            <i className='fa  fa-envelope sup-icons fa-2x '/>

                        </Link>

                        <Link
                            className=' sup-insta'
                            to='/'
                            target='_blank'
                            aria-label='instagram'
                        >
                            <span className= "txt_sup-" > @kojaii    </span>


                            <i className='fa  fa-instagram  sup-icons fa-2x '/>

                        </Link>
                        <Link
                            className=' sup-tweeter'
                            to='/'
                            target='_blank'
                            aria-label=' tweeter'
                        >
                            <span className= "txt_sup-" >  @kojaii   </span>

                            <span>      </span>

                            <i className='fa  fa-twitter  sup-icons fa-2x '/>

                        </Link>





                    </ScrollAnimation>

                </div>


                <img src={contactUs} alt=" " className="c-img" />



            </div>


    </AbsoluteWrapper>
    </>
  ) 
  
}
export default About;
