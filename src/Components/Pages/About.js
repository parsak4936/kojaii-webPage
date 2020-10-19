import React from 'react';
import Avatar from 'react-avatar';
import img1 from './1.jpg'
import img2 from './2.jpg'
import './About.css'
import img3 from './3.jpg'

 function About() {
 
  return(
<>
 {/*-----------------team infoes ---------------*/}
<h1 className='header-for-images'>Nigma</h1>
<section className='info'>

<p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad totam, inventore, veniam voluptates possimus fugiat at voluptatem hic nihil quasi, temporibus iure quidem? Optio quae sed voluptatem veritatis at?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident aut, harum molestiae iusto voluptate, ab dolorem esse perferendis soluta, consequuntur et similique. Voluptatem et repudiandae incidunt dolore voluptatum enim? Ut?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolores inventore pariatur quisquam obcaecati deserunt sunt! Earum, saepe fugit culpa alias dignissimos repellendus tenetur temporibus quidem, sapiente accusantium inventore maiores!</p>

</section>
 {/*-----------------profile pics (masoud) ---------------*/}
<div className= 'images'>

<div className='images-section'>
<Avatar name="Masoud" src={img1}  round="150px" value="100%" size="250"  />
<h2 className='masoud-header'>مسعود حاجی زاده</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam veniam at. Pariatur odit quia in eaque eum doloremque consectetur, eveniet nostrum laudantium. Repellat optio obcaecati ab aliquid corrupti non?</p>
</div>


{/*-----------------profile pics (najafi) ---------------*/}
<div  className='images-section' >
<Avatar name="Najafi" src={img2} round="150px" value="100%" size="250"  />
<h2 className='nafaji-header' >امیر حسین نجفی</h2>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quibusdam mollitia? Magni quia explicabo minus repudiandae doloribus dicta numquam inventore velit expedita, nam sit eius accusantium quaerat illo. Similique, ullam!</p>
</div>

{/*-----------------profile pics (parsa) ---------------*/}
<div  className='images-section' >
<Avatar name="Parsa" src={img3} round="150px" value="10%" size="250"  />
<h2 className='parsa-header'>پارسا کاظمی</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at saepe adipisci quae quod tenetur quo beatae quasi. Reprehenderit iusto impedit debitis eligendi officia? Et nisi dicta a quos eligendi!</p>
</div>
   
    
   

    </div>
  

   

    </>
  ) 
  
}
export default About;
