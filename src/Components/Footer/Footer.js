import React from 'react';
import './Footer.css';

import {Link} from 'react-router-dom';

function Footer() {
  
    return (
        <div className='footer-container'>




            <div className='social-media-wrap'>


                <div className='footer-logo'>
                    <p className='social-logo'>
                        تمام حقوق مالی و معنوی این سایت متعلق به کجایی است ©

                    </p>
                </div>

                    <div className='social-icons'>
                        <a
                            className='social-icon-link twitter'
                            aria-label='twitter'
                            target="_blank" href=" https://web.telegram.org/#/im?p=@kojaii_ir">
                            <i className='fab fa-twitter'/>
                        </a>




                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='facebook'
                        >
                            <i className='fab fa-facebook'/>

                        </Link>
                        <a
                            className='social-icon-link telegram'
                            aria-label='telegram'
                            target="_blank" href=" https://web.telegram.org/#/im?p=@kojaii_ir">
                            <i className='fab fa-telegram'/>
                        </a>



                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'/>
                        </Link>


                    </div>

            </div>

        </div>
    );
}

export default Footer;
