import React from 'react'
import "../SearchBar/SearchBar.css"
import "./Home.css"
import { Link } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
function Home() {
  return (
  <div>
 <h1 >
 <Sidebar/>  Music <span className="highlight">Playlist</span> Generator</h1>
         
    <div className="SearchBar">
    <h1><span className="highlight">Home</span></h1>
       
      <div className='Home'></div>
      <Link to="/app" ><button className='button2'>Search</button></Link>
       </div>
       <div className='both'>
        <div className='Home2'><Link to="/page"><button className="button2">Playlists</button></Link></div>
        <div className='Home3'><Link to="/profile"><button className="button3">Profile</button></Link></div>
        </div>
        
     
      </div> 
      
   )
}

export default Home