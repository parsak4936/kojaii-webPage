import React from 'react';
 import {Button} from '../Button.js';
 import Slide_v2 from '../SlideSow/slideshow_v2'
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import join_Us_img from '../Images/join-us.png';
import intro_img from '../Images/intro.gif';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


function MainPage() {
//TODO : 1) width of animation / 2) color of animation / 3)unknown rec edit
    //TODO 4) slideshow ? (should check later)

    return (
        <>
            <div className="mainpage-container">
                {/*----------------- intrduce part ---------------*/}
                <section className='interduce'>
                    <div className='interduce-container'>

                        <div align="right" className='intro-header'>
                            <ScrollAnimation animateIn='animate__fadeIn'  animateOut='animate__fadeOut'>
                                <h1 >کجایی</h1>
                            </ScrollAnimation>
                        </div>

                        <div  align="right" className='intro-text'>
                            <ScrollAnimation animateIn='animate__flipInY'  animateOut='animate__fadeOutTopLeft'>
                                <p>
                                    برای همه ممکن است پیش امده باشد که زمان زیادی را صرف منتظر ماندن برای دوستانشان باشند که با
                                    آنها قرار مالقات دارند ؛ در پروژه کجایی ، روندی به منظور بهبود کنترل قرار مالقات های جمعی یا دو نفره در
                                    نظر گرفته شده است تا کاربرانی که می خواهند هم دیگر را مالقات کنند ، دیگر درگیر مسئله انتظار نباشند و
                                    در طی راه ، بتوانند موقعیت همدیگر را ببینند                        </p>

                            </ScrollAnimation>

                        </div>

                        <div className='intro-gif-container'>
                            <img className="intro-image" name="joinus-img" src={intro_img}/>
                        </div>
                    </div>


                </section>

                {/*-----------------Toturial ---------------*/}
                <section className='toturial'>
                    <Slide_v2/>

                </section>

                {/*-----------------join us ---------------*/}
                <section className='join-us'>

                    <div className='joingus-container'>

    < div align="center" className='joinus-header'>
              <ScrollAnimation animateIn='animate__fadeIn'  animateOut='animate__fadeOut'>
                      <h1  >به ما بپیوندید</h1>
              </ScrollAnimation>
    </div>


                        <div align="right" className='joinus-text'>
                            <ScrollAnimation animateIn='animate__flipInY'  animateOut='animate__fadeOutTopLeft'>
                                <p >
                                    کجایی همواره به دنبال جذب افراد مستعد و باانگیزه میباشد. اگر به کاری که می کنید علاقه و به مهارت های خود اطمینان دارید، جای شما در تیم ما خالی است.
                                </p>


                            </ScrollAnimation>

                        </div>





                        <center>

                            <div className="join-us-form" action="#">
                                <ScrollAnimation animateIn='animate__bounceInLeft'
                                                 animateOut='animate__bounceOutLeft'>
                                    <form >

                                        <input className="join-us-param-name" name="name" type="text" placeholder="نام خود را وادر کنید" />
                                        <input className="join-us-param-phone" name="phone" type="text" placeholder="شماره خود را وادر کنید"/>
                                        <br/>
                                        <br/>
                                        <Button className="join-us-btn" variant="primary" type="submit">ارسال درخواست</Button>
                                        <br/>
                                        <br/>
                                    </form>
                                </ScrollAnimation>

                            </div>
                        </center>


                        <div className='join-us-img-container'>

                            <img className="join-us-image" name="joinus-img" src={join_Us_img}/>

                        </div>


                    </div>


                </section>



            </div>
        </>
    );


}

export default MainPage;
