import { createStore } from "redux";

export default createStore(function (state, action) {
  if (state === undefined) {
    return { user: null, logged: null };
  }
  switch (action.type) {
    case "SIGNIN":
      return { ...state, user: action.user };
    case "SIGNOUT":
      return { ...state, user: null };
    case "LOG":
      return { ...state, logged: action.logged };
    default:
      return state;
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
