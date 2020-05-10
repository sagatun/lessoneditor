import {
  ADD_TEXT,
  PARSE_MD,
  SIGN_IN,
  SIGN_OUT,
  STORE_YAML_HEADER
} from "./types";

export const addText = text => {
  return { type: ADD_TEXT, payload: text };
};

export const parseMD = text => {
  return { type: PARSE_MD, payload: text };
};

export const storeYAMLheader = text => {
  return { type: STORE_YAML_HEADER, payload: text };
};

export const signIn = (userId, firstName, lastName, imageUrl, email) => {
  return {
    type: SIGN_IN,
    payload: { userId, firstName, lastName, imageUrl, email }
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
