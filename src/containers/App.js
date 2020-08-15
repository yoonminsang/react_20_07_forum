import App from "../App";
import { connect } from "react-redux";
function mapDispatchToProps(dispatch) {
  return {
    autoSignIn: function (user) {
      dispatch({ type: "SIGNIN", user });
    },
    log: function (logged) {
      dispatch({ type: "LOG", logged });
    },
  };
}
export default connect(null, mapDispatchToProps)(App);
