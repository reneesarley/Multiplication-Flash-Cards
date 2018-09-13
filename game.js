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

export default class Game extends Component<{}> {
  constructor(props) {
    super(props);
  }

  _selectNumber = () =>{
    console.log("the number was pressed")
  }

  render() {
    console.log(this.props.test)
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <Text style = {styles.button}
            onPress={this._selectNumber}>
             1s
          </Text>
       </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
     alignItems: 'center',
  },
  button: {
   borderWidth: 1,
   padding: 25,
   borderColor: 'black',
   backgroundColor: 'red'
 }
});
