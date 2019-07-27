import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Provider as Theme, DefaultTheme } from "react-native-paper";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import store from "./redux/store";
//import LinearGradient from "react-native-linear-gradient";
import Rotas from "./routes";
// import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.secondary = {
      ...DefaultTheme,
      dark: true,
      roundness: 4,
      colors: {
        ...DefaultTheme.colors,
        primary: "#097551",
        accent: "green"
      }
    };
  }

  componentDidMount() {
    SplashScreen.hide();
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());
    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
      <Provider store={store}>
        <Theme theme={this.secondary}>
          <StatusBar
            backgroundColor="#489C6A"
            //translucent
            barStyle="light-content"
          />
          <View style={{ flex: 1 }}>
            {/* <LinearGradient
          colors={["#489C6A", "#479566"]}
          style={styles.linearGradient}
        > */}
            <Rotas />
            {/* </LinearGradient> */}
          </View>
        </Theme>
      </Provider>
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
