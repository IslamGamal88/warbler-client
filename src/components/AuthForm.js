import React, { Component } from "react";

class AuthForm extends Component {
  state = { email: "", username: "", password: "", profileImageUrl: "" };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => this.props.history.push("/"))
      .catch(() => {
        return;
      });
  };

  render() {
    const { email, username, profileImageUrl } = this.state;
    const { heading, buttonText, signUp, errors, history, removeError } = this.props;
    const errorClass = errors.message ? "alert alert-danger" : "";
    history.listen(() => removeError());

    return (
      <div>
        <div className='row justify-content-md-center text-center'>
          <div className='col-md-6'>
            <form onSubmit={this.onSubmit}>
              <h2>{heading}</h2>
              {errors ? <div className={errorClass}>{errors.message}</div> : null}
              <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input
                  className='form-control'
                  type='text'
                  name='email'
                  onChange={this.onChange}
                  value={email}
                  id='email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input
                  className='form-control'
                  type='password'
                  name='password'
                  onChange={this.onChange}
                  id='password'
                />
              </div>
              {signUp && (
                <React.Fragment>
                  <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input
                      className='form-control'
                      type='text'
                      name='username'
                      onChange={this.onChange}
                      value={username}
                      id='username'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='image-url'>Image Url:</label>
                    <input
                      className='form-control'
                      type='text'
                      name='profileImageUrl'
                      onChange={this.onChange}
                      value={profileImageUrl}
                      id='image-url'
                    />
                  </div>
                </React.Fragment>
              )}
              <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
