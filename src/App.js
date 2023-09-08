import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Macros from "./components/Macros.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
//import scss style sheet

import Navbar from "./components/NavBar.jsx"
// import ExercisesList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercise.component";
// import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";
 

function App() {
 return (
  <Router>
  <div className="container">
     
  <Navbar />
  <br/>
    {/* <Route path="/" exact component={ExercisesList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user" component={CreateUser} /> */}
  </div>
  <Macros></Macros>
   </Router>
  
 );
}
 
export default App;