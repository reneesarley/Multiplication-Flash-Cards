'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NavigatorIOS} from 'react-native';
import Game from './Game';
import Setup from './Setup';



type Props = {};
export default class App extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    console.log("log is working");
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Game Setup',
        component: Setup,
        passProps: {test: 'this is a test'}
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  }
});
