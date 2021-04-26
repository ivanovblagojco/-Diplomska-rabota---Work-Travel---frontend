import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import '../css/navbar.css'
import {Link} from "react-router-dom";
import {Component} from "react";
import authenticationService from '../axios/authentication'
import { faArchive, faCashRegister, faGlobe, faHome, faIdCard, faInbox, faInfo, faInfoCircle, faNewspaper, faPlus, faRegistered, faRoute, faSignInAlt, faSignOutAlt, faUser, faUserEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component{
    render() {
        let buttons;
        if(authenticationService.CheckIfUserLoggedIn()===true && localStorage.getItem("email")==="admin@admin.com"){
            <ul class="navbar-nav ml-auto nav-flex-icons">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item waves-effect waves-light" href="/messagesPreview"><FontAwesomeIcon icon={faInbox} /> Мои пораки</a>
                            <a class="dropdown-item waves-effect waves-light" href="/createPost"><FontAwesomeIcon icon={faPlus} /> Објави/Нова објава</a>
                            <a class="dropdown-item waves-effect waves-light" href="/profile"><FontAwesomeIcon icon={faUserEdit} /> Профил</a>
                            <a class="dropdown-item waves-effect waves-light" href="/contacts"><FontAwesomeIcon icon={faInfoCircle} /> Контакт форми</a>
                            <a class="dropdown-item waves-effect waves-light" href="/" onClick={() => localStorage.clear()}> <FontAwesomeIcon icon={faSignOutAlt} /> Одјави се </a>
                        </div>
                    </li>
                </ul>
        }
        else if(authenticationService.CheckIfUserLoggedIn()===true) {
            buttons = (
                <ul class="navbar-nav ml-auto nav-flex-icons">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item waves-effect waves-light" href="/messagesPreview"><FontAwesomeIcon icon={faInbox} /> Мои пораки</a>
                            <a class="dropdown-item waves-effect waves-light" href="/createPost"><FontAwesomeIcon icon={faPlus} />Објави/Нова објава</a>
                            <a class="dropdown-item waves-effect waves-light" href="/myApplications"><FontAwesomeIcon icon={faIdCard} /> Апликации</a>
                            <a class="dropdown-item waves-effect waves-light" href="/profile"><FontAwesomeIcon icon={faUserEdit} /> Профил</a>
                            <a class="dropdown-item waves-effect waves-light" href="/contacts"><FontAwesomeIcon icon={faInfoCircle} /> Контакт форми</a>
                            <a class="dropdown-item waves-effect waves-light" href="/" onClick={() => localStorage.clear()}> <FontAwesomeIcon icon={faSignOutAlt} /> Одјави се </a>
                        </div>
                    </li>
                </ul>
            )
        }else{
            buttons = (
                <ul class="navbar-nav ml-auto nav-flex-icons">
                    <li class="nav-item ">
                        <a class="nav-link waves-effect waves-light" href="/login"> <FontAwesomeIcon icon={faSignInAlt} />Најава </a>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link waves-effect waves-light" href="/register"> <FontAwesomeIcon icon={faUserPlus} />Регистрација </a>

                    </li>
                </ul>
            )
        }
        return (
            <div className="App" style={{ marginBottom:"100px"}}>
                <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color fixed-top" style={{background:"linear-gradient(to right, #03A9F4, #1F75FE, #03A9F4)", minHeight:"80px"}}>
                    <a class="navbar-brand" href="/">Work & Travel</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent-3">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light" href="/"> <FontAwesomeIcon icon={faHome} />Почетна</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light" href="/posts"> <FontAwesomeIcon icon={faGlobe} />Објави</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light" href="/travel"><FontAwesomeIcon icon={faRoute} /> Патувања</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light" href="/contact"><FontAwesomeIcon icon={faInfoCircle} /> Контакт</a>
                            </li>
                        </ul>

                        {buttons}

                    </div>
                </nav>
            </div>

        );
    }


}

export default Navbar;
