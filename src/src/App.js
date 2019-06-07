import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Rotas from "./routes";
// import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());
    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#489C6A", "#479566"]}
          style={styles.linearGradient}
        >
          <Rotas />
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  logo: {
    height: 138,
    marginBottom: 16,
    marginTop: 79,
    // padding: 12,
    width: 136,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 22
  }
});
