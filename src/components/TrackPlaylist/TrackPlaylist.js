import React from "react";
import "./TrackPlaylist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


class TrackPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: new Audio(this.props.track.preview),
      isPlaying: false,
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <FontAwesomeIcon icon={faPlus} className="Track-action" onClick={this.removeTrack}/>
    }
  }
  
  renderArtist() {
    if (!this.props.isRemoval) {
      return (
        <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
      )
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  playAudio() {
    this.state.audio.play();
    this.setState({
      isPlaying: true,
    });
  }

  pauseAudio() {
    this.state.audio.pause();
    this.setState({
      isPlaying: false,
    });
  }

  renderAudio() {
    if (this.state.isPlaying) {
      return <FontAwesomeIcon icon={faPause} className="Track-action" onClick={this.pauseAudio}/> 
    } else if (!this.state.isPlaying) {
      return <FontAwesomeIcon icon={faPlay} className="Track-action" onClick={this.playAudio}/>;
    }
  }

  render() {
    return (
      <div className="TrackPlaylist">
        <img className={this.props.isRemoval ? "imgg" : ""} src={this.props.track.image} alt="" />
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          {this.renderArtist()}
        </div>
       {this.renderAction()}
      </div>
    );
  }
}

export default TrackPlaylist;
