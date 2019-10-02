import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";
// You can import from local files
import Date, { Container } from "../../components/DatePicker";
import { connect } from "react-redux";
import { createActivities } from "../../redux/ducks/activitiesAction";

// or any pure javascript modules available in npm
import {
  Caption,
  TextInput,
  Checkbox,
  Button,
  Appbar
} from "react-native-paper";
import { functionTypeAnnotation } from "@babel/types";

const ActivityCreator = ({ navigation, createActivities }) => {
  const [checked, setChecked] = useState("checked");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("2016-05-15");
  const [endDate, setEndDate] = useState("2016-05-15");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={e => setTitle(e)}
        placeholder="Digite o nome da atividade"
        mode="flat"
        label="Título"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={e => setDescription(e)}
        placeholder="Descreva o propósito da atividade"
        mode="flat"
        label="Descrição"
        style={styles.input}
      />
      <Container>
        <Text style={styles.text}>Inicio</Text>
        <DatePicker
          style={{ width: 200 }}
          date={startDate}
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
            setStartDate(date);
          }}
        />
      </Container>
      <Container>
        <Text style={styles.text}>Fim</Text>
        <DatePicker
          style={{ width: 200 }}
          locale="jp"
          date={endDate}
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
            setEndDate(date);
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
        <Button
          style={styles.button}
          onPress={() =>
            createActivities({ title, startDate, endDate, description })
          }
        >
          Salvar
        </Button>
        <Button style={styles.button} onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
        <Button onPress={() => createActivities({ teste: "teste" })}>
          my ass
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

const mapStatetoProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchtoProps = {
  createActivities
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ActivityCreator);
