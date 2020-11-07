import React from 'react';
import './Blog.css'


import { TransverseLoading } from 'react-loadingg';



function Blog() {

    return(
        <>
            <div className="blog-container">
                <h3 className='blog-Header'>تیم نیگما در حال اماده ای ن صفحه یباشد ، از شکیبای شما سپاس گذاریم</h3>
                <section className='blog-icon'>
                    <TransverseLoading size = "large" style={{position:'relative', display:'flex' }}  />;

                </section>


            </div>



        </>
    )

}
export default Blog;
