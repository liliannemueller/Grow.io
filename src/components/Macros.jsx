import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Macros.scss";


function Macros(props){
    return(
        <> 
        <div className = "macroDisplay">
        <h1>MACRONUTRIENTS</h1>
        </div>
        <div className = "buttonBox"> 
        <button className ="logButton">Log Food</button>
        <button className ="logButton">Log Exercise</button>
        </div>
        </>
    )
}

export default Macros;