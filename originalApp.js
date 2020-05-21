/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import React, {component} from 'react'
import TrackPlayer from 'react-native-track-player';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              {/* <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
               Hellow This First App bbbbb vvv
              </Text> */}
         
              <PlayerInfo />  
            </View>
            {/* <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View> */}
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

class PlayerInfo extends React.Component {

  const track = {
    id: 'unique track id', // Must be a string, required
    
    url: 'http://example.com/avaritia.mp3', // Load media from the network
    url: require('./avaritia.ogg'), // Load media from the app bundle
    url: 'file:///storage/sdcard0/Music/avaritia.wav' // Load media from the file system 

    title: 'Avaritia',
    artist: 'deadmau5',
    album: 'while(1<2)',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    
    artwork: 'http://example.com/avaritia.png', // Load artwork from the network
    artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
    artwork: 'file:///storage/sdcard0/Downloads/artwork.png' // Load artwork from the file system
};

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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
