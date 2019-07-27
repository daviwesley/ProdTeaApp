import firebase from "react-native-firebase";

export const types = {
  START_LOAD: "auth/LOAD",
  STOP_LOAD: "auth/STOP",
  LOGGED_IN: "auth/LOGGED",
  CREATE_USER_SUCCESS: "auth/CREATE",
  CREATE_USER_FAIL: "auth/USER_FAIL",
  LOGGIN_USER_SUCCESS: "auth/USER_SUCCESS",
  LOGIN_USER_FAIL: "auth/LOGIN_FAIL",
  LOGIN_LOADING: "auth/LOGIN_LOADING"
};
const INITIAL = { loading: false, loggedIn: false };
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
        loading: true
      };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, loggedIn: true, loading: false };
    case types.LOGIN_USER_FAIL:
      return { ...state, error: action.error };
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
export const loginLoading = () => {
  return {
    type: types.LOGIN_LOADING
  };
};
export const loginUserSuccess = resp => {
  return {
    type: types.LOGGIN_USER_SUCCESS,
    user: resp
  };
};

export const loginUserFail = error => {
  return {
    type: types.LOGIN_USER_FAIL,
    error
  };
};

export const createUser = (email, pass) => dispatch => {
  dispatch(loginLoading());
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(resp => {
      dispatch(createUserSuccess(resp));
    })
    .catch(error => dispatch(createUserFail(error)));
};

export const loginUser = (email, pass) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then(resp => {
      dispatch(loginUserSuccess(resp));
    })
    .catch(error => {
      dispatch(loginUserFail(error.code));
    });
};

export const dispatchLogin = () => {
  return { type: types.LOGIN_USER_SUCCESS };
};

export default auth;
