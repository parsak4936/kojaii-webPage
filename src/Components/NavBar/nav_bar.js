import React, {useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from '../Images/LOGO.png'
import './nav_bar.css';
import $ from "jquery";
import {Button} from "../Button";
import ScrollAnimation from "react-animate-on-scroll";
import {Link,useLocation } from "react-router-dom";


//-----------------------------------------------//

//TODO : 1) direction must be rtl / 2) href in line 87 change into 'to' / 3) navbar changer in other pages
//TODO : 4)change txt and bottons right as doc / 5) download color to white
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
        if (!state){
            $('#myNavbar').addClass('collapse');
            $('#toggle').removeClass('change');
        }else{
            $('#myNavbar').removeClass('collapse');
            $('#toggle').addClass('change');
        }
    }


    useEffect(() => {
        showButton();
    }, []);
    //<i class='fab fa-typo3' />
    window.addEventListener('resize', showButton);

    $(window).scroll(function() {

        let position    =   $(this).scrollTop();
        if (position >= 100) {
            $('.nav-menu').addClass('costum-navbar');

        } else {
            $('.nav-menu').removeClass('costum-navbar');
        }

    });

//-----------------------------------------------//

// // ===== HAMBURGER BUTTON ===== //
//     $(document).ready(function() {
//         $('#toggle').on('click', function(){
//             $('#myNavbar').toggleClass('collapse');
//         })
//     });
//-----------------------------------------------//

    return (
    <>

        <nav
            className=  { location.pathname === "/home" | location.pathname === "/"
                ? "navbar navbar-default navbar-expand-lg nav-menu show-on-scroll"  :
                "navbar   navbar-expand-lg nav-menu-black show-on-scroll"}

             id="nav-menu">

            <div className="container-fluid">
<div className="navbar-btn-download">
    {button && <Button buttonStyle='btn--outline'  >   <i class='fa fa-download'/>   دانلود </Button>}

</div>

                <button onClick={classChange}  id="toggle" class="navbar-toggler" type="button" data-toggle="collapse"
                                              data-target="#myNavbar" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="line1 ham"></div>
                    <div className="line2 ham"></div>
                    <div className="line3 ham"></div>
                </button>
                <div  className="nav-bar-logo"  id="logo-in-navbar" >
                    <img className="logo-nav-mobile" src={LOGO} width = "120px "/>
                </div>

                <div className='collapse navbar-collapse justify-content-end'  id="myNavbar">

                    <ul className="navbar-nav ml-aulo navba-ul" >

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
                            <Link className="nav-link m-2 menu-item nav-active active" to="/home">
                                خانه
                            </Link>

                        </li>

                        <li className="nav-item" >
                               <img className="logo-nav-desktop" src={LOGO} width = "120px "/>
                         </li>


                    </ul>

                </div>

            </div>


        </nav>


        <section className=  { location.pathname === "/home" | location.pathname === "/" ? "hero-section" : "  hero-section-blank" }>

            <div className="container-fluid">

                <div className="row justify-content-center">

                    <div className="col-12">
                        <ScrollAnimation animateIn='animate__bounceInRight'>
                            <h1 className="text-hero text-center text-white text-uppercase"> جهت دانلود برنامه <span className="kojaii" >کجایی</span> کلیک کنید </h1>

                        </ScrollAnimation>
                    </div>

                    <div className="col-12">

                        <div className="  text-hero btn-hero lead text-center">
                            <ScrollAnimation animateIn='animate__bounceInLeft'
                                             animateOut='animate__bounceInRight'>

                        <div className="download-btns">

    <Link
        to='/download'
        className="btn-desktop"
        onClick={closeMobileMenu}
    >
        <Button>  </Button>
    </Link>

    <Link
        to='/download'
        className="btn-desktop"

        onClick={closeMobileMenu}
    >
        <Button> </Button>
    </Link>


                            <div >

                                <Link
                                    to='/download'
                                    className="btn-mobile-navbar-bazar"
                                    onClick={closeMobileMenu}
                                >
                                    <Button> </Button>
                                </Link>

                                <Link
                                    to='/download'
                                    className="btn-mobile-navbar-google"
                                    onClick={closeMobileMenu}
                                >
                                    <Button> </Button>
                                </Link>


                            </div>

</div>

                            </ScrollAnimation>


                        </div>


                    </div>

                </div>

            </div>

        </section>
    </>
  );
}

export default Nav_bar;
