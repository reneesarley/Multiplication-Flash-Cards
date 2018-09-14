'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
  NavigatorIOS,
  TouchableWithoutFeedback
} from 'react-native';
import Equation from './Equation';
import Solution from './Solution';

export default class Game extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      timesTableOptions: [1, 2, 3],
      currentEquation: [1, 2],
      posibleSolutions: [1, 2, 4, 5]
    };
  }

  _selectNumber = () =>{
    console.log("the number was pressed")
  }

  render() {
    console.log(this.props.test)
    return (
      <View style={styles.container}>
      <Text>
      <Equation style={styles.problem}
      factorOne= {this.state.currentEquation[0]}
      factorTwo= {this.state.currentEquation[1]}
      />
      </Text>
      <Text>
      <Solution style={styles.problem}
      solution= {this.state.posibleSolutions[0]}
      />
      </Text>
      <Text>Possible solutions</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 100,
     alignItems: 'center',
  },
  problem: {
    backgroundColor: 'grey',
    margin: 75,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  }
});
