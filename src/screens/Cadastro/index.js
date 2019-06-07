import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
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
      confSenha: ""
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    const { email, nome, senha, confSenha } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {this.props.auth.loggedIn && navigate("tab1")}
        <View style={{ flex: 1 }}>
          <TextInput
            // style={style.texInput}
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
            ref={ref => (this.senha = ref)}
            onSubmitEditing={() => this.confSenha.focus()}
            blurOnSubmit={false}
            secureTextEntry
            mode="flat"
            label="Senha"
            value={this.state.senha}
            returnKeyType="next"
            onChangeText={text => this.setState({ senha: text })}
          />
          <TextInput
            // style={style.texInput}
            ref={ref => (this.confSenha = ref)}
            onSubmitEditing={() => this.props.createUser(email, senha)}
            blurOnSubmit={false}
            secureTextEntry
            mode="flat"
            label="Repetir Senha"
            value={this.state.confSenha}
            returnKeyType="send"
            onChangeText={text => this.setState({ confSenha: text })}
          />
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={() => this.props.createUser(email, senha)}
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
