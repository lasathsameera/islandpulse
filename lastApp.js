import React from 'react'
import { View, Image, Text,StyleSheet,Slider, TouchableOpacity, Platform, Alert, ToastAndroid} from 'react-native';

import TrackPlayer from 'react-native-track-player';

const start = async () => {
  // Set up the player
  await TrackPlayer.setupPlayer();

  // Add a track to the queue
  await TrackPlayer.add({
      id: 'trackId',
      url: require('./android/app/src/main/res/raw/Kalpa_Kalayak_Pura_(Remake).mp3'),
      title: 'Track Title',
      artist: 'Track Artist',
      artwork: require('./resources/ui_play.png')
  });

  // Start playing it
  await TrackPlayer.play();
};

// start();

// trackPlayer = () =>{

//   return start();

// }

// start();

// trackPlayer = () => {

//   start();
// }

// TrackPlayer(){
//   start();
// }

// render(){


//   return (

//     <View style={style.container}>
//       <TouchableOpacity onPress={this.trackPlayer}>
//         <Text style={style.buttonText}>Play</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//   <Text style={style.buttonText}>{this.state.pause ? 'Resume' : 'Pause'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
//   }

  const App: () => React$Node = () => {
    return (
      <>
        <View style={style.container}>
      <TouchableOpacity>
        <Text style={style.buttonText} onPress={this.star}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity>
  <Text style={style.buttonText}></Text>
      </TouchableOpacity>
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
    }
  });

