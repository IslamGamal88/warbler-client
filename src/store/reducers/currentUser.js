import { SET_CURRENT_USER } from "../actions/types";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };
    default:
      return state;
  }
};
