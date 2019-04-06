import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, ImageBackground} from 'react-native';

export default class FirstPage extends Component{
    render(){
        return(
            <ImageBackground 
            source = {require('WeatherApp/images/background1.jpg')}
            style = {styles.container}
            >
            </ImageBackground>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});

AppRegistry.registerComponent('FirstPage', () => FirstPage);