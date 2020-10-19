import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './nav_bar.css';
import Avatar from 'react-avatar';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
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

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        {button && <Button buttonStyle='btn--outline'>   <i class='fa fa-download'/>   دانلود </Button>}
         

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> </div>


          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
درباره ما              </Link>
            </li>


          
            <li className='nav-item'>
              <Link
                to='/toturial'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                آموزش برنامه 
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
               صفحه ی اصلی
              </Link>
            </li>


           


            <li>
              <Link
                to='/download'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                   <i class='fa fa-download'/>
                   <span>  </span>
               دانلود
              
              </Link>
            </li>



          </ul>

          <div className='navbar-logo-img' >
          <Avatar name="LOGO" src='./logo192.png'    value="100%" size="70"  />
         
          </div>
        
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           کجایی؟ </Link>
      
        </div>
      </nav>
    </>
  );
}

export default Navbar;
