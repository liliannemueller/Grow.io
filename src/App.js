import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./components/HomePage.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar.jsx"
import FoodModal from './components/FoodModal.jsx';
import ExerciseModal from './components/ExerciseModal.jsx';
import  './styles/variables.scss';


 

function App() {
 return (
  <Router>
    <Navbar/>
   <Routes>
    <Route exact path="/home" element={<HomePage />}></Route>
    <Route path="/meals" element={<FoodModal/>}></Route>
    <Route path="/exercises" element={<ExerciseModal/>}></Route>
    {/* <Route path="/account"></Route> */}
    </Routes>
  </Router>
  
 );
}
 
export default App;