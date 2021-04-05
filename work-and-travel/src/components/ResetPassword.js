import React, {Component} from "react";
import Navbar from "./Navbar";
import '../css/reset.css'
import authenticationService from "../axios/authentication";


class ResetPassword extends Component{
    constructor(props) {
        super(props);
        this.state={};

        this.validatePassword=this.validatePassword.bind(this);

    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('token');
        this.setState({
            token:token
        })
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
    handleSubmit = (e) =>{
        e.preventDefault();

        authenticationService.ResetPassword(this.password, this.state.token);
    }
    onChangePassword(e){
        this.password = e.target.value;
    }
    render() {
        return(
            <div>
                <div id="reset">
                    <Navbar/>
                    <br/>
                    <h3 className="text-center pt-5" style={{color:"#17a2b8"}}>Поставување нова лозинка</h3>
                    <div className="container">
                        <div id="reset-row" className="row justify-content-center align-items-center">
                            <div id="reset-column" className="col-md-6">
                                <div id="reset-box" className="col-md-12">
                                    <form id="reset-form" className="form" action="" method="post"  onSubmit={this.handleSubmit}>
                                        <h3 className="text-center text-info">Нова лозинка</h3>
                                        <div className="form-group">
                                            <label>Нова лозинка</label>
                                            <input id = "password" type="password" className="form-control" placeholder="Нова лозинка" onChange={e => { this.onChangePassword(e); this.validatePassword() }} required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Потврди лозинка</label>
                                            <input id="confirm_password" type="password" className="form-control" placeholder="Потврди лозинка" onChange={e => { this.onChangePassword(e); this.validatePassword() }} required/>
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

export default ResetPassword;