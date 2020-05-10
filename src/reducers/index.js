import { combineReducers } from "redux";
import mdTextReducer from "./mdTextReducer";
import parseMDReducer from "./parseMDReducer";
import authReducer from "./authReducer";
import YAMLheaderReducer from "./YAMLheaderReducer.js";

export default combineReducers({
  mdText: mdTextReducer,
  parseMD: parseMDReducer,
  auth: authReducer,
  YAMLheader: YAMLheaderReducer
});
