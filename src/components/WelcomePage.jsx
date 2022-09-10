import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const nav = useNavigate();

  return (
    <div>
      <h1>Welcome Page!</h1>
      <button
      style={{color:'yellowGreen',padding:'15px'}}
        onClick={() => {
          nav("/fulllist");
        }}
      >
           
        Full list
                    
      </button>

      <button
      style={{marginLeft:'10px',color:'blue',padding:'15px'}}
        onClick={() => {
          nav("/add");
        }}
      >
        Add New Task
      </button>
    </div>
  );
}

export default WelcomePage;
