import React, { Component } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import firebase from "react-native-firebase";
import LinearGradient from "react-native-linear-gradient";
import {
  Button,
  TextInput,
  Avatar,
  Title,
  Paragraph
} from "react-native-paper";
import { connect } from "react-redux";
// import { createUser, loginUser } from "../../redux/actions/loginAction";
import { createUser, loginUser } from "../../redux/ducks/loginAction";
import { createActivities } from "../../redux/ducks/activitiesAction";

export class Login extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: ""
    };
  }
  componentDidMount() {
    this.props.loginUser("davi@davi.com.br", "davi123");
    Alert.alert(this.props.auth.loggedIn);
  }
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
          {this.props.auth.loggedIn && this.props.navigation.navigate("tab1")}
          <View style={style.image}>
            <Avatar.Image
              size={80}
              source={require("../../assets/maciel.jpeg")}
            />
          </View>
          <Title style={{ textAlign: "center" }}>ProdTea</Title>
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
          />
          <Button
            onPress={() => null}
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
          <Title>{this.props.auth.userId}</Title>
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
    color: "blue",
    marginLeft: 1
  },
  text: {
    fontSize: 10
  }
});

const mapStatetoProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchtoProps = {
  createUser,
  createActivities,
  loginUser
};
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Login);
