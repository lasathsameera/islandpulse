import React from 'react';
import TrackPlayer from 'react-native-track-player';

class PlayerInfo extends React.Component {

    componentDidMount() {
        // Adds an event handler for the playback-track-changed event
        this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
            
            const track = await TrackPlayer.getTrack(data.nextTrack);
            this.setState({trackTitle: track.title});
            
        });
    }
    
    componentWillUnmount() {
        // Removes the event handler
        this.onTrackChange.remove();
    }
  
    render() {
        return (
            <Text>{this.state.trackTitle}</Text>
        );
    }
  
  }