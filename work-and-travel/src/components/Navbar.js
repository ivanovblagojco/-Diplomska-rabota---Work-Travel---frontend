import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import '../css/navbar.css'
import {Link} from "react-router-dom";
import {Component} from "react";
import authenticationService from '../axios/authentication'
class Navbar extends Component{
    render() {
        let buttons;
        if(authenticationService.CheckIfUserLoggedIn()===true) {
            buttons = (
                <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                    <li className="nav-item"><Link to={'/'} class="nav-link" onClick={()=>localStorage.clear()}>Одјави се</Link></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {localStorage.getItem("email")}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{background:"#17a2b8"}}>
                            <a className="dropdown-item text-white" href="/messagesPreview">Мои пораки</a>
                            <a className="dropdown-item text-white" href="/profile">Профил</a>
                        </div>
                    </li>
                </ul>
            )
        }else{
            buttons = (
                <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                    <li className="nav-item"><Link to={'/login'} class="nav-link">Најава</Link></li>
                    <li className="nav-item"><Link to={'/register'} class="nav-link">Регистрација</Link></li>
                </ul>
            )
        }
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark static-top" role="navigation">
                    <div className="container">
                        <a className="navbar-brand" href="/">Work&Travel</a>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                            &#9776;
                        </button>
                        <div className="collapse navbar-collapse" id="exCollapsingNavbar">
                            <ul className="nav navbar-nav">
                                <li className="nav-item"><a href="/" className="nav-link">Почетна</a></li>
                                <li className="nav-item"><a href="/createPost" className="nav-link">Креирај објава</a></li>
                            </ul>
                            {buttons}
                        </div>
                    </div>
                </nav>
            </div>

        );
    }


}

export default Navbar;
