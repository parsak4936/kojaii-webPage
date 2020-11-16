import './App.css';
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/Pages/About';
import Download from './Components/Pages/Download';
import HomePage from './Components/Pages/MainPage';
import Navbar from './Components/NavBar/nav_bar'
import sup from './Components/Pages/Support'
import  blog from './Components/Pages/Blog'
import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { useTransition, animated } from "react-spring";
import {useLocation} from "react-use";
import $ from "jquery";
import ScrollToTop from 'react-scroll-up'

const App = () => {

    const  location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: "translate(100%, 0)" },
        enter: { opacity: 1, transform: "translate(0%, 0)" },
        leave: { opacity: 0, transform: "translate(-50%, 0)" }
    });
     return (
        <>
            <BrowserRouter>
            <Navbar />
            <main >
                {transitions.map(({ item, props, key }) => (
                    <animated.div key={key} style={props}>
                        <Switch location={item}>
                            <Route path='/home' exact component={HomePage} />
                            <Route path='/' exact component= {HomePage} />
                            <Route path='/ContactUs' component=   {ContactUs} />
                            <Route path='/download' component={Download} />
                            <Route path='/blog' component={blog} />
                            <Route path='/support' component={sup} />
                        </Switch>
                    </animated.div>
                ))}
            </main>
                <ScrollToTop showUnder={160}>
                    <i className='fas fa-arrow-circle-up  fa-3x' />
                </ScrollToTop>



            <Footer />
        </BrowserRouter>
        </>
    );

};
export default App;