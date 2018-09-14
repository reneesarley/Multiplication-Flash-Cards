import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default class Solution extends Component <props>{

  render(){
    return(

      <Text style={styles.solutions}>
      {this.props.solution}
      </Text>

    );
  }
}

const styles = StyleSheet.create({
  solutions:{
    margin: 125,
    color: 'blue',
  }
})
