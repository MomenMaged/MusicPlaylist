import React from 'react';
import './TrackLists.css';
import Track from '../Track/Track';
import TrackPlaylist from '../TrackPlaylist/TrackPlaylist';

class TrackLists extends React.Component {
    render() {
        return (
            <div className="TrackLists">
                {
                    this.props.tracks.map(track => {
                        console.log({ab: this.props.tracks});
                        console.log({track})
                        return <TrackPlaylist track={track} 
                                        key={track.id} 
                                        onAdd={this.props.onAdd}
                                        onRemove={this.props.onRemove}
                                        isRemoval={this.props.isRemoval}/>
                    })
                }
            </div>
        )
    }
}

export default TrackLists;