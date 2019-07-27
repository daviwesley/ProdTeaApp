import rootReducer from "../reducers";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reactotron from "../../ReactotronConfig";

const middleware = applyMiddleware(thunk);

export default createStore(
  rootReducer,
  compose(
    middleware,
    Reactotron.createEnhancer()
  )
);
