import { combineReducers } from "redux";
import errors from "./errors";
import currentUser from "./currentUser";
import messages from "./messages";
export default combineReducers({
  errors,
  currentUser,
  messages
});
