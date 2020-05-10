import { STORE_YAML_HEADER } from "../actions/types";

const INITIAL_STATE = "";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_YAML_HEADER:
      return action.payload;
    default:
      return state;
  }
};
