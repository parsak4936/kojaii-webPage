import React from 'react';
import './Blog.css'


import { TransverseLoading } from 'react-loadingg';



function Blog() {

    return(
        <>
            <div className="blog-container">
                <h3 className='blog-Heade'>تیم نیگما در حال اماده ای ن صفحه یباشد ، از شکیبای شما سپاس گذاریم</h3>
                <section className='blog-icon'>
                    <TransverseLoading size = "large"  />;

                </section>


            </div>



        </>
    )

}
export default Blog;
