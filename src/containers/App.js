import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import history from "../history";
import { setAuthToken, setCurrentUser } from "../store/actions";
import jwtDecode from "jwt-decode";
import configureStore from "../index";

const store = configureStore();
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (error) {
    console.log(error);
    store.dispatch(setCurrentUser({}));
  }
}
const App = props => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Fragment>
          <Navbar />
          <Main />
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
