import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
 //   <i class='fab fa-typo3' />
  return (
    <div className='footer-container'>
   
     
        <div class='social-media-wrap'>


          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
             کجایی؟
           
            </Link>
          </div>


          <small class='website-rights'>  © 2020</small>


          <div class='social-icons'>
            <Link
              class='social-icon-link telegram'
              to='/'
              target='_blank'
              aria-label='telegram'
            >
              <i class='fab fa-telegram' />
              
            </Link>


            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

           
          </div>
        </div>
      
    </div>
  );
}

export default Footer;
