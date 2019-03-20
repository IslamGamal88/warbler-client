import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class Authenticate extends Component {
    componentDidMount = () => {
      if (this.props.isAuthenticated === false) {
        this.props.history.push("/signin");
      }
    };
    componentDidUpdate = () => {
      if (this.props.isAuthenticated === false) {
        this.props.history.push("/signin");
      }
    };
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.currentUser.isAuthenticated
    };
  };

  return connect(mapStateToProps)(Authenticate);
};
