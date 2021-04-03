import React from "react";
import SLIDE_V2 from "../../../../../Components/SlideSow/slideshow_v2";
import './Toturial.css'
function ToturialSection (props){
    return(
        <center>
            <section className='toturial'>
                <div className="T-container">

                    < div align="center" className='toturial-header'>
                        <h2>دانلود برنامه کجایی</h2>
                    </div>

                    <div align="center" className='toturial-txt'>
                        <div>
                            <a href='https://cafebazaar.ir/install?l=en'>
                                <button type="submit" className="btn btn btn-lg btn-desktop-Bazar">

                                </button>
                            </a>
                        </div>
                        <br/>
                        <div>
                            <a href='https://play.google.com/store'>
                                <button type="submit" className="btn btn  btn-desktop-google">

                                </button>
                            </a>
                        </div>
                    </div>


                    <div className="slide-show">
                        <SLIDE_V2/>
                    </div>
                </div>
            </section>
        </center>

    );
}
export default ToturialSection