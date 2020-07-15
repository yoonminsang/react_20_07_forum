import AuthSignUp from "../routes/AuthSignUp";
import { connect } from "react-redux";
function mapDispatchToProps(dispatch) {
  return {
    signInSuccess: function (user) {
      dispatch({ type: "SIGNIN", user });
    },
  };
}
export default connect(null, mapDispatchToProps)(AuthSignUp);
