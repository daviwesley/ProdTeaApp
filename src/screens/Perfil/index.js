import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Headline, Button } from "react-native-paper";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { loggoutUser } from "../../redux/ducks/loginAction";
class Perfil extends React.Component {
  state = {
    name: ""
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ name: firebase.auth().currentUser.displayName });
      } else this.props.navigation.navigate("auth");
    });
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", paddingTop: 30 }}>
        <Avatar.Image size={80} source={require("../../assets/boy.png")} />
        <Headline style={sytles.title}>{this.state.name}</Headline>
        <Button onPress={this.props.loggoutUser}>Sair</Button>
      </View>
    );
  }
}

const sytles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

const mapStatetoProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchtoProps = {
  loggoutUser
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Perfil);
