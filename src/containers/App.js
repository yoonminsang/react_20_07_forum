import App from "../App";
import { connect } from "react-redux";
function mapDispatchToProps(dispatch) {
  return {
    autoSignIn: function (user) {
      dispatch({ type: "SIGNIN", user });
    },
  };
}
export default connect(null, mapDispatchToProps)(App);
