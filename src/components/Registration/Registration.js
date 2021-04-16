import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";

class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Registration page</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

// сокращенная запись mapDispatchToProps
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Registration);
