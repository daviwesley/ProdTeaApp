import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_LOADING,
  LOGIN_USER_SUCCESS
} from "../actions/types";

const auth = (state = { loading: false, loggedIn: false }, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      const {
        user: { uid: userId }
      } = action;
      return { ...state, loggedIn: true, userId, loading: false };
    case CREATE_USER_FAIL:
      const { error } = action;
      return { ...state, loggedIn: false, error, loading: false };
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGIN_USER_SUCCESS:
      return { ...state, loggedIn: true, loading: false };
    default:
      return state;
  }
};

export default auth;
