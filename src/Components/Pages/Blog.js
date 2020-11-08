import React from 'react';
import './Blog.css'

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { TransverseLoading } from 'react-loadingg';


const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">Too lale...</div>;
    }

    return (
        <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
        </div>
    );
};

function Blog() {

    return(
        <>
            <div className="blog-container">
                <h3 className='blog-Header'>تیم نیگما در حال اماده سازی این صفحه یباشد ، از شکیبای شما سپاس گذاریم</h3>
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


            </div>



        </>
    )

}
export default Blog;
