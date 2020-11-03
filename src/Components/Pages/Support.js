import React from 'react';
 import './Support.css'


import { TransverseLoading } from 'react-loadingg';



function Support() {

    return(
        <>
            <div className="support-container">
                <h3 className='loader-Heade'>تیم نیگما در حال اماده ای ن صفحه یباشد ، از شکیبای شما سپاس گذاریم</h3>
                <section className='sup-icon'>
                     <TransverseLoading size = "large"  />;

                </section>


            </div>



        </>
    )

}
export default Support;
