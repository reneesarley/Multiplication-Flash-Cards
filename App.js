import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import Game from './Game';



type Props = {};
export default class App extends Component<{}> {

  // _startGame(){
  //   this.props.navigator.push({
  //     title: 'Game',
  //     component: Game
  //     });
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Flash Cards</Text>
        <Button
          title='Start Game'
          buttonStyle= {{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "rgb(127,255,0)",
            borderWidth: 0,
            borderRadius: 5
          }}
        />
        <Button
          title="LOADING BUTTON"
          loading
          loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />

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
  startButton:{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
});
