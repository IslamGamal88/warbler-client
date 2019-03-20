import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser, removeError } from "../store/actions";
import Authentiacte from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";

const Main = ({ authUser, errors, removeError, currentUser }) => {
  return (
    <div>
      <Switch>
        <Route path='/' exact render={props => <Homepage currentUser={currentUser} {...props} />} />
        <Route
          path='/signin'
          exact
          render={props => (
            <AuthForm
              removeError={removeError}
              errors={errors}
              onAuth={authUser}
              buttonText='Log in'
              heading='Welcome Back'
              {...props}
            />
          )}
        />
        <Route
          path='/signup'
          exact
          render={props => (
            <AuthForm
              removeError={removeError}
              errors={errors}
              onAuth={authUser}
              signUp
              buttonText='Sign up'
              heading='Join Warbler today'
              {...props}
            />
          )}
        />
        <Route path='/users/:id/messages/new' component={Authentiacte(MessageForm)} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { authUser, removeError }
)(Main);
