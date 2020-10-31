import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/Pages/About';
import Download from './Components/Pages/Download';
import HomePage from './Components/Pages/MainPage';


import Navbar from './Components/NavBar/nav_bar'

function App   () {



        return (

<>
                <Router>
                    <Navbar />


                        <Route path='/home' exact component=  {HomePage} />
                        <Route path='/ContactUs' component=   {ContactUs}    />
                        <Route path='/download' component={Download} />


                    <Footer />
                </Router>
            </>
        );

}

export default App;



