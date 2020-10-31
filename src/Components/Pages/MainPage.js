import React from 'react';
import {Button} from '../Button.js';
 import Slide_v2 from '../SlideSow/slideshow_v2'
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import join_Us_img from '../Images/join-us.png';
import intro_img from '../Images/intro.gif';


function MainPage() {
//TODO : 1) width of animation / 2) color of animation / 3)unknown rec edit
    //TODO 4) slideshow ? (should check later)

    return (
        <>
            <div className="mainpage-container">
                {/*----------------- intrduce part ---------------*/}
                <section className='interduce'>
                    <div className='interduce-container'>

                        <h1 align="right" className='intro-header'>کجایی</h1>
                        <p align="right" className='intro-text'>
                            برای همه ممکن است پیش امده باشد که زمان زیادی را صرف منتظر ماندن برای دوستانشان باشند که با
                            آنها قرار مالقات دارند ؛ در پروژه کجایی ، روندی به منظور بهبود کنترل قرار مالقات های جمعی یا دو نفره در
                            نظر گرفته شده است تا کاربرانی که می خواهند هم دیگر را مالقات کنند ، دیگر درگیر مسئله انتظار نباشند و
                            در طی راه ، بتوانند موقعیت همدیگر را ببینند                        </p>

                        <div className='unknown_rec'>
                            <svg id="unknown_rec" xmlns="http://www.w3.org/2000/svg" width="575" height="30" viewBox="0 0 775 30">
                                <rect id="Rectangle_22" data-name="Rectangle 22" width="85" height="30" rx="15" fill="#8fe1eb"/>
                                <rect id="Rectangle_23" data-name="Rectangle 23" width="85" height="30" rx="15" transform="translate(160)" fill="#68bbd5"/>
                                <rect id="Rectangle_24" data-name="Rectangle 24" width="85" height="30" rx="15" transform="translate(320)" fill="#90dee9"/>
                                <rect id="Rectangle_25" data-name="Rectangle 25" width="85" height="30" rx="15" transform="translate(480)" fill="#68bbd5"/>
                                <rect id="Rectangle_26" data-name="Rectangle 26" width="85" height="30" rx="15" transform="translate(640)" fill="#92e0ed"/>
                            </svg>

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


                        <h1  align="center" className='joinus-header'>به ما بپیوندید</h1>
                        <p align="right" className='joinus-text'>
                            کجایی همواره به دنبال جذب افراد مستعد و باانگیزه میباشد. اگر به کاری که می کنید علاقه و به مهارت های خود اطمینان دارید، جای شما در تیم ما خالی است.
                        </p>


                        <center>
                            <div>
                                <form className="join-us-form" action="#">
                                    <input className="join-us-param-name" name="name" type="text" placeholder="نام خود را وادر کنید" />
                                    <input className="join-us-param-phone" name="phone" type="text" placeholder="شماره خود را وادر کنید"/>
                                    <br/>
                                    <br/>
                                    <Button className="join-us-btn" variant="primary" type="submit">ارسال درخواست</Button>
                                    <br/>
                                    <br/>
                                </form>
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
