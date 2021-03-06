import {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/login.css'
import authenticationService from '../axios/authentication'
import Home from "./Home";
import Navbar from './Navbar'
class Login extends Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        authenticationService.Login(this.email, this.password)
    }
    render() {
        if(authenticationService.CheckIfUserLoggedIn()===false){
            return(<div>
                    <div id="login">
                        <Navbar/>
                        <br/>
                        <h3 className="text-center text-white pt-5">Најава на корисник</h3>
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
                                            <button id="btn-facebook" className="btn-block btn-primary">Регистрирај се преку Facebook</button>
                                        </form>
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