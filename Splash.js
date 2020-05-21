import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform, Alert, ToastAndroid, ImageBackground } from 'react-native';

export default class Splash extends Component {

    render() {

        return (
            
            <View style={style.container1}>
                <ImageBackground source={require('./resources/pulse.png')} style={style.backgroundImage}>

                    <View style={style.container2}>
                        <Image source={require('./resources/pulse.png')} style={style.back} />
                        <Text style={style.text1}>
                            Copyright by
                        </Text>
                        <Text style={style.text2}>
                            Fortunacreatives
                        </Text>
                    </View>

                </ImageBackground>
            </View>

        );
    }
}

const style = StyleSheet.create({

    container1: {

        opacity: 0.9,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fef200',

    },

    text1: {
        marginTop:190,
        marginLeft:50
    },
    text2: {
        // marginTop:190,
        marginLeft:45
    },

    container2: {

        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fef200',

    },

    backgroundImage: {

        marginTop:-60,
        marginLeft:-50,
        justifyContent: 'center',
        width: 880,
        height: 1000,
        flex: 1,
        resizeMode: 'cover',

    },

    back: {

        marginTop: 270,
        justifyContent: 'center',
        marginLeft:45,
        width: 260,
        height: 330,
    }
});

