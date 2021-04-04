import React, { Component } from 'react';
import Home from "./Home";
import Login from "./Login"
import Register from "./Register"
import FirstRegister from "./FirstRegister"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import PostCard from "./PostCard";
import CarouselSlider from "./CarouselSlider";
import PostCreate from "./PostCreate";
import PostPreview from "./PostPreview";
import img from "../images/smoke-white.png"
import MessageCreate from "./MessageCreate";
import MessagesPreview from "./MessagesPreview";
import Profile from "./Profile";
class App extends Component {
    componentDidMount() {
        //document.body.style.background = `url(${img}) repeat`
        document.body.style.background = 'white'
        document.body.style.color = 'black'
    }
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
                    <Route exact path="/post" component={PostCard}/>
                    <Route exact path="/caro" component={CarouselSlider}/>
                    <Route exact path="/createPost" component={PostCreate}/>
                    <Route path='/posts/:id' exact={true} component={PostPreview}/>
                    <Route exact path="/createMessage" component={MessageCreate}/>
                    <Route exact path="/messagesPreview" component={MessagesPreview}/>
                    <Route exact path="/profile" component={Profile}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;