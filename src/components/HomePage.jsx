import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar'
import FoodModal from './FoodModal'
import ExerciseModal from './ExerciseModal'

import "../styles/HomePage.scss";


function HomePage(props){
    return(
        <> 
        <div className = "macroDisplay">
        <h1>MACRONUTRIENTS</h1>
        </div>
        <div className = "buttonBox"> 
        <FoodModal></FoodModal>
        <ExerciseModal></ExerciseModal>
        </div>
        <NavBar></NavBar>
        </>
    )
}

export default HomePage;