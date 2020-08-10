import Write from "../routes/Write";
import { connect } from "react-redux";
function mapStateToProps(state) {
  if (state.user !== null) {
    return { user_id: state.user.id };
  }
  return { user_id: state.user };
}
export default connect(mapStateToProps, null)(Write);
