import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { SignIcon } from './SignStyleComponent/SignStylesComponent';
import SignLogo from './img/padlock.svg';

const Sign = () => (
  <div className="signArea">
    <SignIcon>
      <img src={SignLogo} alt="SignLogo" className="signLogo" />
    </SignIcon>

    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
    </Router>

    <footer>Copyright © Your Website 2020</footer>
  </div>
);

export default Sign;
