'use strict';

import React from 'react-native';
var {
  Component,
  PropTypes
} = React;

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>
          {this.props.counter}
        </Text>
        <TouchableHighlight
            onPress={this.props.increment}
            underlayColor='rgba(0, 0, 0, 0.1)'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Increment count
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={this.props.decrement}
            underlayColor='rgba(0, 0, 0, 0.1)'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Decrement count
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
};

Counter.PropTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  count: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Counter;