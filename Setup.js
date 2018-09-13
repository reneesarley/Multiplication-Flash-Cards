'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Setup extends Component <{}>{
  constructor(props){
    super(props);
  }
  render(){
    console.log("setup is working")
    return(
      <View style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
          Get started
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
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
