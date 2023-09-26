import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar'
import FoodModal from './FoodModal'
import ExerciseModal from './ExerciseModal'
import '../styles/HomePage.scss'
import  '../styles/variables.scss';


function HomePage({ user }){
    return(
        
      <div style={{ textAlign: "center", margin: "3rem" }}>
      <h1>Welcome {user?.email}</h1>
         <> 
         <div className = "macroDisplay">
        
         </div>
         <div className = "buttonBox"> 
         <FoodModal></FoodModal>
         <ExerciseModal></ExerciseModal>
     </div>
         </>
      <div>
        {/* <button
          onClick={logout}
          style={{
            color: "red",
            border: "1px solid gray",
            backgroundColor: "white",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Logout
        </button> */}
      </div>
    </div>
  );
};


export default HomePage;