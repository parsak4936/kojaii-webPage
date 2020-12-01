import './App.css';
import ContactUs from './Components/Pages/About';
import Download from './Components/Pages/Download';
import HomePage from './Components/Pages/MainPage';
import Footer from './Components/Footer/Footer'
import $ from "jquery";
import Navbar from './Components/NavBar/nav_bar';
import sup from './Components/Pages/Support';
import  blog from './Components/Pages/Blog';
import React, {useState} from "react";
import Login from './Components/AdminPanel/Login/Login';
import Admin from './Components/AdminPanel/AdminPanel';
import {BrowserRouter, Switch, Route, Link,Redirect} from "react-router-dom";
import { useTransition, animated } from "react-spring";
import {useLocation} from "react-use";
import NotFound from './Components/Pages/404'
import ProtectedRoutes from './ProtectedRoute'

function App ()  {


    const  location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: "translate(100%, 0)" },
        enter: { opacity: 1, transform: "translate(0%, 0)" },
        leave: { opacity: 0, transform: "translate(-50%, 0)" }
    });

    //TODO : removing navbar and footer from  1)admin  , 2)404 , 3)login page
    //deactivenavbar is the name of the class with display none
    if (location.pathname ==="/admin") {
      console.log("gg")
        $('#navbarID').css("display", "none");
    }

console.log(location.pathname);

    return (
        <>
            <BrowserRouter>
                <div  id ="navbarID" className="navbar-container  ">
                    <Navbar />
                </div>
<div className="body-container">
    <main >
        {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
                <Switch location={item}>
                    <Route path='/home' exact component={HomePage} />
                    <Route path='/Login' exact component= {Login} />
                    <Route path='/' exact component= {HomePage} />
                    <Route path='/ContactUs' component=   {ContactUs} />
                    <Route path='/download' component={Download} />
                    <Route path='/blog' component={blog} />
                    <Route path='/support' component={sup} />
                    <Route path='/Admin' component={Admin} />
                    <Route  component={NotFound} />



                </Switch>
            </animated.div>
        ))}
    </main>
</div>


                <div className="footer-container">
                    <Footer />
                </div>

        </BrowserRouter>

        </>
    );

}





export default App;