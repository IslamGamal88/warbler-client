import { SET_CURRENT_USER, ADD_ERROR, REMOVE_ERROR, LOAD_MESSAGES, REMOVE_MESSAGE } from "./types";
import { apiCall, setToken } from "../../services/api";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const signOut = () => dispatch => {
  localStorage.clear();
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

export const addError = error => {
  return {
    type: ADD_ERROR,
    error
  };
};

export const removeError = () => {
  return {
    type: REMOVE_ERROR
  };
};

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const remove = id => ({
  type: REMOVE_MESSAGE,
  id
});

export const setAuthToken = token => {
  setToken(token);
};

export const authUser = (type, userData) => dispatch => {
  return new Promise((resolve, reject) => {
    return apiCall("post", `/api/auth/${type}`, userData)
      .then(({ token, ...user }) => {
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        dispatch(setCurrentUser(user));
        dispatch(removeError());
        resolve();
      })
      .catch(err => {
        dispatch(addError(err.message));
        reject();
      });
  });
};

export const fetchMessages = () => dispatch => {
  return apiCall("get", "/api/messages")
    .then(response => dispatch(loadMessages(response)))
    .catch(err => dispatch(addError(err.message)));
};

export const createMessage = text => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/users/${id}/messages`, { text })
    .then(res => {
      dispatch(loadMessages(res));
    })
    .catch(err => dispatch(addError(err.message)));
};

export const deleteMessage = (userId, messageId) => dispatch => {
  return apiCall("delete", `/api/users/${userId}/messages/${messageId}`)
    .then(() => dispatch(remove(messageId)))
    .catch(err => dispatch(addError(err.message)));
};
