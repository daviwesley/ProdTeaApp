import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Title } from "react-native-paper";

export default class Perfil extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", paddingTop: 30 }}>
        <Avatar.Image size={80} source={require("../../assets/boy.png")} />
        <Title style={sytles.title}>Eduardo Costa</Title>
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
