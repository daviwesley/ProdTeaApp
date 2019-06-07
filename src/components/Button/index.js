import React, { Component } from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";
import styles from "../../styles";

class Button extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <Text style={[styles.textStyle, this.props.textStyle]}>
            this.props.title
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1
  },
  buttonStyle: {
    borderRadius: 200,
    backgroundColor: styles.mainColor
  },
  textStyle: {
    fontSize: 23
  }
});

export default Button;
