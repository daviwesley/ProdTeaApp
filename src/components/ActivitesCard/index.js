import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Caixa, Container } from "./styles.js";
import { Container } from "../DatePicker/index.js";

export default class ActivitesCard extends React.Component {
  render() {
    return (
      <Caixa>
        <Container>
          <Text>Titulo</Text>
          <Text>
            Unus quisque mavult omaemow shindairu credere, quam judicare
            (qualquer um prefere crer do que julgar por si mesmo). ... O homem é
            o arquiteto de seu próprio destino. ...
          </Text>
          <Text>inicio</Text>
        </Container>
      </Caixa>
    );
  }
}
