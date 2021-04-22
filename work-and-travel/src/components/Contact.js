import {Component} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import '../css/contact.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import contactService from '../axios/contactService'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';

class Contact extends Component{
    constructor(props){
        super(props);

        this.state={
            contact:{
                name:"",
                email:"",
                subject:"",
                message:""
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        contactService.createContact(this.state.contact).then(data=>{
            if(data!==undefined){
                debugger;
                store.addNotification({
                    title: "Успешно!",
                    message: "Добредојдовте во системот",
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
                    title: "Неуспешно!",
                    message: "Се појави грешка",
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
        });
    }
    render(){
        return(
            <div>
                <Navbar />
                <ReactNotification/>
                <div class="jumbotron jumbotron-sm" style={{background:"#f7b924", borderTop:"1px solid gray",borderBottom:"1px solid gray"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-lg-12">
                                <h1 class="h1" style={{color:"white"}}>
                                    Контактирај не!  <small style={{color:"gray"}}>Администраторски тим</small></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" style={{marginTop:"150px", border:"1px solid white", background:"white", boxShadow:"25px 25px 25px 25px #f7f7f7"}}>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="well well-sm">
                                <form className="form" action="" method="post" onSubmit={this.handleSubmit}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="name">
                                                    Име</label>
                                                <input type="text" class="form-control" id="name" placeholder="Внеси име" required="required" onChange={e=>this.setState({contact:{...this.state.contact,name:e.target.value}})}/>
                                            </div>
                                            <div class="form-group">
                                                <label for="email">
                                                    Вашата е-пошта</label>
                                                <div class="input-group">
                                                    <span class="input-group-addon fa fa-2x fa-envelope" style={{ color: "#f7b924" }}><span class="glyphicon glyphicon-envelope"></span>
                                                    </span>
                                                    <input type="email" class="form-control" id="email" placeholder="Внеси е-пошта" required="required" onChange={e=>this.setState({contact:{...this.state.contact,email:e.target.value}})}/></div>
                                            </div>
                                            <div class="form-group">
                                                <label for="name">
                                                    Наслов</label>
                                                <input type="text" class="form-control" id="name" placeholder="Наслов" required="required" onChange={e=>this.setState({contact:{...this.state.contact,subject:e.target.value}})}/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="name">
                                                    Порака</label>
                                                <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                                    placeholder="Порака..." onChange={e=>this.setState({contact:{...this.state.contact,message:e.target.value}})}></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="btn btn-primary pull-right">
                                                Испрати</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <form>
                                <legend><span class="glyphicon glyphicon-globe"></span> За нас</legend>
                                <address>
                                    <strong>Држава</strong><br />
                Град<br />
                Улица, бр. 94107<br />
                                    <abbr title="Phone">
                                    </abbr>
                (+389) 76 77 77 77
            </address>
                                <address>
                                    <strong>Благојчо Иванов</strong><br />
                                    <a href="mailto:#">blagojco.ivanov@students.finki.ukim.mk</a>
                                </address>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Contact;