import firebase from "react-native-firebase";

export const types = {
  START_LOAD: "auth/LOAD",
  STOP_LOAD: "auth/STOP",
  LOGGED_IN: "auth/LOGGED",
  CREATE_USER_SUCCESS: "auth/CREATE",
  CREATE_USER_FAIL: "auth/USER_FAIL",
  LOGIN_USER_SUCCESS: "auth/USER_SUCCESS",
  LOGIN_USER_FAIL: "auth/LOGIN_FAIL",
  LOGIN_LOADING: "auth/LOGIN_LOADING",
  LOGGED_IN: "auth/LOGGED_IN"
};
const INITIAL = { loading: false, loggedIn: false, error: '', user: null };
//reducer
const auth = (state = INITIAL, action) => {
  switch (action.type) {
    case types.CREATE_USER_SUCCESS:
      const {
        user: { uid: userId }
      } = action;
      return { ...state, loggedIn: true, userId, loading: false };
    case types.CREATE_USER_FAIL:
      const { error } = action;
      return { ...state, loggedIn: false, error, loading: false };
    case types.LOGIN_LOADING:
      return {
        ...state,
        loading: action.status
      };
    case types.LOGGED_IN:
      return { ...state, loggedIn: action.status};
    case types.LOGIN_USER_SUCCESS:
      return { ...state, loggedIn: true, error: '', user: action.user };
    case types.LOGIN_USER_FAIL:
      return { ...state, error: action.error, loggedIn: false };
    default:
      return state;
  }
};

export const createUserSuccess = resp => {
  return {
    type: types.CREATE_USER_SUCCESS,
    user: resp
  };
};

export const createUserFail = error => {
  return {
    type: types.CREATE_USER_FAIL,
    error
  };
};
export const loginLoading = status => {
  return {
    type: types.LOGIN_LOADING,
    status
  };
};
export const loginUserSuccess = resp => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    user: resp
  };
};

export const loginUserFail = error => {
  return {
    type: types.LOGIN_USER_FAIL,
    error
  };
};

export const loggedIn = status => {
  return {
    type: types.LOGGED_IN,
    status
  };
};


export const createUser = (email, pass) => dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(resp => {
      dispatch(createUserSuccess(resp));
    })
    .catch(error => dispatch(createUserFail(error)));
};

export const loginUser = (email, pass) => dispatch => {
  dispatch(loginLoading(true));
  firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then(resp => {
      dispatch(loggedIn(true));
      dispatch(loginUserSuccess(resp));
      dispatch(loginLoading(false));
    })
    .catch(error => {
      dispatch(loginUserFail(error.code));
      dispatch(loginLoading(false));
    });
};


export default auth;