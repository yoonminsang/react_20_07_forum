import { Menu } from "../components";
import { connect } from "react-redux";
function mapStateToProps(state) {
  if (state.user !== null) {
    return { email: state.user.email };
  }
  return { email: null };
}
export default connect(mapStateToProps, null)(Menu);
