import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from '../Images/LOGO.png'
import './nav_bar.css';
import $ from "jquery";
import {Button} from "../Button";


//-----------------------------------------------//

//TODO : 1) direction must be rtl / 2) href in line 87 change into 'to' / 3) navbar changer in other pages
//TODO : 4)change txt and bottons right as doc / 5) download color to white
function Nav_bar() {

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
        <nav className="navbar navbar-default navbar-expand-lg nav-menu" id="nav-menu">

            <div className="container-fluid">

                {button && <Button buttonStyle='btn--outline'  >   <i class='fa fa-download'/>   دانلود </Button>}

                <button onClick={classChange}  id="toggle" class="navbar-toggler" type="button" data-toggle="collapse"
                                              data-target="#myNavbar" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="line1 ham"></div>
                    <div className="line2 ham"></div>
                    <div className="line3 ham"></div>
                </button>

                <div className='collapse navbar-collapse justify-content-end'  id="myNavbar">

                    <ul className="navbar-nav ml-aulo" >

                        <li className="nav-item">
                            <a className="nav-link m-2 menu-item"  href = "/ContactUs"> بلاگ </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link m-2 menu-item" href="/home"> پشتیبانی </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link m-2 menu-item" href="/ContactUs"> ارتباط با ما </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link m-2 menu-item nav-active active" href="/home"> خانه </a>
                        </li>

                        <li className="nav-item" id="logo-in-navbar">
                            <img src={LOGO} width = "120px "/>
                        </li>


                    </ul>

                </div>

            </div>


        </nav>

        <section className="hero-section">

            <div className="container-fluid">

                <div className="row justify-content-center">

                    <div className="col-12">
                        <h1 className="text-hero text-center text-white text-uppercase"> جهت دانلود برنامه <span className="kojaii" >کجایی</span> کلیک کنید </h1>
                    </div>

                    <div className="col-12">

                        <div className="lead text-center   ">
                            {button && <Button buttonStyle='btn--Bazar' buttonSize='btn--large' > </Button>}
                            {button && <Button buttonStyle='btn--Bazar' buttonSize='btn--large'> </Button>}

                        </div>


                    </div>

                </div>

            </div>

        </section>
    </>
  );
}

export default Nav_bar;
