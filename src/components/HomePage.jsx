import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar'
import FoodModal from './FoodModal'
import ExerciseModal from './ExerciseModal'
import '../styles/HomePage.scss'
import  '../styles/variables.scss';


function HomePage({ user }){
    const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
    return(
        // <> 
        // <div className = "macroDisplay">
        // <h1>MACRONUTRIENTS</h1>
        // </div>
        // <div className = "buttonBox"> 
        // <FoodModal></FoodModal>
        // <ExerciseModal></ExerciseModal>
        // </div>
        // </>
         <div style={{ textAlign: "center", margin: "3rem" }}>
      <h1>Dear {user?.email}</h1>

      <p>
        Login successful
      </p>

      <div>
        <button
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
        </button>
      </div>
    </div>
  );
};
//     )
// }

export default HomePage;