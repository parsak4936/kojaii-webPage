import React, {useState, useEffect} from 'react';
import {Button} from './Button.js';
import {Link} from 'react-router-dom';
import Slide_v2 from './slideshow_v2'
import Avatar from 'react-avatar';
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import join_Us_img from './join-us.png';
import intro_img from './intro.gif';


function MainPage() {
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

    useEffect(() => {
        showButton();
    }, []);
    //<i class='fab fa-typo3' />
    window.addEventListener('resize', showButton);
    return (
        <>
            <div className="mainpage-container">

                {/*-----------------image & download ---------------*/}
                <section className='image_and_download'>


                    <div className="img_and_download-container">

                        <h2  className = 'where-are-u'> <span  className='blue-kojaii'> کجایی </span>   دانلود برنامه  </h2>

                        <p className='come-faster'>جهت دانلود برنامه کلید کنید</p>

                        <Link
                            to='/download'
                            className='downlload-btn-mainpage-1-mobile'
                            onClick={closeMobileMenu}
                        >

                        </Link>

                        <Link
                            to='/download'
                            className='downlload-btn-mainpage-2-mobile'
                            onClick={closeMobileMenu}
                        >

                        </Link>


                    </div>


                </section>


                {/*----------------- intrduce part ---------------*/}
                <section className='interduce'>
                    <div className='interduce-container'>

                        <h1 align="right" className='joinus-header'>کجایی</h1>
                        <p align="right" className='intro-text'>
                            برای همه ممکن است پیش امده باشد که زمان زیادی را صرف منتظر ماندن برای دوستانشان باشند که با
                            آنها قرار مالقات دارند ؛ در پروژه کجایی ، روندی به منظور بهبود کنترل قرار مالقات های جمعی یا دو نفره در
                            نظر گرفته شده است تا کاربرانی که می خواهند هم دیگر را مالقات کنند ، دیگر درگیر مسئله انتظار نباشند و
                            در طی راه ، بتوانند موقعیت همدیگر را ببینند                        </p>


                        <div className='join-us-img-container'>
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


                        <h1 align="right" className='joinus-header'>به ما بپیوندید</h1>
                        <p align="right" className='joinus-text'>
                            کجایی همواره به دنبال جذب افراد مستعد و باانگیزه میباشد. اگر به کاری که می کنید علاقه و به مهارت های خود اطمینان دارید، جای شما در تیم ما خالی است.
                        </p>


                        <center>
                            <div>
                                <form className="join-us-form" action="#">
                                    <input className="join-us-param" name="name" type="text" placeholder="نام خود را وادر کنید"/>
                                    <input className="join-us-param" name="phone" type="text" placeholder="شماره خود را وادر کنید"/>
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

                {/*-----------------<section className='About-us'>



<h1 className='header-for-Aboutus'>Nigma</h1>

<p >Lorem ipsum dolor sit a uidem? Optio quae sed voluptatem veritatis at?</p>

<section className='info'>

 

<div className='aboutus-txt'>
 <h2 className='masoud-header'>مسعود حاجی زاده</h2>
<p>Lorem ipsum dolor sit amet consectetur  ue eum doloremque consectetur, eveniet nostrum laudantium. Repellat optio obcaecati ab aliquid corrupti non?</p>
</div>


 <div  className='aboutus-txt' >
<h2 className='nafaji-header' >امیر حسین نجفی</h2>
<p>Lorem ipsum dolor, ita, nam sit eius accusantium quaerat illo. Similique, ullam!</p>
</div>

 <div  className='aboutus-txt' >

<h2 className='parsa-header'>پارسا کاظمی</h2>
<p>Lorem  quasi. Reprehenderit iusto impedit debitis eligendi officia? Et nisi dicta a quos eligendi!</p>
</div>

</section>
</section>

 ---------------*/}


            </div>
        </>
    );


}

export default MainPage;