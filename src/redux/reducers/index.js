import auth from "../ducks/loginAction";
import { combineReducers } from "redux";

export default combineReducers({ auth: auth });
