import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";
// You can import from local files
import Date, { Container } from "../../components/DatePicker";

// or any pure javascript modules available in npm
import {
  Caption,
  TextInput,
  Checkbox,
  Button,
  Appbar
} from "react-native-paper";

export function navigationOptions({ navigation }) {
  return {
    title: "false"
  };
}

const ActivityCreator = () => {
  const [checked, setChecked] = useState("checked");
  const [titulo, setTitulo] = useState("");
  const [date, setDate] = useState("2016-05-15");
  const [descricao, setDescricao] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        value={titulo}
        onChangeText={e => setTitulo(e)}
        placeholder="Digite o nome da atividade"
        mode="flat"
        label="Título"
        style={styles.input}
      />
      <TextInput
        value={descricao}
        onChangeText={e => setDescricao(e)}
        placeholder="Descreva o propósito da atividade"
        mode="flat"
        label="Descrição"
        style={styles.input}
      />
      <Container>
        <Text style={styles.text}>Inicio</Text>
        <DatePicker
          style={{ width: 200 }}
          date={date}
          mode="datetime"
          placeholder="select date"
          format="D MMMM YYYY, h:mm"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              borderWidth: 0
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={date => {
            setDate(date);
          }}
        />
      </Container>
      <Container>
        <Text style={styles.text}>Fim</Text>
        <DatePicker
          style={{ width: 200 }}
          date={date}
          mode="datetime"
          placeholder="select date"
          format="D MMMM YYYY, h:mm"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              borderRadius: 2,
              borderWidth: 0
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={date => {
            setDate(date);
          }}
        />
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
        <Button style={styles.button} onPress={() => null}>
          Cancelar
        </Button>
      </View>
    </View>
  );
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
