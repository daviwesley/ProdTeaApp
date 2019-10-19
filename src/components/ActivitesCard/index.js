import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Caixa, Conteudo } from "./styles.js";
import AssetExample from "./components/AssetExample";

export default class App extends React.Component {
  render() {
    return (
      <Caixa>
        <Conteudo>
          <Text>Titulo</Text>
          <Text>
            Unus quisque mavult omaemow shindairu credere, quam judicare
            (qualquer um prefere crer do que julgar por si mesmo). ... O homem é
            o arquiteto de seu próprio destino. ...
          </Text>
          <Text>inicio</Text>
        </Conteudo>
      </Caixa>
    );
  }
}
