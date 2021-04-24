import {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import CommentPreview from "./CommentPreview";
import userService from "../axios/userService"
import messageService from "../axios/MessageService"
class MessageCreate extends Component{
    constructor(props) {
        super(props);

        this.state = {
            modal_boolean: true,
            message:{
                title:"",
                description:"",
                sender_email:"",
                receiver_email:""
            }
        }

        this.hide=this.hide.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    hide = () => {
        this.setState({modal_boolean: false });
    }

    handleSubmit(){
        userService.getLoggedUser().then(data=>{
            this.setState({
                message:{
                    ...this.state.message,
                    sender_email:data.email,
                    receiver_email:this.props.email}
            })
            messageService.createMessage(this.state.message);//tuka da se dopise then
        });

    }

    render() {

        return(
            <Modal show={this.state.modal_boolean} style={{color:"black"}}>
                <Modal.Header>
                    <Modal.Title>Испрати порака</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Наслов" onChange={event => {this.setState({message:{
                                ...this.state.message,
                                title:event.target.value}})}}/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="5" placeholder="Содржина на порака" onChange={event => {this.setState({message:{
                                ...this.state.message,
                                description:event.target.value}})}}></textarea>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button type="button" variant="primary" onClick={this.handleSubmit}>
                        Испрати
                    </Button>
                    <Button type="button" variant="warning" onClick={this.hide && this.props.updateParent}>
                        Затвори
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default MessageCreate;