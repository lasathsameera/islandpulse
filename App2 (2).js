import React from 'react'
import { View, Image, Text,StyleSheet,Slider, TouchableOpacity, Platform, Alert, ToastAndroid} from 'react-native';

// import Sound from 'react-native-sound';

// const img_speaker = require('./resources/ui_speaker.png');
// const img_pause = require('./resources/ui_pause.png');
// const img_play = require('./resources/ui_play.png');
// const img_playjumpleft = require('./resources/ui_playjumpleft.png');
// const img_playjumpright = require('./resources/ui_playjumpright.png');



var SoundPlayer = require('react-native-sound');
var song = null;

export default class PlayerScreen extends React.Component{

  constructor(props){

    super(props)

    this.state = {

      pause: false,
    };

  }

  componentWillMount(){

    song = new SoundPlayer('Kalpa_Kalayak_Pura_(Remake).mp3',SoundPlayer.MAIN_BUNDLE,(error) => {
      if(error)
      ToastAndroid.show('Error when init SoundPlayer :(((',ToastAndroid.SHORT);
     
    })
  }

  onPressButtonPlay(){

    if(song != null){
      song.play((success) => {

        if(!success)
        ToastAndroid.show('Error when play SoundPlayer :(((',ToastAndroid.SHORT);
      });

    }
  }
  onPressButtonPause(){

    if(song != null){

      if(this.state.pause)
      song.play((success) => {
        if(!success)
        ToastAndroid.show('Error when play SoundPlayer :(((',ToastAndroid.SHORT);
      });
      else song.pause();

        this.setState({pause: !this.state.pause});
    }
  }

    // static navigationOptions = props => ({
    //     title:props.navigation.state.params.title,
    // })

    // constructor(){
    //     super();
    //     this.state = {
    //         playState:'paused', //playing, paused
    //         playSeconds:0,
    //         duration:0
    //     }
    //     this.sliderEditing = false;
    // }

    // componentDidMount(){
    //     this.play();
        
    //     this.timeout = setInterval(() => {
    //         if(this.sound && this.sound.isLoaded() && this.state.playState == 'playing' && !this.sliderEditing){
    //             this.sound.getCurrentTime((seconds, isPlaying) => {
    //                 this.setState({playSeconds:seconds});
    //             })
    //         }
    //     }, 100);
    // }
    // componentWillUnmount(){
    //     if(this.sound){
    //         this.sound.release();
    //         this.sound = null;
    //     }
    //     if(this.timeout){
    //         clearInterval(this.timeout);
    //     }
    // }

    // onSliderEditStart = () => {
    //     this.sliderEditing = true;
    // }
    // onSliderEditEnd = () => {
    //     this.sliderEditing = false;
    // }
    // onSliderEditing = value => {
    //     if(this.sound){
    //         this.sound.setCurrentTime(value);
    //         this.setState({playSeconds:value});
    //     }
    // }

    // play = async () => {
    //     if(this.sound){
    //         this.sound.play(this.playComplete);
    //         this.setState({playState:'playing'});
    //     }else{
    //         const filepath = this.props.navigation.state.params.filepath;
    //         console.log('[Play]', filepath);
    
    //         this.sound = new Sound(filepath, '', (error) => {
    //             if (error) {
    //                 console.log('failed to load the sound', error);
    //                 Alert.alert('Notice', 'audio file error. (Error code : 1)');
    //                 this.setState({playState:'paused'});
    //             }else{
    //                 this.setState({playState:'playing', duration:this.sound.getDuration()});
    //                 this.sound.play(this.playComplete);
    //             }
    //         });    
    //     }
    // }
    // playComplete = (success) => {
    //     if(this.sound){
    //         if (success) {
    //             console.log('successfully finished playing');
    //         } else {
    //             console.log('playback failed due to audio decoding errors');
    //             Alert.alert('Notice', 'audio file error. (Error code : 2)');
    //         }
    //         this.setState({playState:'paused', playSeconds:0});
    //         this.sound.setCurrentTime(0);
    //     }
    // }

    // pause = () => {
    //     if(this.sound){
    //         this.sound.pause();
    //     }

    //     this.setState({playState:'paused'});
    // }

    // jumpPrev15Seconds = () => {this.jumpSeconds(-15);}
    // jumpNext15Seconds = () => {this.jumpSeconds(15);}
    // jumpSeconds = (secsDelta) => {
    //     if(this.sound){
    //         this.sound.getCurrentTime((secs, isPlaying) => {
    //             let nextSecs = secs + secsDelta;
    //             if(nextSecs < 0) nextSecs = 0;
    //             else if(nextSecs > this.state.duration) nextSecs = this.state.duration;
    //             this.sound.setCurrentTime(nextSecs);
    //             this.setState({playSeconds:nextSecs});
    //         })
    //     }
    // }

    // getAudioTimeString(seconds){
    //     const h = parseInt(seconds/(60*60));
    //     const m = parseInt(seconds%(60*60)/60);
    //     const s = parseInt(seconds%60);

    //     return ((h<10?'0'+h:h) + ':' + (m<10?'0'+m:m) + ':' + (s<10?'0'+s:s));
    // }

    render(){


      return (

        <View style={style.container}>
          <TouchableOpacity onPress={this.onPressButtonPlay.bind(this)}>
            <Text style={style.buttonText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressButtonPause.bind(this)}>
      <Text style={style.buttonText}>{this.state.pause ? 'Resume' : 'Pause'}</Text>
          </TouchableOpacity>
        </View>
      );


    }

    
}
const style = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
