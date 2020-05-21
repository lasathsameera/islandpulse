import React from 'react'

import { View, Image,Text,StyleSheet,TouchableOpacity, Platform, Alert, ToastAndroid} from 'react-native';

import TrackPlayer from 'react-native-track-player';

import Slider from '@react-native-community/slider';

state = {
  value: 0
};



start = async () => {
  // Set up the player
  await TrackPlayer.setupPlayer();

  // Add a track to the queue
  await TrackPlayer.add({
      id: 'trackId',
      url: require('./android/app/src/main/res/raw/kalpa_kalayak_pura.mp3'),
      title: 'Track Title',
      artist: 'Track Artist',
      artwork: require('./resources/ui_play.png')
  });

  // Start playing it
  // await TrackPlayer.play();
};

start();

pause = async () =>{

  await TrackPlayer.pause();

}

play = async () =>{

  await TrackPlayer.play();

}
mute = async () =>{



  await TrackPlayer.setVolume(0);

}

handleSliderChange = async (value) => {
  await TrackPlayer.setVolume(value);
}


  const App: () => React$Node = () => {
    return (
      <>
        <View style={style.container}>
      <TouchableOpacity>
        <Text style={style.buttonText} onPress={this.play}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity>
  <Text style={style.buttonText} onPress={this.pause}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity>
  <Text style={style.buttonText} onPress={this.min}>min</Text>
      </TouchableOpacity>
      <TouchableOpacity>
  <Text style={style.buttonText} onPress={this.max}>Max</Text>
      </TouchableOpacity>  
      <TouchableOpacity>
  <Text style={style.buttonText} onPress={this.mute}>Mute</Text>
      </TouchableOpacity>
      <Slider
    style={{width: 200, height: 40}}
    value={this.state.value}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
    onValueChange={this.handleSliderChange}
  />
    </View>
      </>
     
    );
  };


  export default App;

  const style = StyleSheet.create({

    container: {
  
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    slider: {
      height: 45,
      width: '80%',
    }
  });

