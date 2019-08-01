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
  LOGGED_IN: "auth/LOGGED_IN",
  LOGGED_OUT: "auth/LOGGED_OUT",
  USER_ERROR: "auth/USER_ERROR",
  PASSWD_ERROR: "auth/PASWD_ERROR"
};
const INITIAL = {
  loading: false,
  loggedIn: false,
  error: "",
  userError: false,
  passwordError: false
};
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
      return { ...state, loggedIn: action.status };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, loggedIn: true, error: "", user: action.user };
    case types.LOGIN_USER_FAIL:
      return { ...state, error: action.error, loggedIn: false };
    case types.LOGGED_OUT:
      return { ...state, loggedIn: false };
    case types.USER_ERROR:
      return { ...state, userError: action.status };
    case types.PASSWD_ERROR:
      return { ...state, passwordError: action.status };
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

export const loggedOut = () => {
  return {
    type: types.LOGGED_OUT
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

export const userError = status => {
  return {
    type: types.USER_ERROR,
    status
  };
};

export const passwordError = status => {
  return {
    type: types.PASSWD_ERROR,
    status
  };
};

export const createUser = (email, pass, name) => dispatch => {
  dispatch(loginLoading(true));
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(resp => {
      dispatch(createUserSuccess(resp));
      firebase.auth().currentUser.updateProfile({
        displayName: name,
        // TODO
        //photoURL: "https://example.com/jane-q-user/profile.jpg"
      });
      dispatch(loginLoading(false));
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
      dispatch(loginLoading(false));
      dispatch(userError(false));
      dispatch(passwordError(false));
    })
    .catch(error => {
      switch (error.code) {
        case "auth/user-not-found":
          dispatch(loginUserFail("Usuário não encontrado"));
          dispatch(userError(true));
          dispatch(loginLoading(false));
          break;
        case "auth/wrong-password":
          dispatch(passwordError(true));
          dispatch(loginUserFail("Senha incorreta"));
          dispatch(loginLoading(false));
          break;
        case "auth/invalid-email":
          dispatch(passwordError(true));
          dispatch(loginUserFail("Endereço de e-mail inválido"));
          dispatch(loginLoading(false));
          break;
        case "auth/user-disabled":
          dispatch(passwordError(true));
          dispatch(loginUserFail("Sua conta foi desativada"));
          dispatch(loginLoading(false));
          break;
        default:
          dispatch(loginUserFail(error.code));
          dispatch(loginLoading(false));
      }
    });
};

export const loggoutUser = () => async dispatch => {
  await firebase.auth().signOut();
  dispatch(loggedOut());
};

export default auth;
