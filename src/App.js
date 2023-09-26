import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from "./components/HomePage.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar.jsx"
import FoodModal from './components/FoodModal.jsx';
import ExerciseModal from './components/ExerciseModal.jsx';
import  './styles/variables.scss';
import Landing from './components/Landing.jsx';
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
 

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);
 return (
  <Router>
    <Navbar/>
   <Routes>
    <Route exact path="/home" element={user?.email ? <HomePage user={user} /> : <Navigate to ="/" />}></Route>
    <Route path="/meals" element={<FoodModal/>}></Route>
    <Route path="/exercises" element={<ExerciseModal/>}></Route>
    <Route path="/" element={user?.email ? <Navigate to="/home" /> : <Landing/>}></Route>
    <Route path="/signup" element={user?.email ? <Navigate to="/signup" /> : <Signup/>}></Route>
    <Route path="/login" element={user?.email ? <Navigate to="/login" /> : <Login/>}></Route>
    </Routes>
  </Router>
  
 );
}
 
export default App;