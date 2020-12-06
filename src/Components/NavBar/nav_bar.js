import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from '../Images/LOGO.png'
import './nav_bar.css';
import $ from "jquery";
import {Button} from "../Button";
import ScrollAnimation from "react-animate-on-scroll";
import {BrowserRouter as Router, Link, useLocation} from "react-router-dom";
import AbsoluteWrapper from "../AbsoluteWrapper";

//-----------------------------------------------//

function Nav_bar() {
    let location = useLocation();

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    let state = false;
    const classChange = () => {
        state = !state;
        if (!state) {
            $('#myNavbar').addClass('collapse');
            $('#toggle').removeClass('change');
            $(".nav-menu").css("background-color", "");

        } else {
            $('#myNavbar').removeClass('collapse');
            $('#toggle').addClass('change');
            $(".nav-menu").css("background-color", "#037AAE");
        }
    }


    useEffect(() => {
        showButton();
    }, []);
    //<i class='fab fa-typo3' />
    window.addEventListener('resize', showButton);

    $(window).scroll(function () {

        let position = $(this).scrollTop();
        if (position >= 100) {
            $('.nav-menu').addClass('costum-navbar');
            $(".navbar-btn-download").css("display", "block");


        } else {
            $('.nav-menu').removeClass('costum-navbar');
            $(".navbar-btn-download").css("display", "none");

        }

    });

//-----------------------------------------------//


//-----------------------------------------------//

    return (
        <>
            <AbsoluteWrapper>
                <nav
                    className={location.pathname === "/home" | location.pathname === "/"
                        ? "navbar navbar-default navbar-expand-lg nav-menu show-on-scroll" :
                        "navbar   navbar-expand-lg nav-menu-black show-on-scroll"}

                    id="nav-menu">

                    <div className="container-fluid">
                        <div className="navbar-btn-download">
                            <button className="btn  btn-outline-info">
                                <i className='fa fa-download'/> دانلود <span>  </span>
                            </button>


                        </div>

                        <button onClick={classChange} id="toggle" className="navbar-toggler" type="button"
                                data-toggle="collapse"
                                data-target="#myNavbar" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <div className="line1 ham"></div>
                            <div className="line2 ham"></div>
                            <div className="line3 ham"></div>
                        </button>
                        <div className="nav-bar-logo" id="logo-in-navbar">
                            <img className="logo-nav-mobile" src={LOGO} width="120px " alt=" "/>
                        </div>

                        <div className='collapse navbar-collapse justify-content-end' id="myNavbar">

                            <ul className="navbar-nav ml-aulo navba-ul">

                                <li className="nav-item">
                                    <Link className="nav-link m-2 menu-item" to="/blog">
                                        بلاگ
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link m-2 menu-item" to="/support">
                                        پشتیبانی
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link m-2 menu-item" to="/ContactUs">
                                        ارتباط با ما
                                    </Link>

                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link m-2 menu-item nav-active active" to="/">
                                        خانه
                                    </Link>

                                </li>

                                <li className="nav-item">
                                    <img className="logo-nav-desktop" src={LOGO} width="120px "/>
                                </li>


                            </ul>

                        </div>

                    </div>


                </nav>


                <section
                    className={location.pathname === "/" ? "hero-section" : "  hero-section-blank"}>

                    <div className="container-fluid">

                        <div className="row justify-content-center">

                            <div className="col-12 download-text">
                                <ScrollAnimation className="text-hero text-center text-white text-uppercase"
                                                 animateIn='animate__fadeIn'>
                                    <h1> جهت دانلود <span className="kojaii">کجایی</span> کلیک کنید </h1>

                                </ScrollAnimation>
                            </div>

                            <div className="col-12">
                                <center>
                                    <div className="  btn-hero lead text-center">

                                        <div className="download-btns">

                                            <ScrollAnimation animateIn='animate__bounceInRight'>
                                                <Link
                                                    to='/download'
                                                    onClick={closeMobileMenu}
                                                >
                                                    <button type="submit"
                                                            className="btn btn btn-lg btn-desktop-Bazar  btn-primary"></button>
                                                </Link>
                                            </ScrollAnimation>


                                            <ScrollAnimation animateIn='animate__bounceInLeft'>
                                                <Link
                                                    to='/download'
                                                    onClick={closeMobileMenu}
                                                >
                                                    <button type="button"
                                                            className="btn btn  btn-desktop-google   btn-primary"></button>
                                                </Link>
                                            </ScrollAnimation>


                                        </div>


                                    </div>
                                </center>


                            </div>

                        </div>

                    </div>

                </section>
            </AbsoluteWrapper>
        </>
    );
}

export default Nav_bar;
