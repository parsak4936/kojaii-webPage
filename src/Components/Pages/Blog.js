import React from 'react';
import './Blog.css'
import AbsoluteWrapper from "../AbsoluteWrapper";
import { CountdownCircleTimer } from "react-countdown-circle-timer";



const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">تایم به پایان رسید</div>;
    }

    return (
        <div className="timer">
            <div className="text">باقیس مانده </div>
            <div className="value">{remainingTime}</div>
            <div className="text">به ثانیه</div>
        </div>
    );
};

function Blog() {

    return(
        <>
        <AbsoluteWrapper>
            <div className="blog-container">
                <center>
                    <h3 className='blog-Header'>تیم نیگما در حال اماده سازی این صفحه یباشد ، از شکیبای شما سپاس گذاریم</h3>
                </center>

                <center>
                    <section className='blog-icon'>
                        <CountdownCircleTimer
                            isPlaying
                            duration={10}
                            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                            onComplete={() => [true, 1000]}
                        >
                            {renderTime}
                        </CountdownCircleTimer>
                    </section>
                </center>



            </div>
        </AbsoluteWrapper>


        </>
    )

}
export default Blog;
