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
                    <div className="c-txt">
                        <ScrollAnimation animateIn='animate__bounceInLeft'>
                            <center>
                                <p>
                                    <span>کجایی</span> به منظور تسهیل ارتباط خود با کاربران سایت، اطلاعات تماس خود را ارائه می‌نماید. کاربران عزیز می‌توانند با استفاده از اطلاعات تماس ذیل ما را از نظرات و پیشنهادات خود مطلع سازند و ما را در جهت رسیدن به اهداف سایت یاری دهند
                                </p>

                            </center>
                        </ScrollAnimation>

                    </div>

                    <div className="c-socials-container">
                        <div classname="c-socials">
                            <a
                                className='sup-email'
                                href="mailto:kojaii.info@gmail.com"
                                target='_blank'
                                aria-label='email'
                            >

                                <span className= "txt_sup" >   kojaii@gmail.com   </span>

                                <i className='fa  fa-envelope sup-icons fa-2x '/>

                            </a>
                            <a
                                className=' sup-insta'
                                href="https://www.instagram.com/kojaii_ir/"
                                target='_blank'
                                aria-label='instagram'
                            >
                                <span className= "txt_sup-" > @kojaii    </span>


                                <i className='fa  fa-instagram  sup-icons fa-2x '/>

                            </a>
                            <a
                                className=' sup-tweeter'
                                href="https://web.telegram.org/#/im?p=@kojaii_ir"
                                target='_blank'
                                aria-label=' tweeter'
                            >
                                <span className= "txt_sup-" >  @kojaii   </span>

                                <span>      </span>

                                <i className='fa  fa-telegram  sup-icons fa-2x '/>

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
