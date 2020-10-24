 
import React, { useState, useEffect } from 'react';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
import Slide_v2 from './slideshow_v2'
import Avatar from 'react-avatar';
 import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import join_Us_img from './1.jpg';




function MainPage () {
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
 return(
   <>
<div className="mainpage-container">
  
    {/*-----------------image & download ---------------*/}
<section className='image_and_download'> 



<div className="img_and_download-container">

<h1  className = 'where-are-u'> کجایی؟</h1>

<h2 className='come-faster'>بدو زود تر بیا !!</h2>

<div className='downlload-btn-mainpage-1'>  {button && <Button buttonStyle='btn--Bazar' buttonSize='btn--large'> </Button>} </div>

<div className='downlload-btn-mainpage-2'>  {button && <Button buttonStyle='btn--Bazar' buttonSize='btn--large'>    </Button>} </div>

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

  <h1 className='interduce-header'>معرفی برنامه</h1>
<span className='interduce-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores exercitationem aliquid? Pariatur aliquid sed praesentium quod ex omnis quam laboriosam sint veritatis perferendis, amet, ullam, perspiciatis minima iure dignissimos!</span>
   
<div className='animation-container'> 
<td><Avatar name="interduce-animation" src= {join_Us_img}   value="100%" size="200"  /></td>

</div>

  </div>


</section>
 
 {/*-----------------Toturial ---------------*/}
 <section className = 'toturial'>
 <Slide_v2 />

 </section>
  
 
 {/*-----------------join us ---------------*/}
<section className = 'join-us'>

  <div className='joingus-container'>


  <h1 className='joinus-header'>به ما بپیوندید</h1>
 



 <span className='joinus-text'>Lorem ipsum dolor sit  m, perspiciatis minima iure dignissimos!</span>
  
 <div className='join-us-img-container'> 
 <Avatar name="joinus-img" src={join_Us_img}   value="100%" size="250"  />
 
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

  


    
   



}export default MainPage;