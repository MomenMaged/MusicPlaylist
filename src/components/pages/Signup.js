import React from 'react'
import "../SearchBar/SearchBar.css"
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div>
      <h1 >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Music <span className="highlight">Playlist</span> Generator
          <Link to="/"><button className="buttonn">Back</button></Link>
          </h1>
         
    <div className="SearchBar">
      <h1><span className="highlight">Sign up</span></h1>
      <input
          placeholder="Enter full name"
        />
        <input
          placeholder="Enter new Username"
        />
        <input
          placeholder="Enter new Password"
        />
         <input
          placeholder="Enter new email"
        />
         <input
          placeholder="Enter age"
        />

        <Link to="/"><button className="button">Sign up</button></Link>
  
      </div> 
      </div>
   )
}

export default Signup