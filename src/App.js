import React from 'react';
import NavBar from './Components/nav_bar'
import './App.css';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Footer from './Components/Footer'
import About from './Components/Pages/About';
import Toturial from './Components/Pages/Toturial';
import Download from './Components/Pages/Download';
import MainPage from './Components/Pages/MainPage';

function App() {
  return (
   <>
  <Router>
  <NavBar/>
<Switch>
<Route path='/' exact component={MainPage} />
 
<Route path='/about' component={About} />

          <Route path='/toturial' component={Toturial} />
          <Route path='/download' component={Download} />
</Switch>
<Footer />
   </Router>
  
  
    </>
  );
}

export default App;
