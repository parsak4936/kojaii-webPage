import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import LOGO from './LOGO.png'
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
          <div className= "btn">
          {button && <Button buttonStyle='btn--outline'>   <i class='fa fa-download'/>   دانلود </Button>}
          </div>
       
         

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> </div>


          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          


<li className='nav-item'>
  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
  پشتیبانی
  </Link>
</li>

          <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
ارتباط با ما             </Link>
            </li>


          
           

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              خانه
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
 {/*-----------------
 
 <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           کجایی؟ </Link>
 
 ---------------*/}
        
          
      
        </div>
         <div className=' navbar-logo-img' >
          <Avatar name="LOGO" src={LOGO}   round="100px" value="80%" size="100"  />
         
         
          </div>
        
      </nav>
    </>
  );
}

export default Navbar;
