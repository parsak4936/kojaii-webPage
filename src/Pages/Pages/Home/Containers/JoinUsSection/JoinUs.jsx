import React, {useEffect, useState} from "react";
import ScrollAnimation from "react-animate-on-scroll";
import join_Us_img from "../../../../../assets/Images/Joinus.svg";
import $ from "jquery";
import axios from "axios";
import './JoinUs.css'
function JoinUsSection (props){

    const [change,setChange]=useState("")
    const [submit,setSubmit]= useState("")

    const url = 'https://kojaii.herokuapp.com/api/join-us'


    useEffect(() => {

    }, []);

  const  handleChange = (e) => {
      setChange(e.target.value);
  }

  const  handleSubmit = (event) => {
      const  name = $("#name").val();
      const phone = $("#phone").val();
      axios.post(url, {
          phone: phone,
          name: name
      })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log( error);
          });
        event.preventDefault();
    }


    return(
        <section className='join-us'>

            <div className='joingus-container'>

                < div align="center" className='joinus-header'>
                    <ScrollAnimation animateIn='animate__fadeIn'>
                        <h1>به ما بپیوندید</h1>
                    </ScrollAnimation>
                </div>


                <div className='joinus-text'>
                    <ScrollAnimation animateIn='animate__flipInY'>
                        <p align="center" id="join-us-text">
                            کجایی همواره به دنبال جذب افراد مستعد و باانگیزه میباشد. اگر به کاری که می کنید
                            علاقه و به مهارت های خود اطمینان دارید، جای شما در تیم ما خالی است.
                        </p>
                    </ScrollAnimation>

                </div>


                <center>

                    <div className="join-us-form">
                        <ScrollAnimation animateIn='animate__bounceInLeft'
                                         animateOut='animate__bounceOutLeft'>
                            <form onSubmit={handleSubmit}>

                                <input className="join-us-param-name join-us-input" name="name" id="name"
                                       onChange={handleChange} type="text"
                                       placeholder="نام خود را وارد کنید"/>
                                <input className="join-us-param-phone join-us-input" name="phone" id="phone"
                                       onChange={handleChange} type="text"
                                       placeholder="شماره خود را وارد کنید"/>
                                <br/>
                                <br/>
                                <button className="btn join-us-btn btn-outline-info" type="submit">ارسال
                                    درخواست
                                </button>

                                <br/>
                                <br/>
                            </form>
                        </ScrollAnimation>

                    </div>
                </center>


                <div className='join-us-img-container'>

                    <img className="join-us-image" name="joinus-img" src={join_Us_img} alt=" "/>

                </div>


            </div>


        </section>
    );
}
export default JoinUsSection