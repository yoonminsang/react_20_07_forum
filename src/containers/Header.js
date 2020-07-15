import Header from "../components/Header";
import { connect } from "react-redux";
function mapStateToProps(state) {
  if (state.user !== null) {
    return { rDisplayName: state.user.displayName };
  }
  return { rDisplayName: state.user };
}
function mapDispatchToProps(dispatch) {
  return {
    signOutSuccess: function () {
      dispatch({ type: "SIGNOUT" });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
