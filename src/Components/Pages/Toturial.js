import React from 'react';
import Avatar from 'react-avatar';

import toturial_img_1 from 'C:/Users/PK.LUBU/Desktop/Kojaii_web_APP/kojaii/src/Components/Pages/1.jpg';


export default function Toturial() {
  return(<> 
 
  
<h1 className='header-for-images'>Nigma</h1>
<section className='info'>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolores inventore pariatur quisquam obcaecati deserunt sunt! Earum, saepe fugit culpa alias dignissimos repellendus tenetur temporibus quidem, sapiente accusantium inventore maiores!</p>

</section>

 {/*-----------------profile pics (masoud) ---------------*/}
 
<div className= 'images'>

<div className='images-section'>
<Avatar name="Masoud" src={toturial_img_1}    value="100%" size="250"  />
<h2 className='masoud-header'>مسعود حاجی زاده</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam veniam at. Pariatur odit quia in eaque eum doloremque consectetur, eveniet nostrum laudantium. Repellat optio obcaecati ab aliquid corrupti non?</p>
</div>


{/*-----------------profile pics (najafi) ---------------*/}

<div  className='images-section' >
<Avatar name="Najafi" src={toturial_img_1}  value="100%" size="250"  />
<h2 className='nafaji-header' >امیر حسین نجفی</h2>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quibusdam mollitia? Magni quia explicabo minus repudiandae doloribus dicta numquam inventore velit expedita, nam sit eius accusantium quaerat illo. Similique, ullam!</p>
</div>


{/*-----------------profile pics (parsa) ---------------*/}

<div  className='images-section' >

<Avatar name="Parsa" src={toturial_img_1}   value="10%" size="250"  />
<h2 className='parsa-header'>مسیر رو انتخاب کن </h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at saepe adipisci quae quod tenetur quo beatae quasi. Reprehenderit iusto impedit debitis eligendi officia? Et nisi dicta a quos eligendi!</p>
</div>

   {/*-----------------profile pics (parsa) ---------------*/}

<div  className='images-section' >
<Avatar name="Parsa" src={toturial_img_1}   value="10%" size="250"  />
<h2 className='parsa-header'>مسیر رو انتخاب کن </h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at saepe adipisci quae quod tenetur quo beatae quasi. Reprehenderit iusto impedit debitis eligendi officia? Et nisi dicta a quos eligendi!</p>
</div>

{/*-----------------profile pics (parsa) ---------------*/}

<div  className='images-section' >
<Avatar name="Parsa" src={toturial_img_1}   value="10%" size="250"  />
<h2 className='parsa-header'>مسیر رو انتخاب کن </h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at saepe adipisci quae quod tenetur quo beatae quasi. Reprehenderit iusto impedit debitis eligendi officia? Et nisi dicta a quos eligendi!</p>
</div>

{/*-----------------profile pics (parsa) ---------------*/}

<div  className='images-section' >
<Avatar name="Parsa" src={toturial_img_1}   value="10%" size="250"  />
<h2 className='parsa-header'>مسیر رو انتخاب کن </h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at saepe adipisci quae quod tenetur quo beatae quasi. Reprehenderit iusto impedit debitis eligendi officia? Et nisi dicta a quos eligendi!</p>
</div>
    
   

    </div>
  
  
  
  
  </>); 
  
  
}
