import React from 'react';
import './Blog.css'
import AbsoluteWrapper from "../../../Components/AbsoluteWrapper";
import developing from '../../../assets/Animations/website.gif'
function Blog() {

    return(
        <>
        <AbsoluteWrapper>
            <div className="blog-container">
                <center>
                    <h3 className='blog-Header'>کجایی در حال اماده سازی این صفحه یباشد ، از شکیبای شما سپاس گذاریم</h3>
                </center>

                <center>
                    <section className='blog-icon'>
                        <img id="developing" className="w3-animate-opacity" src={developing}/>
                    </section>
                </center>



            </div>
        </AbsoluteWrapper>


        </>
    )

}
export default Blog;
