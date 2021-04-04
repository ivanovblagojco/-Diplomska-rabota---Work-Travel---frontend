import React, {Component} from "react";
import Navbar from "./Navbar";
import '../css/forgot.css'

import {Link} from "react-router-dom";
import authenticationService from "../axios/authentication";

class ForgotPassword extends Component{
    handleSubmit = (e) =>{
        e.preventDefault();

        authenticationService.ForgotPassword(this.email);
    }

    render() {
        return(
            <div>
                <div id="forgot">
                    <Navbar/>
                    <br/>
                    <h3 className="text-center pt-5" style={{color:"#17a2b8"}}>Барање за обнова на лозинка</h3>
                    <div className="container">
                        <div id="forgot-row" className="row justify-content-center align-items-center">
                            <div id="forgot-column" className="col-md-6">
                                <div id="forgot-box" className="col-md-12">
                                    <form id="forgot-form" className="form" action="" method="post"  onSubmit={this.handleSubmit}>
                                        <h3 className="text-center text-info">Обнова на лозинка</h3>
                                        <div className="form-group">
                                            <label>Е-пошта</label>
                                            <input type="email" className="form-control" placeholder="Е-пошта" onChange={e=>this.email = e.target.value}/>
                                        </div>
                                        <button id="btn-submit" className="btn-block btn-primary">Испрати</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;