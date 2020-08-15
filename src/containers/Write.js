import Write from "../routes/Write";
import { connect } from "react-redux";
function mapStateToProps(state) {
  if (state.user !== null) {
    return {
      user_id: state.user.id,
      grade: state.user.grade,
      logged: state.logged,
    };
  }
  return { user_id: state.user, grade: state.user, logged: state.logged };
}
export default connect(mapStateToProps, null)(Write);
