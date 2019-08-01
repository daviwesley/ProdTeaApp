import React, { Component } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Button,
  TextInput,
  Avatar,
  Headline,
  Paragraph,
  Portal,
  Dialog
} from "react-native-paper";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { loginUser, loginUserFail  } from "../../redux/ducks/loginAction";

export class Login extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      visible: false
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("tab1");
      }
    });
  }
  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => {
    this.props.loginUserFail("")
    this.setState({ visible: false });
    }

  handleSubmit =  () => {
    const { email, senha } = this.state;
    if (email == "" || senha == "") {
      this.props.loginUserFail("Usuário/Senha devem ser preenchidos")
      this._showDialog();
    } else this.props.loginUser(email, senha);
  };
  render() {
    const { email, senha } = this.state;
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        enabled={Platform.OS === "ios"}
      >
        <LinearGradient
          colors={["#489C6A", "#479566"]}
          style={style.container}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={style.image}>
            <Avatar.Image
              size={80}
              source={require("../../assets/maciel.jpeg")}
            />
          </View>
          <Portal>
            <Dialog visible={this.props.auth.error || this.state.visible} onDismiss={this._hideDialog}>
              <Dialog.Title>Alerta</Dialog.Title>
              <Dialog.Content>
                <Paragraph>{this.props.auth.error}</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={this._hideDialog}>OK</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
          <Headline style={{ textAlign: "center" }}>ProdTea</Headline>
          <TextInput
            ref={ref => (this.email = ref)}
            blurOnSubmit={false}
            style={style.texInput}
            mode="flat"
            label="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => this.senha.focus()}
            error={this.props.auth.userError}
          />
          <TextInput
            ref={ref => (this.senha = ref)}
            style={style.texInput}
            blurOnSubmit={false}
            secureTextEntry
            mode="flat"
            label="Senha"
            returnKeyType="go"
            onSubmitEditing={() => this.props.loginUser(email, senha)}
            value={this.state.senha}
            onChangeText={text => this.setState({ senha: text })}
            error={this.props.auth.passwordError}
          />
          <Button
            onPress={() => this.handleSubmit()}
            mode="contained"
            loading={this.props.auth.loading}
            disabled={this.props.auth.loading}
          >
            ENTRAR
          </Button>
          <View style={{ flexDirection: "row" }}>
            <Paragraph style={style.text}>Não tem uma conta? </Paragraph>
            <Paragraph
              onPress={() => this.props.navigation.navigate("cadastro")}
              style={style.link}
            >
              crie uma aqui
            </Paragraph>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: "center"
  },
  texInput: {
    marginTop: 2,
    marginBottom: 6,
    backgroundColor: "rgba(255,255,255,0.4)"
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8
  },
  link: {
    fontSize: 10,
    color: "rgba(0, 122, 206,0.9)",
    marginLeft: 1
  },
  text: {
    fontSize: 10,
    color: "rgba(255,255,255,0.5)"
  }
});

const mapStatetoProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchtoProps = {
  loginUser,
  loginUserFail
};
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Login);
