import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.configure({ name: "React Native Demo" })
  .use(reactotronRedux()) //  <- here i am!
  .connect({
    server: "localhost", // for Genymotion
    port: 9090,
    enabled: true
  }); //Don't forget about me!

export default reactotron;
