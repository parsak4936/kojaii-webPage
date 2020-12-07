import React from 'react';
import SLIDE_V2 from '../SlideSow/slideshow_v2'
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import join_Us_img from '../Images/Joinus.svg';
import intro_img from '../Images/intro.gif';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Announcement from "react-announcement";
import Logo from "../Images/LOGO.png";
import $ from "jquery";
import {Link} from "react-router-dom";
import AbsoluteWrapper from "../AbsoluteWrapper";
import notif_logo from '../Images/notifiction-Logoo.png'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '', name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }




    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value, [event.target.phone]: event.target.value}
        );
    }

    handleSubmit = (event) => {

        var name = $("#name").val();
        var phone = $("#phone").val();

          $.ajax({
            url: 'https://kojaii.herokuapp.com/api/join-us',
            type: 'POST',
            dataType: 'json',
            data: {
                phone: phone,
                name: name
            }, async: false,
            complete: function(r){
                if(r.status === 200){
                    alert(name + ' درخواست شما با موفقیت ثبت شد');
                }else{
                    alert(JSON.parse(r.responseText)['message']);
                }
            }
        });

        event.preventDefault();
    }

    render() {


        return (
            <>
            <AbsoluteWrapper>
                <div className="mainpage-container">
                    <Announcement
                        title="به کجایی خوش آمدید"
                        subtitle="نظرات و پیشنهادات خود را با ما در میان بگذارید"
                        link=""
                        imageSource={notif_logo}
                        daysToLive={3}
                        secondsBeforeBannerShows={5}
                        closeIconSize={30}
                        animateInDuration={1000}
                        animateOutDuration={500}
                    />

                    {/*----------------- intrduce part ---------------*/}
                    <section className='interduce'>
                        <div className='interduce-container'>

                            <div align="right" className='intro-header'>
                                <ScrollAnimation animateIn='animate__fadeIn'>
                                    <h1>کجایی</h1>
                                </ScrollAnimation>
                            </div>

                            <div align="right" className='intro-text'>
                                <ScrollAnimation animateIn='animate__flipInX'>
                                    <p id="Des">
                                        برای همه ممکن است پیش امده باشد که زمان زیادی را صرف منتظر ماندن برای دوستانشان
                                        باشند که با
                                        آنها قرار مالقات دارند ؛ در پروژه کجایی ، روندی به منظور بهبود کنترل قرار مالقات
                                        های جمعی یا دو نفره در
                                        نظر گرفته شده است تا کاربرانی که می خواهند هم دیگر را مالقات کنند ، دیگر درگیر
                                        مسئله انتظار نباشند و
                                        در طی راه ، بتوانند موقعیت همدیگر را ببینند </p>
                                    <p id="moreDes">
                                        کجایی برنامه ای است که به شما کمک میکند تا با مدریت زمان و همچنین مشاهده موقعیت
                                        بقیه افراد گروه و فاصله و زمان تقریبی اعضا برای رسیدن به مقصد بتوانید سفری لذت
                                        بخش تر و مدریت شده تری داشته باشید.
                                    </p>
                                </ScrollAnimation>

                            </div>

                            <div className='intro-gif-container'>
                                <img className="intro-image" name="joinus-img" src={intro_img} alt="animation"/>
                            </div>
                        </div>


                    </section>

                    {/*-----------------Toturial ---------------*/}
                    <center>
                    <section className='toturial'>
                        <div className="T-container">

                            < div align="center" className='toturial-header'>
                                <h2>دانلود برنامه کجایی</h2>
                            </div>


                            <div align="center" className='toturial-txt'>
                                <div>
                                    <Link to='/download'>
                                        <button type="submit" className="btn btn btn-lg btn-desktop-Bazar">

                                        </button>
                                    </Link>
                                </div>
                                <br/>
                                <div>
                                    <Link to='/download'>
                                        <button type="submit" className="btn btn  btn-desktop-google">

                                        </button>
                                    </Link>
                                </div>
                            </div>


                            <div className="slide-show">
                                <SLIDE_V2/>
                            </div>


                        </div>


                    </section>
                    </center>
                    {/*-----------------join us ---------------*/}
                    <section className='join-us'>

                        <div className='joingus-container'>

                            < div align="center" className='joinus-header'>
                                <ScrollAnimation animateIn='animate__fadeIn'>
                                    <h1>به ما بپیوندید</h1>
                                </ScrollAnimation>
                            </div>


                            <div className='joinus-text'>
                                <ScrollAnimation animateIn='animate__flipInY'>
                                    <p align="center" id="join-us-text">
                                        کجایی همواره به دنبال جذب افراد مستعد و باانگیزه میباشد. اگر به کاری که می کنید
                                        علاقه و به مهارت های خود اطمینان دارید، جای شما در تیم ما خالی است.
                                    </p>
                                </ScrollAnimation>

                            </div>


                            <center>

                                <div className="join-us-form">
                                    <ScrollAnimation animateIn='animate__bounceInLeft'
                                                     animateOut='animate__bounceOutLeft'>
                                        <form onSubmit={this.handleSubmit}>

                                            <input className="join-us-param-name join-us-input" name="name" id="name"
                                                   onChange={this.handleChange} type="text"
                                                   placeholder="نام خود را وارد کنید"/>
                                            <input className="join-us-param-phone join-us-input" name="phone" id="phone"
                                                   onChange={this.handleChange} type="text"
                                                   placeholder="شماره خود را وارد کنید"/>
                                            <br/>
                                            <br/>
                                            <button className="btn join-us-btn btn-outline-info" type="submit">ارسال
                                                درخواست
                                            </button>

                                            <br/>
                                            <br/>
                                        </form>
                                    </ScrollAnimation>

                                </div>
                            </center>


                            <div className='join-us-img-container'>

                                <img className="join-us-image" name="joinus-img" src={join_Us_img} alt=" "/>

                            </div>


                        </div>


                    </section>


                </div>

            </AbsoluteWrapper>
            </>
        );

    }

}


