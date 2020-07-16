import { Footer } from "../components";
import { connect } from "react-redux";
function mapStateToProps(state) {
  if (state.user !== null) {
    return { grade: state.user.grade };
  }
  return { grade: state.user };
}
export default connect(mapStateToProps, null)(Footer);
