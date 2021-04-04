import {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/login.css'
import authenticationService from '../axios/authentication'
import userService from '../axios/userService'
import Home from "./Home";
import Navbar from './Navbar'
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
const AUTH_TOKEN = 'auth_token';


/*global FB*/
class Login extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://connect.facebook.net/en_US/sdk.js"
        script.async = true;
        script.crossOrigin="crossorigin";
        script.defer=true;

        document.body.appendChild(script);


        window.fbAsyncInit = function () {
            FB.init({
                appId: "255570682911453",
                autoLogAppEvents: true,
                xfbml: true,
                version: "v7.0",
            });
        };
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        authenticationService.Login(this.email, this.password).then(res=>{
                if(res!==undefined){
                    userService.getLoggedUser().then(data=>{
                        localStorage.setItem("email", data.email);
                        window.location.href="/";
                    });

                }
            }
        )
    }
    render() {

        const getFacebookAccessToken = () =>{
            FB.login(function(response) {
                if (response.status === 'connected') {
                    // Logged into your webpage and Facebook.
                    const facebookLoginRequest = {
                        accessToken: response.authResponse.accessToken,
                    };
                    authenticationService.facebookLogin(facebookLoginRequest)
                        .then((response) => {
                            localStorage.setItem(AUTH_TOKEN, response.data);
                            userService.getLoggedUser().then(data=>{
                                localStorage.setItem("email", data.email);
                                window.location.href="/";
                            });
                        });
                } else {
                    // The person is not logged into your webpage or we are unable to tell.
                }
            }, {scope: 'email'});
        }
        if(authenticationService.CheckIfUserLoggedIn()===false){
            return(<div>
                    <div id="login">
                        <Navbar/>
                        <br/>
                        <h3 className="text-center pt-5" style={{color:"#17a2b8"}}>Најава на корисник</h3>
                        <div className="container">
                            <div id="login-row" className="row justify-content-center align-items-center">
                                <div id="login-column" className="col-md-6">
                                    <div id="login-box" className="col-md-12">
                                        <form id="login-form" className="form" action="" method="post"  onSubmit={this.handleSubmit}>
                                            <h3 className="text-center text-info">Најава</h3>
                                            <div className="form-group">
                                                <label>Е-пошта</label>
                                                <input type="email" className="form-control" placeholder="Е-пошта" onChange={e=>this.email = e.target.value}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Лозинка</label>
                                                <input type="password" className="form-control" placeholder="Лозинка" onChange={e=>this.password = e.target.value}/>
                                            </div>
                                            <button id="btn-submit" className="btn-block btn-primary">Најави се</button>
                                        </form>
                                        <button id="btn-facebook" className="btn-block btn-primary" onClick={getFacebookAccessToken}>Регистрирај се преку Facebook</button>
                                        <Link to="/forgot_password">Заборавена лозинка?</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                window.location = '/'
            )
        }

    }
}
export default Login;