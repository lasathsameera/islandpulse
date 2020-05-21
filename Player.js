import React from 'react'

// import React, {Component} from 'react';

import { View, Image,Text,StyleSheet,TouchableOpacity, Platform, Alert,ToastAndroid, ImageBackground} from 'react-native';

import TrackPlayer from 'react-native-track-player';

import Slider from '@react-native-community/slider';

export default function App(){

    state = {
        value: 0.5,
        volume:0.5
      };

      TrackPlayer.setupPlayer();

      // Add a track to the queue
       TrackPlayer.add({
          id: 'trackId',
          // url: require('./android/app/src/main/res/raw/kalpa_kalayak_pura.mp3'),
          url: 'http://cp11.serverse.com:7162/stream?type=http&nocache=5',
          title: 'Track Title',
          artist: 'Track Artist',
          artwork: require('./resources/ui_play.png')
      });
    
      pause = async () =>{
    
        await TrackPlayer.pause();
      
      }
      
      play = async () =>{
      
        await TrackPlayer.play();
      
      }
      mute = async () =>{
      
         this.state.value=0;
  
        await TrackPlayer.setVolume(0);
         this.forceUpdate();
      
      }
      unmute = async () =>{
      
        this.state.value=this.state.volume;
      
        await TrackPlayer.setVolume(this.state.volume);
      
      }
      
      handleSliderChange = async (value) => {

        this.state.volume=value;
        await TrackPlayer.setVolume(value);
      }

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
        <TouchableOpacity>
    <Text style={style.buttonText} onPress={this.unmute}>UnMute</Text>
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
      height: 400
  
    },
    slider: {
      height: 45,
      width: '80%',
    }
  });