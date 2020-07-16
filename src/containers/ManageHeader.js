import { ManageHeader } from "../components";
import { connect } from "react-redux";
function mapStateToProps(state) {
  if (state.user !== null) {
    return { rGrade: state.user.grade };
  }
  return { rGrade: state.user };
}
export default connect(mapStateToProps, null)(ManageHeader);
