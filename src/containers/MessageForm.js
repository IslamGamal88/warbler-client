import React, { Component } from "react";
import { connect } from "react-redux";
import { createMessage, removeError } from "../store/actions";

class MessageForm extends Component {
  state = { message: "" };

  onSubmit = e => {
    e.preventDefault();
    this.props.createMessage(this.state.message);
    this.setState({ message: "" });
    this.props.history.push("/");
  };

  render() {
    const errorClass = this.props.errors.message ? "alert alert-danger" : "";
    this.props.history.listen(() => this.props.removeError());
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit}>
          {this.props.errors ? <div className={errorClass}>{this.props.errors.message}</div> : null}
          <div className='form-group'>
            <label htmlFor='message'>What's on your mind.</label>
            <input
              className='form-control'
              type='text'
              onChange={e => {
                this.setState({ message: e.target.value });
              }}
              value={this.state.message}
            />
          </div>
          <button type='submit' className='btn btn-success btn-block'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { createMessage, removeError }
)(MessageForm);
