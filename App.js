import React from 'react'

// import React, {Component} from 'react';

import { View, Image,Text,StyleSheet,TouchableOpacity, Platform, Alert,ToastAndroid, ImageBackground} from 'react-native';

// import TrackPlayer from 'react-native-track-player';

// import Slider from '@react-native-community/slider';

// import Swave from 'swave';

// import './Player.js'


export default function App(){

  // state = {
  //   value: 0
  // };

//   let url= require('./android/app/src/main/res/raw/kalpa_kalayak_pura.mp3');

//   let swave = new Swave({audioUrl: url});
// swave.play();

  // Set up the player
  //  TrackPlayer.setupPlayer();

  // // Add a track to the queue
  //  TrackPlayer.add({
  //     id: 'trackId',
  //     url: require('./android/app/src/main/res/raw/kalpa_kalayak_pura.mp3'),
  //     title: 'Track Title',
  //     artist: 'Track Artist',
  //     artwork: require('./resources/ui_play.png')
  // });

  // pause = async () =>{

  //   await TrackPlayer.pause();
  
  // }
  
  // play = async () =>{
  
  //   await TrackPlayer.play();
  
  // }
  // mute = async () =>{
  
  //   await TrackPlayer.setVolume(0);
  
  // }
  
  // handleSliderChange = async (value) => {
  //   await TrackPlayer.setVolume(value);
  // }

  return (
    <>
    <View style={style.container}>
    <Image source={require('./resources/pulse.png')} style={style.backgroundImage} />
    </View>
    {/* <ImageBackground source={require('./resources/pulse.png')} style={style.backgroundImage}> */}
      {/* <View style={style.container}>
        
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
  </View> */}
  {/* </ImageBackground> */}
    </>
   
  );

}
const style = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fef200',

  },
  backgroundImage: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    resizeMode: 'stretch',
    width:320,
    height: 380

  },
  slider: {
    height: 45,
    width: '80%',
  }
});