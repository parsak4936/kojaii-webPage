import React from 'react';
import './Footer.css';

import {Link} from 'react-router-dom';

function Footer() {
    //   <i class='fab fa-typo3' />
    return (
        <div className='footer-container'>


            <div class='social-media-wrap'>


                <div class='footer-logo'>
                    <p className='social-logo'>
                        تمام حقوق مالی و معنوی این سایت متعلق به کجایی است ©

                    </p>
                </div>
                <center>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='twitter'
                        >
                            <i class='fab fa-twitter'/>

                        </Link>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='facebook'
                        >
                            <i class='fab fa-facebook'/>

                        </Link>
                        <Link
                            class='social-icon-link telegram'
                            to='/'
                            target='_blank'
                            aria-label='telegram'
                        >
                            <i class='fab fa-telegram'/>

                        </Link>

                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram'/>
                        </Link>


                    </div>
                </center>
            </div>

        </div>
    );
}

export default Footer;
