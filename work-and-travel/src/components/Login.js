import {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/login.css'
class Login extends Component{
    render() {
        return(
            <div id="login">
                <h3 className="text-center text-white pt-5">Најава на корисник</h3>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" action="" method="post">
                                    <h3 className="text-center text-info">Најава</h3>
                                    <div className="form-group">
                                        <label>Е-пошта</label>
                                        <input type="email" className="form-control" placeholder="Е-пошта"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Лозинка</label>
                                        <input type="password" className="form-control" placeholder="Лозинка"/>
                                    </div>
                                    <button id="btn-submit" className="btn-block btn-primary">Најави се</button>
                                    <button id="btn-facebook" className="btn-block btn-primary">Регистрирај се преку Facebook</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;