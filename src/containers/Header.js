import { Header } from "../components";
import { connect } from "react-redux";
function mapStateToProps(state) {
  if (state.user !== null) {
    return { displayName: state.user.displayName };
  }
  return { displayName: null };
}
function mapDispatchToProps(dispatch) {
  return {
    signOutSuccess: function () {
      dispatch({ type: "SIGNOUT" });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
