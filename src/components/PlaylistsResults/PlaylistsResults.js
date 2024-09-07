import React from "react";
import "./PlaylistResults.css";
import TrackLists from "../TrackLists/TrackLists";
import SearchBarplay from "../SearchBarplay/SearchBarplay";
import TrackList from "../TrackList/TrackList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


class PlaylistResults extends React.Component {
  render() {
    return (
      <div className="PlaylistResults">
        
        <h2>Results</h2>
        <TrackLists
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isRemoval={false}
        />
      </div>
    );
  }
}

export default PlaylistResults;
