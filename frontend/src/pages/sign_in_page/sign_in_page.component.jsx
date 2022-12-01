import React, { Component } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";

import "./sign_in_page.styles.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      // email is removed
      username: "",
      password: "",
      isSignedIn: false,
    };
    //this.changeFullName = this.changeFullName.bind(this);

    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    //let history = useHistory();
    //let navigate = response.useNavigate();
    const loginData = {
      //fullName: this.state.fullName,
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://localhost:4000/app/signin", loginData)
      .then((response) => {
        let loginRes = response.data;
        //let navigate = response.useNavigate();
        if (loginRes.status === 1) {
          this.setState({ isSignedIn: true });
        } else {
          alert(loginRes.message);
        }
      });

    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    if (this.state.isSignedIn) {
      return <Navigate to={{ pathname: "/home " }} />;
    }
    return (
      <div className="auth-from-container">
        {/* <h1>Welcome to our shopping mall.</h1>
        <h1>Please login to continue</h1> */}
        <h1>Login</h1>
        <div className="auth-form">
          <form className="login-form" onSubmit={this.onSubmit}>
            <label className="login-headers">Username</label>
            <input
              className="login-username"
              type="text"
              placeholder="Username"
              onChange={this.changeUsername}
              value={this.state.username}
            />

            <label className="login-headers">Password</label>
            <input
              className="login-password"
              type="password"
              placeholder="Password"
              onChange={this.changePassword}
              value={this.state.password}
            />

            <input
              type="submit"
              className=" submit-button"
              value="Submit"
            ></input>
          </form>
        </div>
        <div className="no-account">
          <h2 className="link-btn-text">Don't have an account? Register </h2>
          <Link className="link-btn-register" to="/register">here</Link>
        </div>
      </div>
    );
  }
}

export default Login;
