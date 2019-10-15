import firebase from "react-native-firebase";

export const Types = {
  ACTIVITY_CREATE: "activities/CREATE",
  ACTIVITY_ERROR: "activities/ERROR",
  ACTIVITY_LOADING: "activities/loading",
  ACTIVITY_SET: "activities/SET",
  ACTIVITY_REMOVE_SUCCESS: "activities/REMOVE_SUCCESS",
  ACTIVITY_EDIT_SUCCESS: "activities/EDIT_SUCCESS"
};

// activity example
// activity = {
//   title: "Fazer liçao de português",
//   description: "resolver as questões"
//   start: "2019-06-08",
//   end: "2019-06-09",
//   status: "done"
// }

const initialState = {
  activities: [],
  error: null
};

// reducer
const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ACTIVITY_ERROR:
      return { ...state, error: action.error };
    case Types.ACTIVITY_LOADING:
      return { ...state, loading: action.status };
    case Types.ACTIVITY_SET:
      return { ...state, actions: action.atv };
    case Types.ACTIVITY_REMOVE_SUCCESS:
      return { ...state, remove_status: action.status };
    case Types.ACTIVITY_EDIT_SUCCESS:
      return { ...state, remove_status: action.status };
    default:
      return state;
  }
};

// actions
// Crud
export const createActivities = dados => dispatch => {
  const db = firebase
    .database()
    .ref(`/users/${firebase.auth().currentUser.uid}`);

  db.child("activities")
    .push(dados)
    .then(() => {
      dispatch(activityLoading(false));
    })
    .catch(e => dispatch(activityError(e)));
};
//cRud
export const listActivities = () => dispatch => {
  dispatch(activityLoading(true));
  const db = firebase
    .database()
    .ref(`/users/${firebase.auth().currentUser.uid}`);

  db.child("activities")
    .once("value")
    .then(data => {
      dispatch(setActivities(data.exportVal()));
      dispatch(activityLoading(false));
    })
    .catch(e => dispatch(activityError(e)));
};
//crUd
export const editActivity = (id, obj) => dispatch => {
  const db = firebase
    .database()
    .ref(`/users/${firebase.auth().currentUser.uid}`);

  db.child(`activities/${id}`)
    .update(obj)
    .then(() => dispatch(setEditSuccess(true)))
    .catch(e => dispatch(activityError(e)));
};
//cruD
export const removeActivity = id => dispatch => {
  const db = firebase
    .database()
    .ref(`/users/${firebase.auth().currentUser.uid}`);

  db.child(`activities/${id}`)
    .remove()
    .then(() => dispatch(setRemoveSuccess(true)))
    .catch(e => dispatch(activityError(e)));
};

export const activityLoading = status => {
  return {
    type: Types.ACTIVITY_LOADING,
    status
  };
};

export const activityError = error => {
  return {
    type: Types.ACTIVITY_ERROR,
    error
  };
};

export const setActivities = atv => {
  return {
    type: Types.ACTIVITY_SET,
    atv
  };
};

export const setRemoveSuccess = status => {
  return {
    type: Types.ACTIVITY_REMOVE_SUCCESS,
    status
  };
};

export const setEditSuccess = status => {
  return {
    type: Types.ACTIVITY_EDIT_SUCCESS,
    status
  };
};

export default activityReducer;
