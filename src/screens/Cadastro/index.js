import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import {
  Button,
  TextInput,
  Portal,
  Dialog,
  Paragraph
} from "react-native-paper";
import firebase from "react-native-firebase";
import { createUser } from "../../redux/ducks/loginAction";
import { connect } from "react-redux";
import { Theme } from "../../styles";

export class Cadastro extends Component {
  static navigationOptions = {
    headerMode: "none",
    title: "Cadastrar usuário",
    headerStyle: {
      backgroundColor: Theme.mainColor
    },
    headerTintColor: "white"
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nome: "",
      senha: "",
      confSenha: "",
      visible: false,
      message: "",
      senhaError: false
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("tab1");
      }
    });
  }

  handleSubmit = () => {
    const { email, nome, senha, confSenha } = this.state;
    if (email === "" || nome === "" || senha === "" || confSenha === "") {
      this.setState({ message: "Todos os campos devem ser preenchidos" });
      this._showDialog();
    } else if (senha !== confSenha) {
      this.setState({ message: "As senhas devem ser iguais" });
      this.setState({ senhaError: true });
      this._showDialog();
    } else if (nome === "") {
      this.setState({ message: "Por favor, informe seu nome" });
      this._showDialog();
    } else this.props.createUser(email, senha, nome);
  };
  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Portal>
          <Dialog visible={this.state.visible} onDismiss={this._hideDialog}>
            <Dialog.Title>Alerta</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{this.state.message}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this._hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <View style={{ flex: 1 }}>
          <TextInput
            // style={style.texInput}
            accessible
            placeholder="Digite seu nome"
            ref={ref => (this.nome = ref)}
            onSubmitEditing={() => this.email.focus()}
            blurOnSubmit={false}
            mode="flat"
            label="Nome"
            value={this.state.nome}
            returnKeyType="next"
            onChangeText={text => this.setState({ nome: text })}
          />
          <TextInput
            // style={style.texInput}
            accessible
            placeholder="Insira teu email"
            ref={ref => (this.email = ref)}
            onSubmitEditing={() => this.senha.focus()}
            blurOnSubmit={false}
            mode="flat"
            label="Email"
            value={this.state.email}
            returnKeyType="next"
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            // style={style.texInput}
            accessible
            placeholder="Insira senha"
            ref={ref => (this.senha = ref)}
            onSubmitEditing={() => this.confSenha.focus()}
            blurOnSubmit={false}
            secureTextEntry
            mode="flat"
            label="Senha"
            value={this.state.senha}
            returnKeyType="next"
            onChangeText={text => this.setState({ senha: text })}
            error={this.state.senhaError}
          />
          <TextInput
            // style={style.texInput}
            accessible
            placeholder="confirme sua senha"
            ref={ref => (this.confSenha = ref)}
            onSubmitEditing={() => this.handleSubmit()}
            blurOnSubmit={false}
            secureTextEntry
            mode="flat"
            label="Repetir Senha"
            value={this.state.confSenha}
            returnKeyType="send"
            onChangeText={text => this.setState({ confSenha: text })}
            error={this.state.senhaError}
          />
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={() => this.handleSubmit()}
              loading={this.props.auth.loading}
            >
              CADASTRAR
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    marginTop: 4,
    marginLeft: 6,
    marginRight: 6
  }
});

const mapStatetoProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchtoProps = {
  createUser
};
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Cadastro);
