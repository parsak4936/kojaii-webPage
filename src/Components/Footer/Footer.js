import React from 'react';
import './Footer.css';

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
                            target="_blank"  href="mailto:kojaii.info@gmail.com">
                            <i className='fa fa-envelope'/>
                        </a>

                        <a
                            className='social-icon-link telegram'
                            aria-label='telegram'
                            target="_blank" href=" https://web.telegram.org/#/im?p=@kojaii_ir">
                            <i className='fab fa-telegram'/>
                        </a>
                        <a
                            className='social-icon-link instagram'
                            aria-label='Instagram'
                            target="_blank" href="    https://www.instagram.com/kojaii_ir/">
                            <i className='fab fa-instagram'/>
                        </a>

                    </div>

            </div>

        </div>
    );
}
export default Footer;
