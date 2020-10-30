import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Footer from './Components/Footer'
import About from './Components/About';
import Download from './Components/Download';
import MainPage from './Components/MainPage';


import Navbar from './Components/nav_bar'

function App   () {



        return (

<>
                <Router>
                    <Navbar />


                        <Route path='/' exact component=  {MainPage} />
                        <Route path='/about' component=   {About}    />
                        <Route path='/download' component={Download} />


                    <Footer />
                </Router>
            </>
        );

}

export default App;



