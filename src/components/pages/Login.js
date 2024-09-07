import React from 'react'
import "../SearchBar/SearchBar.css"
import { Link } from "react-router-dom";
function Login() {
  return (
  <div>
 <h1 >
          Music <span className="highlight">Playlist</span> Generator</h1>
    <div className="SearchBar">
       
      <h1><span className="highlight">Login</span></h1>
        <input
          placeholder="Username"
        />
         <input
          placeholder="Password"
        />
        <Link to="/home"><button className="button">Login</button></Link>
        <div><Link to="/Signup"><text><br/>Signup</text></Link></div>
        
  
      </div> 
      </div>
   )
}

export default Login