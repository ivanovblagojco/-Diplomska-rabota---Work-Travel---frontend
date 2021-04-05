import {Component} from "react";
import {Button, Form} from "react-bootstrap";
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/postCreate.css'
import axiosService from '../axios/postService'
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
class PostCreate extends Component{
    constructor(props) {
        super(props);
        this.state={
            title:'',
            description:'',
            file:null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();

        var formData = new FormData();
        formData.append("file", this.state.file);
        formData.append("title", this.state.title);
        formData.append("description", this.state.description);

        console.log(formData)
        axiosService.addNewPost(formData).then(res=>{
            if(res!==undefined){
                window.location.href="/";
            }
        });

    }

    onFileChange = event => {
        this.setState({file:event.target.files[0]});
    };
    // On file upload (click the upload button)


    // File content to be displayed after
    // file upload is complete
    fileData = () => {
        if (this.state.file) {
            return (
                <div>
                    <p>File Name: {this.state.file.name}</p>
                    <p>File Type: {this.state.file.type}</p>
                </div>
            );
        }
    };
    render() {
        return(
            <div>
                <Navbar/>
                <ReactNotification/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Наслов</Form.Label>
                            <Form.Control type="text" placeholder="Внеси наслов" onChange={e=>this.setState({title:  e.target.value})} required/>
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Опис</Form.Label>
                            <Form.Control as="textarea" rows={20} placeholder="Внеси опис" onChange={e=>this.setState({description:  e.target.value})} required/>
                        </Form.Group>
                        <div>
                            <div>
                                <input type="file" accept="image/*" onChange={this.onFileChange} required/>
                            </div>
                            {this.fileData()}
                        </div>
                        <br/>
                        <Button variant="primary" type="submit">
                            Објави
                        </Button>
                    </Form>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
        )
    }
}

export default PostCreate;