import {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/register.css'
import authenticationService from '../axios/authentication'
import Navbar from "./Navbar";
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';

class Register extends Component{
    constructor(props){
        super(props);

        this.validatePassword=this.validatePassword.bind(this);
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name: this.name,
            surname: this.surname
        }
        debugger;
        authenticationService.addNewUser(data, this.email, this.password);
    }
    
    onChangePassword(e){
        this.password = e.target.value;
    }
    validatePassword(){
        let password = document.getElementById("password")
    , confirm_password = document.getElementById("confirm_password");
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }

    render() {
        if(authenticationService.CheckIfUserLoggedIn()===false){
            return(

                <div>
                    <Navbar/>
                    <br/>
                    <div id="register">
                        <ReactNotification/>
                        <h3 className="text-center pt-5" style={{color:"#17a2b8"}}>Регистрација на корисник</h3>
                        <div className="container">
                            <div id="register-row" className="row justify-content-center align-items-center">
                                <div id="register-column" className="col-md-6">
                                    <div id="register-box" className="col-md-12">
                                        <form id="register-form" className="form" action="" method="post" onSubmit={this.handleSubmit}>
                                            <h3 className="text-center text-info" style={{color:"#17a2b8"}}>Регистрација</h3>
                                            <div className="form-group">
                                                <label>Име</label>
                                                <input type="text" className="form-control" placeholder="Име" onChange={e=>this.name = e.target.value} required/>
                                            </div>
                                            <div className="form-group">
                                                <label>Презиме</label>
                                                <input type="text" className="form-control" placeholder="Презиме" onChange={e=>this.surname = e.target.value} required/>
                                            </div>
                                            <div className="form-group">
                                                <label>Е-пошта</label>
                                                <input type="email" className="form-control" placeholder="Е-пошта" onChange={e=>this.email = e.target.value} required/>
                                            </div>
                                            <div className="form-group">
                                                <label>Лозинка</label>
                                                <input id="password" type="password" className="form-control" placeholder="Лозинка" onChange={e => { this.onChangePassword(e); this.validatePassword() }} required/>
                                            </div>
                                            <div className="form-group">
                                                <label>Потврди лозинка</label>
                                                <input id="confirm_password" type="password" className="form-control" placeholder="Потрврди лозинка"    onChange={e => { this.onChangePassword(e); this.validatePassword() }}  required/>
                                            </div>
                                            <button id="btn-submit" className="btn-block">Регистрирај се</button>
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
                window.location='/'
            )
        }

    }
}
export default Register;