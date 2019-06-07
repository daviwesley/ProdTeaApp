import * as React from "react";
import { Text, View, Image } from "react-native";

export default class Compromissos extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../../assets/icons/file-empty.png")}
          style={{ width: 50, height: 50, marginBottom: 12 }}
        />
        <Text>Você não tem nenhum compromisso ainda</Text>
      </View>
    );
  }
}
