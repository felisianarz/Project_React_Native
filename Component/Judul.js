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
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        backgroundColor: 'grey'
    }
}