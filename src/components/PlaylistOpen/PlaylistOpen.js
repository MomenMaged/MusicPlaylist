import React from "react";
import "./PlaylistOpen.css";
import TrackList from "../TrackList/TrackList";
import TrackLists from "../TrackLists/TrackLists";

class PlaylistOpen extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="PlaylistOpen">
       <h1>Playlists</h1>
        <TrackLists
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
       
      </div>
    );
  }
}

export default PlaylistOpen;
