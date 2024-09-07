import React from "react";
import '../App/App.css';
import './Playlistpage.css'
import SearchBar from "../SearchBar/SearchBar";
import PlaylistResults from "../PlaylistsResults/PlaylistsResults";
import Track from '../Track/Track'; 
import PlaylistOpen from "../PlaylistOpen/PlaylistOpen";
import Spotify from "../../util/Spotify";
import '../buttonn.css';
// import reactBrands from "./react-brands.png";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import SearchBarplay from "../SearchBarplay/SearchBarplay";
import { faPlay, faPause, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const audioList = [
  
    
  {
    id: 1,
    name: "Hip hop",
   
    // uri: track.uri,
    preview: "https://serv10.mrmazika.com/dl/th/tamer-hosny/albums/omry-ebtdaa/01._Omry_Ebtada.mp3",
    image: "hip hop.jpg"
  },
  {
    id: 2,
    name: "Drama",
   
    // uri: track.uri,
    preview: "http://streaming.tdiradio.com:8000/house.mp3",
    image: "drama.jpg"
  },
  
]


const resultList = [
  
    
  {
    id: 1,
    name: "3esh bsho2ak",
    artist: "Tamer Hosny",
    album: "3esh bsho2qk",
    type: "Hip hop",
    preview: "https://serv10.mrmazika.com/dl/th/tamer-hosny/albums/omry-ebtdaa/01._Omry_Ebtada.mp3",
    image: "Tamer.jpg"
  },
  {
    id: 2,
    name: "Awlny klam",
    artist: "Tamer Hosny",
    album: "Khalek folazy",
    type: "Hip hop",
    preview: "http://streaming.tdiradio.com:8000/house.mp3",
    image: "Tamer.jpg"
  },
  {
  id: 3,
    name: "Nasene leh",
    artist: "Tamer Hosny",
    album: "3esh bsho2ak",
    type: "Drama",
    preview: "https://serv10.mrmazika.com/songs_2024/MrMaZiKa.Com_krym_dyskw_klbi_dh_rah_mny.mp3",
    image: "Tamer.jpg"
  },
  {
    id: 4,
    name: "El lela",
    artist: "amr diab",
    album: "El lela",
    type: "Hip hop",
    preview: "http://streaming.tdiradio.com:8000/house.mp3",
    image: "amr.png"
  },
  {
    id: 5,
    name: "Youm ma etablna",
    artist: "amr diab",
    album: "el lelady",
    type: "Drama",
    preview: "http://streaming.tdiradio.com:8000/house.mp3",
    image: "amrr.jpg"
  },
  {
    id: 6,
    name: "Nadana",
    artist: "hamaki",
    album: "Ya fateny",
    type: "Hip hop",
    preview: "http://streaming.tdiradio.com:8000/house.mp3",
    image: "hamaki.jpg"
  },
  {
    id: 7,
    name: "Aref habibi",
    artist: "amr diab",
    album: "El lela",
    type: "Drama",
    preview: "http://streaming.tdiradio.com:8000/house.mp3",
    image: "amrr.jpg"
  },
  {
    id: 8,
    name: "Kfyak a3zar",
    artist: "tamer hosny",
    album: "3esh bsho2ak",
    type: "Drama",
    preview: "http://streaming.tdiradio.com:8000/house.mp3",
    image: "Tamer.jpg"
  }
]


class Playlistpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: resultList,
      playlistName: "Edit Playlist Name",
      playlistTracks: audioList,
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    //this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.viewTracks = this.viewTracks.bind(this);
  }


  viewTracks(tracksType){
    const result = resultList.filter((track) => track.type === tracksType.name);
    this.setState({ searchResults: result });
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
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      });
    });
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
         
         <Sidebar/>&nbsp;Music <span className="highlight">Playlist</span> Generator
         <Link to="/home"><button className="buttonn">Back</button></Link>
      
        </h1>
        <div className="Playlistpage">
        
          <div className="Playlistpage-playlist">
            <PlaylistResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              onRemove={this.viewTracks}
              
            />
            <PlaylistOpen
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.viewTracks}
              onNameChange={this.updatePlaylistName}
             
            />
          </div>
          
        </div>
      </div>
    );
  }
}

export default Playlistpage;
