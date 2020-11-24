import React from "react";
import "./styles.css";
import { ERRORS } from "./constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.state = {
      ShowUsername: false,
      ShowPassword: false
    };
  }

  handleChangeUsername(e) {
    if (!ERRORS.username.regex.test(e.target.value)) {
      this.setState({
        ShowUsername: true
      });
    } else {
      this.setState({
        ShowUsername: false
      });
    }
  }

  handleChangePassword(e) {
    if (!ERRORS.password.regex.test(e.target.value)) {
      this.setState({
        ShowPassword: true
      });
    } else {
      this.setState({
        ShowPassword: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="logo">
          <img
            src="https://www.freelogoservices.com/blog/wp-content/uploads/little_caesars_character-1.png"
            width="100px"
          />
        </div>
        <form noValidate>
          <label for="username">
            <span className="label-star">*</span> Username:
            <input
              id="username"
              name="username"
              placeholder="6~10 characters"
              type="text"
              noValidate
              onChange={this.handleChangeUsername}
            />
            {this.state.ShowUsername && (
              <span className="label-star">{ERRORS.username.message}</span>
            )}
          </label>
          <label for="password">
            <span className="label-star">*</span> Password:
            <input
              id="password"
              name="password"
              placeholder="6~10 numbers"
              type="password"
              noValidate
              onChange={this.handleChangePassword}
            />
            {this.state.ShowPassword && (
              <span className="label-star">{ERRORS.password.message}</span>
            )}
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
