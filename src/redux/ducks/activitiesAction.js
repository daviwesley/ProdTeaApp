import firebase from "react-native-firebase";

export const Types = {
  ACTIVITY_CREATE: "activities/CREATE",
  ACTIVITY_ERROR: "activities/ERROR",
  ACTIVITY_LOADING: "activities/loading"
};
// activity example
// activity = {
//   title: "Fazer liçao de português",
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
    default:
      return state;
  }
};

// actions
export const createActivities = dados => dispatch => {
  const db = firebase
    .database()
    .ref(`/users/${firebase.auth().currentUser.uid}`);
  db.child("activities").push(dados);
};

export const activityLoading = status => {
  return {
    type: Types.ACTIVITY_LOADING,
    status
  };
};

export default activityReducer;
