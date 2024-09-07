import React from "react";
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import  SearchResults  from '../SearchResults/SearchResults';
import Track from '../Track/Track';
import Playlist from '../Playlist/PlayList';
import Spotify from "../../util/Spotify";
import '../buttonn.css';
import reactBrands from "./react-brands.png";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Playlistpage from "../pages/Playlistpage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "Edit Playlist Name",
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map((track) => track.uri);
    console.log({state: this?.state?.playlistTracks})
    // Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
    //   this.setState({
    //     playlistName: "New Playlist",
    //     playlistTracks: [],
    //   });
    // });
  }

  search(term) {
    console.log("Here");
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }
  render() {
    return (
      <div>
         <h1>
         
         <Sidebar/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Music <span className="highlight">Playlist</span> Generator
      <Link to="/home"><button className="buttonn">Back</button></Link>
     
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
             onSave={this.savePlaylist}
            />
          </div>
          <p className="signature">
           
            <span>
              Built with <img src={reactBrands} alt="" className="reactLogo" />
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
