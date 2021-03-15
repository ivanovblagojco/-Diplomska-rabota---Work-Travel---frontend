import React, { Component } from 'react';
import Home from "./Home";
import Login from "./Login"
import Register from "./Register"
import FirstRegister from "./FirstRegister"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/first_register" component={FirstRegister}/>
                <Route exact path="/forgot_password" component={ForgotPassword}/>
                <Route exact path="/reset_password" component={ResetPassword}/>
            </Switch>
        </BrowserRouter>
    )
  }
}

export default App;