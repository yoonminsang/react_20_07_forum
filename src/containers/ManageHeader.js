import { ManageHeader } from "../components";
import { connect } from "react-redux";
function mapStateToProps(state) {
  if (state.user !== null) {
    return { grade: state.user.grade, logged: state.logged };
  }
  return { grade: state.user, logged: state.logged };
}
export default connect(mapStateToProps, null)(ManageHeader);
