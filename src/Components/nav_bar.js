import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import LOGO from './LOGO.png'
import './nav_bar.css';
import logo from "../LOGO.png";

function Nav_bar() {

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


  return (
    <>
        <Navbar className="nav_bar" collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" width="160px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navbar-Item ">
                <Nav className="mr-auto">
                    <Nav.Link className="item" href="/">خانه</Nav.Link>
                    <Nav.Link className="item" href="/">پشتیبانی</Nav.Link>

                    <Nav.Link className="item" href="/about">ارتباط با ما</Nav.Link>
                    <Nav.Link className="item" href="/blog">بلاگ</Nav.Link>
                </Nav>

                <Nav>

                    <Nav.Link href="#download">
                        <Button className="download" variant="outline-light">دانلود <i className='fa fa-download'/></Button>{' '}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    </>
  );
}

export default Nav_bar;
