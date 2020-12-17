import './App.css';
import ContactUs from './Components/Pages/About';
import Download from './Components/Pages/Download';
import HomePage from './Components/Pages/MainPage';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/NavBar/nav_bar';
import sup from './Components/Pages/Support';
import blog from './Components/Pages/Blog';
import React, {useState} from "react";
import Login from './Components/AdminPanel/Login/Login';
import Admin from './Components/AdminPanel/AdminPanel';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useTransition, animated} from "react-spring";
import {useLocation} from "react-use";
import NotFound from './Components/Pages/404'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset , ThemeProvider } from '@material-ui/core/styles';
import CustomTheme from "./assets/CustomTheme";
import ProtectedRoute from './ProtectedRoute'
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function App() {
    const location = useLocation()
    const [user, setUser] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        setUser(true);
    }
    const handleLogout = e => {
        e.preventDefault();
        setUser(false);
    }
    const transitions = useTransition(location, location => location.pathname, {
        from: {opacity: 0, transform: "translate(100%, 0)"},
        enter: {opacity: 1, transform: "translate(0%, 0)"},
        leave: {opacity: 0, transform: "translate(-50%, 0)"}
    });


//    if (location.pathname === "/Admin") {
    //    console.log("gg");
//        $('#nav-menu').attr('style', 'display: none !important');
//        $('.footer-container').attr('style', 'display: none !important');
 //   }
  //  console.log(location.pathname);
   
    return (


        <ThemeProvider theme={CustomTheme}>
        <StylesProvider jss={jss}>
            <BrowserRouter>
                <div id="navbarID" className="navbar-container  ">
                    <Navbar/>
                </div>
                <div className="body-container">
                    <main>
                        {transitions.map(({item, props, key}) => (
                            <animated.div key={key} style={props}>
                                <Switch location={item}>
                                    <Route path='/' exact component={HomePage}/>
                                    <Route path='/ContactUs' component={ContactUs}/>
                                    <Route path='/download' component={Download}/>
                                    <Route path='/blog' component={blog}/>
                                    <Route path='/support' component={sup}/>
                                    <ProtectedRoute exact path='/admin' user={user} handleLogout={handleLogout} component={Admin} />
                                    <Route exact path='/Login' handleLogin={handleLogin} render={
                                        props => <Login {...props} user={user.toString()} handleLogin={handleLogin} />} />

                                     <Route component={NotFound}/>

                                </Switch>
                            </animated.div>
                        ))}
                    </main>
                </div>
                <div className="footer-container">
                    <Footer/>
                </div>

            </BrowserRouter>

           </StylesProvider>
        </ThemeProvider>
    );

}
export default App;