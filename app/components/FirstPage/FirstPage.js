import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TextInput} from 'react-native';

export default class FirstPage extends Component{
    constructor(){
        super();

        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var day = days[new Date().getDay()];
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes

        this.state = {
            date: date + '/' + month + '/' + year,
            time: hours + ':' + min,
            day: day
        }
    }

    render(){
        return(
            <View style = {styles.overlay}>
                <View style = {styles.inputstyle}>
                    <TextInput 
                        style = {styles.textinput}
                        placeholder = "Search for other Location"
                        place
                        placeholderTextColor = "white"
                    />
                </View>
                <Text style = {styles.city}>Lusaka, Today</Text>
                <Text style = {styles.city}>{this.state.day}, {this.state.date}</Text>
                <Text style = {styles.time}>{this.state.time}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    overlay:{
        backgroundColor: 'black',
        height: '30%',
        opacity: 0.5,
    },

    textinput:{
        fontSize: 20
    },

    inputstyle:{
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white',
        opacity: 0.7
    },

    city:{
        fontSize: 25,
        color: 'white'
    },

    time:{
        marginTop: 5,
        fontSize: 40,
        color: 'white'
    }
});

AppRegistry.registerComponent('FirstPage', () => FirstPage);