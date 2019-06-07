import firebase from "react-native-firebase";

export const Types = {
  CREATE: "activities/CREATE",
  ERROR: "activities/ERROR"
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

export const createActivities = dados => dispatch => {
  const db = firebase
    .database()
    .ref(`/users/${firebase.auth().currentUser.uid}`);
  db.child("activities").push(dados);
};
