import rootReducer from "../reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const defaultState = {};

export default createStore(rootReducer, applyMiddleware(thunk));
