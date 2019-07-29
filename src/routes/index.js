import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import * as React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Theme } from "../styles";

// telas
import Home from "../screens/AgendaHome";
import Compromissos from "../screens/Compromissos";
import Metas from "../screens/Metas";
import Perfil from "../screens/Perfil";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import AgendaHome from "../screens/AgendaHome";

const tab = createBottomTabNavigator(
  {
    tab1: {
      screen: AgendaHome,
      navigationOptions: {
        tabBarLabel: "Atividades",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require("../assets/icons/calendar.png")}
            style={{ width: 24, height: 24 }}
          />
        )
      }
    },
    tab2: {
      screen: Metas,
      navigationOptions: {
        tabBarLabel: "Metas",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require("../assets/icons/list.png")}
            style={{ width: 24, height: 24 }}
          />
        )
      }
    },
    tab3: {
      screen: Compromissos,
      navigationOptions: {
        tabBarLabel: "Compromissos",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require("../assets/icons/award.png")}
            style={{ width: 24, height: 24 }}
          />
        )
      }
    },
    tab4: {
      screen: Perfil,
      navigationOptions: {
        tabBarLabel: "Perfil",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require("../assets/icons/user3.png")}
            style={{ width: 24, height: 24 }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#53D374"
      // style:{
      //   backgroundColor: "#489C6A",
      //   borderRadius: 12
      // }
    }
  }
);

const stack = createStackNavigator({
  stack1: {
    screen: tab,
    navigationOptions: ({ navigation }) => {
      return {
        title: "ProdTea",
        headerStyle: {
          backgroundColor: Theme.mainColor
        },
        headerTintColor: "white",
        headerLeft: (
          <Icon.Button
            name="menu"
            backgroundColor="transparent"
            onPress={navigation.openDrawer}
            underlayColor="transparent"
          />
        ),
        headerRight: (
          <Icon.Button
            name="search"
            backgroundColor="transparent"
            // onPress={navigation.openDrawer}
            underlayColor="transparent"
          />
        )
      };
    }
  }
});

const drawer = createDrawerNavigator(
  {
    stack: {
      screen: stack,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: (
          <Icon
            name="home"
            size={25}
            // backgroundColor="green"
            // underlayColor="transparent"
          />
        )
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: "#489C6A"
    }
  }
);
const auth = createStackNavigator(
  {
    cadastro: Cadastro,
    login: Login
  },
  {
    initialRouteName: "login"
  }
);

const switchNavigation = createSwitchNavigator({
  auth: {
    screen: auth // carrega primeiro a tela de autenticação
  },
  main: {
    screen: drawer
  }
});
export default createAppContainer(switchNavigation);
