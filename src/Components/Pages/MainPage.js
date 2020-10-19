 
import React, { useState, useEffect } from 'react';
import { Button } from 'C:/Users/PK.LUBU/Desktop/Kojaii_web_APP/kojaii/src/Components/Button.js';
import { Link } from 'react-router-dom';
 
import Avatar from 'react-avatar';
import BGimg from 'C:/Users/PK.LUBU/Desktop/Kojaii_web_APP/kojaii/src/Components/Pages/MP_Backgound.jpg';
import './MainPage.css';

import join_Us_img from 'C:/Users/PK.LUBU/Desktop/Kojaii_web_APP/kojaii/src/Components/Pages/1.jpg';


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

    {/*-----------------image & download ---------------*/}
<section className='image_and_download'> <h1  className = 'where-are-u'> کجایی؟</h1>
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
  

  
<div className='main-page-bk-container'>
<img className = 'MP-image'  src={BGimg} alt=""/>
</div>

</section>
   

   {/*----------------- intrduce part ---------------*/}
<section className='interduce'>
  <div className='interduce-container'>

  <h1 className='interduce-header'>معرفی</h1>
<span className='interduce-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores exercitationem aliquid? Pariatur aliquid sed praesentium quod ex omnis quam laboriosam sint veritatis perferendis, amet, ullam, perspiciatis minima iure dignissimos!</span>
   
<div className='animation-container'> 
<Avatar name="interduce-animation" src= {join_Us_img}   value="100%" size="200"  />

</div>

  </div>


</section>

 {/*-----------------join us ---------------*/}
<section className = 'join-us'>
<h1 className='joinus-header'>به ما بپیوندید</h1>
 



<span className='joinus-text'>Lorem ipsum dolor sit  m, perspiciatis minima iure dignissimos!</span>
 
<div className='join-us-img-container'> 
<Avatar name="joinus-img" src={join_Us_img} round="150px" value="100%" size="250"  />

</div>

 

</section>
 
 

 </>
 );

  


    
   


}export default MainPage;