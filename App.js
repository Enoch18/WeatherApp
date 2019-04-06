/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableHighlight, ImageBackground} from 'react-native';
import FirstPage from './app/components/FirstPage/FirstPage.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground
        source = {require('WeatherApp/images/background1.jpg')}
        style = {styles.container}
        >
        <FirstPage />
      </ImageBackground>
    );
  }
}

var styles = StyleSheet.create({
  container:{
      flex: 1,
  },

  overlay:{
      backgroundColor: 'black',
      height: '30%',
      opacity: 0.5
  }
});