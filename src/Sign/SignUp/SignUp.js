import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  SignTitle,
  InputStyleComponent,
  SignButton,
} from "../SignStyleComponent/SignStylesComponent";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onClick = (event) => {
    // event.preventDefault();
    localStorage.setItem("logInfo", JSON.stringify(this.state));
    console.log(this.state);
  };

  render() {
    return (
      <form className="signUp">
        <SignTitle>Sign Up</SignTitle>

        <div className="yourName">
          <InputStyleComponent
            name="firstName"
            type="text"
            halfWidth
            placeholder="First Name *"
            onChange={this.onChange}
          />
          <InputStyleComponent
            name="lastName"
            type="text"
            halfWidth
            placeholder="Last Name *"
            onChange={this.onChange}
          />
        </div>

        <InputStyleComponent
          name="email"
          type="text"
          placeholder="Email address *"
          onChange={this.onChange}
        />
        <InputStyleComponent
          name="password"
          type="password"
          placeholder="Password *"
          onChange={this.onChange}
        />

        <label htmlFor="check1" className="checkboxLabel">
          <input type="checkbox" className="checkInput" id="check1" />
          <div className="checkBox" />
          <p className="rememberCheck">
            I want to receive inspiration, marketing promotions and updates via
            email.
          </p>
        </label>

        <Link to="/">
          <SignButton type="button" onClick={this.onClick}>
            SIGN UP
          </SignButton>
        </Link>

        <span>
          <p className="smallBtnSignIn">
            <Link to="/" className="signInBtn">
              Already have an account? Sign In
            </Link>
          </p>
        </span>
      </form>
    );
  }
}

export default SignUp;
