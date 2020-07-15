import { createStore } from "redux";

export default createStore(function (state, action) {
  if (state === undefined) {
    return { user: null };
  }
  switch (action.type) {
    case "SIGNIN":
      return { ...state, user: action.user };
    case "SIGNOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
