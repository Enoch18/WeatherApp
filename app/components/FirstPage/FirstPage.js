import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';

export default class FirstPage extends Component{
    render(){
        return(
            <View>
                <Text>Hey There I love Jesus</Text>
            </View>
        );
    }
}

var style = StyleSheet.create({
    
});

AppRegistry.registerComponent('FirstPage', () => FirstPage);