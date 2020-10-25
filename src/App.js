import React, {Component} from 'react';
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import './App.css';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Footer from './Components/Footer'
import About from './Components/About';
import Download from './Components/Download';
import MainPage from './Components/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './LOGO.png'

function App() {
    return (
        <>

            <Router>

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


                <Switch>
                    <Route path='/' exact component=  {MainPage} />
                    <Route path='/about' component=   {About}    />

                    <Route path='/download' component={Download} />
                </Switch>
                <Footer />
            </Router>





        </>
    );
}

export default App;
