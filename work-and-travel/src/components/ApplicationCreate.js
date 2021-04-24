import {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import applicationService from '../axios/applicationService'
import ReactNotifications from 'react-notifications-component'
import {store} from 'react-notifications-component'
class ApplicationCreate extends Component{
    constructor(props) {
        super(props);

        this.state = {
            modal_boolean: true,
            application:{
                name:"",
                surname:"",
                phone:"",
                country:"",
                city:"",
                citizenship:"",
                post_id:null
            },
        }

        this.hide=this.hide.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            application:{
                ...this.state.application,
                post_id:this.props.post_id
            }
        })
    }

    hide=()=>{       
        this.setState({modal_boolean: false }, function(){
            console.log(this.state)
        });
    }

    handleSubmit=(e)=>{

        e.preventDefault();
        
    

        applicationService.createApplication(this.state.application).then(res=>{
            if(res!==undefined){
                store.addNotification({
                    title: "Успешно!",
                    message: "Успешно!",
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
                    message: "Неуспешно",
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

    render() {

        return(
            <Modal show={this.state.modal_boolean} handleHide={this.handleHide} style={{color:"black"}}>
                <Modal.Header>
                    <Modal.Title>Испрати апликација</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactNotifications/>
                    <form className="form" action="" method="post" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Име" required onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    name:event.target.value}})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Презиме" required onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    surname:event.target.value}})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="+389 76 487 666" required onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    phone:event.target.value}})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Држава" required onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    country:event.target.value}})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Град" required onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    city:event.target.value}})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Државјанство" required onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    citizenship:event.target.value}})}}/>
                        </div>
                        <hr/>
                        <div style={{display:"inline", float:"right"}}>
                            <button className="btn btn-primary m-2">Испрати</button>
                            <button type="button" className="btn btn-warning" onClick={() => { this.props.updateParent(); this.hide();}}>Затвори</button>
                        </div>
                    </form>     
                </Modal.Body>
            </Modal>
        )
    }
}
export default ApplicationCreate;