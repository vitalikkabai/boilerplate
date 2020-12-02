import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  SignTitle,
  InputStyleComponent,
  SignButton,
} from "../SignStyleComponent/SignStylesComponent";

class SignIn extends Component {
state = {
  email: "",
  password: "",
}


onChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
};


onClick = () => {
  const userInfo = JSON.parse(localStorage.getItem("logInfo"));
  console.log(userInfo);
  if(userInfo.email === this.state.email && userInfo.password === this.state.password) {
    alert(`Hello ${userInfo.firstName} ${userInfo.lastName}`)
  }
}

  render() {
    return (
      <form className="signIn">
        <SignTitle>Sign In</SignTitle>

        <InputStyleComponent
          placeholder="Email address *"
          name="email"
          type="text"
          onChange={this.onChange}
        />
        <InputStyleComponent
          placeholder="Password *"
          name="password"
          type="password"
          onChange={this.onChange}
        />

        <label htmlFor="check1" className="checkboxLabel">
          <input type="checkbox" className="checkInput" id="check1" />
          <div className="checkBox" />
          <p className="rememberCheck">Remember me</p>
        </label>

        <SignButton type="button" onClick={this.onClick}>SIGN IN</SignButton>

        <span className="helpLine">
          <p className="smallBtnSignUp">
            <Link to="/" className="signUpBtn">
              Forgot password?
            </Link>
          </p>

          <p className="smallBtnSignUp">
            <Link to="/signUp" className="signUpBtn">
              Don`t have an account? Sign Up
            </Link>
          </p>
        </span>
      </form>
    );
  }
}

export default SignIn;
