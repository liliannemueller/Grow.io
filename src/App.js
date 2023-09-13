import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from "./components/HomePage.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
//import scss style sheet

import Navbar from "./components/NavBar.jsx"

 

function App() {
 return (
  <Router>
  <div className="container">
  <br/>
    
  </div>
  <HomePage></HomePage>
   </Router>
  
 );
}
 
export default App;