import React from "react";
import "../SearchBar/SearchBar.css";
import { Link } from "react-router-dom";
import "../buttonn.css";
import "./img.css";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
function Profile() {
  return (
    <div>
      <div>
        <h1>
        <Sidebar/>  Music <span className="highlight">Playlist</span> Generator
        <Link to="/home"><button className="buttonn">Back</button></Link>  </h1>
        <h4>
          <span className="profile">Profile</span>
        </h4>
      </div>
      <div className="both1">
        <div className="Home4">
          <img
            className="imggg"
            src="https://icones.pro/wp-content/uploads/2021/05/symbole-de-l-homme-violet.png"
          ></img>
        </div>
        <div className="Home5">
          <h3 Style="color:White">Name : Ahmed mohamed </h3>
          <h3 Style="color:White">Email : ahmed@gmail.com</h3>
          <h3 Style="color:White">Age : 21</h3>
          <h3 Style="color:White">Playlists : 4</h3>
        </div>
      </div>
      <div className="SearchBar">
       
        <Link to="/app">
          <button className="button">Edit</button>
        </Link>
        <br />
        <Link to="/">
          <button className="button">
            <br />
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
