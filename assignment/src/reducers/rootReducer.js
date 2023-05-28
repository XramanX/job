import { combineReducers } from "redux";
import { accountReducer, userReducer } from "./accountReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  users: userReducer,
});

export default rootReducer;
