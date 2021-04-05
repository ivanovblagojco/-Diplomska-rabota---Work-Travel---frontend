import {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/profile.css'
import authenticationService from '../axios/authentication'
import Navbar from "./Navbar";
import Footer from "./Footer";
import userService from '../axios/userService'
import {PulseLoader} from "react-spinners";
import {Button} from "react-bootstrap";
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
class Profile extends Component{
    constructor(props) {
        super(props);

        this.state={
            User:null,
            isLoading:true,
            isShowing:false,
            oldPassword:"",
            newPassword:""
        }
        this.handleChangeCheckBox=this.handleChangeCheckBox.bind(this);
        this.handleSubmitPassword=this.handleSubmitPassword.bind(this);
        this.validatePassword=this.validatePassword.bind(this);
    }
    async componentDidMount() {
        const data = await userService.getLoggedUser();
        this.setState({
            User:data,
            isLoading:false
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

        const data = {
            name: this.state.User.name,
            surname: this.state.User.surname,
            email: this.state.User.email
        }
        authenticationService.updateUser(data).then(res=>{
            store.addNotification({
                title: "Успешно променети податоци!",
                message: "Успешно",
                type: "success",
                insert: "top",
                container: "top-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 3000,
                  onScreen: true
                }
              }); 
        });
    }
    handleChangeCheckBox (e) {
        e.preventDefault();

        this.setState({
            isShowing:!this.state.isShowing
        });
    }
    onChangePassword(e){
        this.state.newPassword = e.target.value;
    }
    handleSubmitPassword (e){
        debugger;
        e.preventDefault();

        const email=localStorage.getItem("email");
        const oldPassword=this.state.oldPassword;
        const newPassword=this.state.newPassword;
    

        authenticationService.userChangesPassword(email,oldPassword, newPassword).then(res=>{
            if(res!=undefined){
                store.addNotification({
                    title: "Успешно променета лозинка!",
                    message: "Успешно",
                    type: "success",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 3000,
                      onScreen: true
                    }
                  });   
            }else{
                store.addNotification({
                    title: "Неуспешна промена на лозинка!",
                    message: "Oбидете се повторно!",
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 3000,
                      onScreen: true
                    }
                  });   
            }
        })

    }

    render() {
        const isLoading = this.state.isLoading;
        const user = this.state.User;

        if(isLoading)
            return (<div className="loader">
                <PulseLoader color={"#202020"} loading={this.state.isLoading} size={40}/>
            </div>);
        if(authenticationService.CheckIfUserLoggedIn()===true){
            let helpForm;
            if(this.state.isShowing){
                helpForm=(
                    <div>
                        <form onSubmit={this.handleSubmitPassword} action="" method="post">
                            <div className="form-group">
                                <label>Стара лозинка</label>
                                <input type="password" className="form-control" placeholder="Стара лозинка" onChange={e=>this.state.oldPassword = e.target.value} required/>
                            </div>
                            <div className="form-group">
                                <label>Нова лозинка</label>
                                <input id="password" type="password" className="form-control" placeholder="Нова лозинка" onChange={e => { this.onChangePassword(e); this.validatePassword() }} required/>
                            </div>
                            <div className="form-group">
                                <label>Потврди нова лозинка</label>
                                <input id="confirm_password" type="password" className="form-control" placeholder="Потврди нова лозинка" onChange={e => { this.onChangePassword(e); this.validatePassword() }} required/>
                            </div>
                            <button id="btn-submit" className="btn-block">Зачувај ја лозинката</button>
                        </form>
                    </div>
                )
            }
            return(
                <div>
                    <Navbar/>
                    <ReactNotification/>
                    <br/>
                    <div id="profile">
                        <h3 className="text-center pt-5" style={{color:"#17a2b8"}}>Основни информации за корисник</h3>
                        <div className="container">
                            <div id="profile-row" className="row justify-content-center align-items-center">
                                <div id="profile-column" className="col-md-6">
                                    <div id="profile-box" className="col-md-12">
                                        <form id="profile-form" className="form" action="" method="post" onSubmit={this.handleSubmit}>
                                            <h3 className="text-center text-info" style={{color:"#17a2b8"}}>Измени информации</h3>
                                            <div className="form-group">
                                                <label>Име</label>
                                                <input type="text" className="form-control" placeholder="Име" onChange={e=>this.state.User.name = e.target.value} defaultValue={user.name}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Презиме</label>
                                                <input type="text" className="form-control" placeholder="Презиме" onChange={e=>this.this.state.User.surname = e.target.value} defaultValue={user.surname}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Е-пошта</label>
                                                <input type="email" className="form-control" placeholder="Е-пошта" defaultValue={user.email} disabled/>
                                            </div>
                                            <button id="btn-submit" className="btn-block">Зачувај промени</button>
                                            <hr/>
                                            <div>
                                                <Button id="checkBox" type="checkbox" className="btn-block mt-1 " onClick={e=>this.handleChangeCheckBox(e)}>Прикажи форма за промена на лозинка &#x2193;</Button>
                                            </div>
                                        
                                            

                                        </form>
                                        {helpForm}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }else{
            return (
                window.location='/'
            )
        }

    }
}
export default Profile;