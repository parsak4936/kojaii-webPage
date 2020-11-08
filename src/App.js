import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/Pages/About';
import Download from './Components/Pages/Download';
import HomePage from './Components/Pages/MainPage';
import Navbar from './Components/NavBar/nav_bar'
import sup from './Components/Pages/Support'
import  blog from './Components/Pages/Blog'



function App   () {




        return (

            <>
                <Router>


                    <Navbar />
                    <Route path='/home' exact component=  {HomePage} />
                    <Route path='/' exact component=  {HomePage} />
                    <Route path='/ContactUs' component=   {ContactUs} />
                    <Route path='/download' component={Download} />
                    <Route path='/blog' component={blog} />
                    <Route path='/support' component={sup} />

                    <Footer />
                </Router>
            </>
        );

}

export default App;



