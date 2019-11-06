import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import MachineTime from "../../components/MachineTime";
import { TextInput, Checkbox, Button } from "react-native-paper";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2;
  margin-bottom: 2;
`;

const ActivityCreator = ({ navigation }) => {
  const [checked, setChecked] = useState("checked");
  const [titulo, setTitulo] = useState("");
  const [date, setDate] = useState("2019-10-19T15:51:28.132Z");
  const [descricao, setDescricao] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        accessibilityRole="nome"
        accessible
        value={titulo}
        onChangeText={e => setTitulo(e)}
        placeholder="Digite o nome da atividade"
        mode="flat"
        label="Título"
        style={styles.input}
      />
      <TextInput
        accessible
        value={descricao}
        onChangeText={e => setDescricao(e)}
        placeholder="Descreva o propósito da atividade"
        mode="flat"
        label="Descrição"
        style={styles.input}
      />
      <Container>
        <Text style={styles.text}>Inicio</Text>
        <MachineTime />
      </Container>
      <Container>
        <Text style={styles.text}>Fim</Text>
        <MachineTime />
      </Container>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Checkbox
          status={checked}
          onPress={() =>
            setChecked(checked === "checked" ? "unchecked" : "checked")
          }
        />
        <Text>Repetir</Text>
      </View>
      <View
        style={{
          justifyContent: "center",

          flexDirection: "row"
        }}
      >
        <Button style={styles.button} onPress={() => null}>
          Salvar
        </Button>
        <Button style={styles.button} onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </View>
    </View>
  );
};

ActivityCreator.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  text: {
    alignSelf: "center",
    paddingHorizontal: 12
  },
  input: {
    marginTop: 3,
    marginBottom: 3
  },
  button: {
    margin: 4
  }
});

export default ActivityCreator;
