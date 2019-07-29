import auth from "../ducks/loginAction";
import activity from "../ducks/activitiesAction";
import { combineReducers } from "redux";

export default combineReducers({ auth, activity });
