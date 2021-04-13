import React, { Component } from "react";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ name: "", email: "", password: "" });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Enter your login</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginView;
