/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';

import Judul from './Component/Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Judul/>
        <Text style={styles.welcome}>Hellow</Text>
        <Text style={styles.instructions}>Felisiana Ardelia Azzahra</Text>
        <Text style={styles.instructions}>XI RPL 2/17</Text>
        <Image source={require('./content/gambar/foto.jpg')} style={{width:250, height:300}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
