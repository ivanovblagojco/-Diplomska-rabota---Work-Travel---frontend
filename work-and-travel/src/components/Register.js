import {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/register.css'
import authenticationService from '../axios/authentication'
class Register extends Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name: this.name,
            surname: this.surname
        }
        authenticationService.addNewUser(data, this.email, this.password);
    }
    render() {
        return(
            <div id="register">
                <h3 className="text-center text-white pt-5">Регистрација на корисник</h3>
                <div className="container">
                    <div id="register-row" className="row justify-content-center align-items-center">
                        <div id="register-column" className="col-md-6">
                            <div id="register-box" className="col-md-12">
                                <form id="register-form" className="form" action="" method="post" onSubmit={this.handleSubmit}>
                                    <h3 className="text-center text-info">Регистрација</h3>
                                    <div className="form-group">
                                        <label>Име</label>
                                        <input type="text" className="form-control" placeholder="Име" onChange={e=>this.name = e.target.value}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Презиме</label>
                                        <input type="text" className="form-control" placeholder="Презиме" onChange={e=>this.surname = e.target.value}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Е-пошта</label>
                                        <input type="email" className="form-control" placeholder="Е-пошта" onChange={e=>this.email = e.target.value}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Лозинка</label>
                                        <input type="password" className="form-control" placeholder="Лозинка" onChange={e=>this.password = e.target.value}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Потврди лозинка</label>
                                        <input type="password" className="form-control" placeholder="Потрврди лозинка" onChange={e=>this.confirmPassword = e.target.value}/>
                                    </div>
                                    <button id="btn-submit" className="btn-block">Регистрирај се</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;