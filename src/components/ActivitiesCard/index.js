import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Action, Container } from "./styles.js";

export default class ActivitiesCard extends Component {
  render() {
    return (
      <Action>
        <Container>
          <Text>
            Titulo. Unus quisque mavult omaemow shindairu credere, quam judicare
            (qualquer um prefere crer do que julgar por si mesmo). ... O homem é
            o arquiteto de seu próprio destino. ...
          </Text>
          <Text>inicio</Text>
        </Container>
      </Action>
    );
  }
}
