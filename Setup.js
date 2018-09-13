'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import Game from './Game';


export default class Setup extends Component <{}>{
  constructor(props){
    super(props);
  }

_startGame = () => {
  this.props.navigator.push({
  title: 'Game',
  component: Game,
});
}
  render(){
    console.log("setup is working")
    return(
      <View style={styles.container}>
        <Text>
        Set up  your game
        </Text>
        <Button
          onPress={this._startGame}
          title="START"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 75,
     alignItems: 'center',
  },
  baseText: {
    marginTop: 75,
    fontFamily: 'Cochin',
    color: 'red',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
