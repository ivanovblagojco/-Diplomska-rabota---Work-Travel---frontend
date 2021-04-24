import {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";

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
                citizenship:""
            },
        }

        this.hide=this.hide.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    hide=()=>{       
        this.setState({modal_boolean: false }, function(){
            console.log(this.state)
        });
    }

    handleSubmit=(e)=>{

        e.preventDefault();
        console.log(this.state)
        //messageService.createMessage(this.state.message);//tuka da se dopise then 
    }

    render() {

        return(
            <Modal show={this.state.modal_boolean} handleHide={this.handleHide} style={{color:"black"}}>
                <Modal.Header>
                    <Modal.Title>Испрати апликација</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form" action="" method="post" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Име" onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    name:event.target.value}})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Презиме" onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    surname:event.target.value}})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Телефон" onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    phone:event.target.value}})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Држава" onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    country:event.target.value}})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Град" onChange={event => {this.setState({application:{
                                    ...this.state.application,
                                    city:event.target.value}})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Државјанство" onChange={event => {this.setState({application:{
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