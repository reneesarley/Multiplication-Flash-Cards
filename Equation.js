import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Equation extends Component <props>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Text style={styles.equation}>
      {this.props.factorOne} x {this.props.factorTwo} = ?
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  equation: {
    margin: 100,
    color: 'red',
  }
})

Equation.propTypes = {
  factorOne: PropTypes.number.isRequired,
  factorTwo: PropTypes.number.isRequired,
};
