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
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='twitter'
                        >
                            <i className='fab fa-twitter'/>

                        </Link>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='facebook'
                        >
                            <i className='fab fa-facebook'/>

                        </Link>
                        <Link
                            className='social-icon-link telegram'
                            to='/'
                            target='_blank'
                            aria-label='telegram'
                        >
                            <i className='fab fa-telegram'/>

                        </Link>

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
