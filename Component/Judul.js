import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Judul extends Component{
    render(){
        return(
            <Text style={gaya.heho}>BIODATA</Text>
        )
    }
}
const gaya ={
    heho: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        backgroundColor: '#26427D'
    }
}