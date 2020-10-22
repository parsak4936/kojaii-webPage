import React from 'react';
import NavBar from './Components/nav_bar'
import './App.css';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Footer from './Components/Footer'
import About from './Components/About';
 
import Download from './Components/Download';
import MainPage from './Components/MainPage';

function App() {
  return (
   <>

  <Router>
  
  <NavBar/>
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
