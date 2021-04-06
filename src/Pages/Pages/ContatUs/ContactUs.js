import React from 'react';
import contactUs from '../../../assets/Images/ContactUs.svg'
import AbsoluteWrapper from "../../../Components/AbsoluteWrapper";
import './ContactUs.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


function ContactUs() {

    return(
        <>
            <AbsoluteWrapper>

                <div className="aboutus-container">

                    <div className='header-for-images '>

                        <center>
                            <Fade top>
                                <h1 >با <span className="nigma-txt"> کجایی</span> در ارتباط باشید</h1>
                            </Fade>
                        </center>

                    </div>
                    <Slide left>
                         <div className="c-txt">
                            <center>
                                <p className="">
                                        <span>کجایی</span> به منظور تسهیل ارتباط خود با کاربران سایت، اطلاعات تماس خود را ارائه می‌نماید. کاربران عزیز می‌توانند با استفاده از اطلاعات تماس ذیل ما را از نظرات و پیشنهادات خود مطلع سازند و ما را در جهت رسیدن به اهداف سایت یاری دهند

                                </p>

                            </center>

                          </div>
                    </Slide>

                    <div className="c-socials-container ">
                        <Fade bottom>
                        <div classname="c-socials">
                            <a
                                className='sup-email'
                                href="mailto:kojaii.info@gmail.com"
                                target='_blank'
                                aria-label='email'
                            >

                                <span className= "txt_sup" >kojaii@gmail.com</span>

                                <i className='fa  fa-envelope sup-icons fa-2x '/>

                            </a>
                            <a
                                className=' sup-insta'
                                href="https://www.instagram.com/kojaii_ir/"
                                target='_blank'
                                aria-label='instagram'
                            >
                                <span className= "txt_sup- w3-animate-opacity" > @kojaii    </span>


                                <i className='fa  fa-instagram  sup-icons fa-2x '/>

                            </a>
                            <a
                                className=' sup-tweeter'
                                href="https://web.telegram.org/#/im?p=@kojaii_ir"
                                target='_blank'
                                aria-label=' tweeter'
                            >
                                <span className= "txt_sup- w3-animate-opacity" >  @kojaii   </span>

                                <span>      </span>

                                <i className='fa  fa-telegram  sup-icons fa-2x '/>

                            </a>
                        </div>
                        </Fade>
                    </div>

                    <Fade right>
                         <img src={contactUs} alt=" " className="c-img" />
                    </Fade>


                </div>


            </AbsoluteWrapper>
        </>
    )

}
export default ContactUs;
