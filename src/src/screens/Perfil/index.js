import * as React from "react";
import { View } from "react-native";
import { Avatar, Text } from "react-native-paper";

export default class Perfil extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", paddingTop: 30 }}>
        <Avatar.Image size={80} source={require("../../assets/boy.png")} />
        <Text>Eduardo Costa</Text>
      </View>
    );
  }
}
