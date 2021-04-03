import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import intro_img from "../../../../../assets/Animations/intro2.gif";
import './interduce.css';
function InterduceSection (props){

    return(

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

    );
}
export default InterduceSection