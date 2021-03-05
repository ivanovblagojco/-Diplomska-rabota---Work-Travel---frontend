import React, { Component } from 'react';
import Home from "./Home";
import Login from "./Login"
import Register from "./Register"
import {BrowserRouter, Switch, Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>

            </Switch>
        </BrowserRouter>
    )
  }
}

export default App;