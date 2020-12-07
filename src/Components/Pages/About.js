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
                    <div classname="c-socials "  >
                        <a
                            className=' sup-email'
                            target="_blank"
                            href=" mailto:kojaii.info@gmail.com"
                            aria-label='email'
                        >

                            <span className= "txt_sup" > kojaii.info@gmail.com  </span>

                            <i className='fa  fa-envelope-o  sup-icons fa-2x '/>
                        </a>



                        <a
                            className=' sup-insta'
                            aria-label='instagram'
                            target="_blank" href="   https://www.instagram.com/kojaii_ir/">
                            <span className= "txt_sup-" > @kojaii_ir   </span>

                            <i className='fa  fa-instagram  sup-icons fa-2x '/>
                        </a>






                        <a
                            className=' sup-tweeter'
                            aria-label=' tweeter'
                            target="_blank" href=" https://web.telegram.org/#/im?p=@kojaii_ir">
                            <span className= "txt_sup-" >  @kojaii_ir   </span>

                            <span>          </span>

                            <i className='fa  fa-twitter  sup-icons fa-2x '/>
                        </a>










                    </div>

                </div>


                <img src={contactUs} alt=" " className="c-img" />



            </div>


    </AbsoluteWrapper>
    </>
  ) 
  
}
export default About;
