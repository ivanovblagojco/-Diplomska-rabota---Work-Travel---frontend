import {Component} from "react";
import {Button, Form} from "react-bootstrap";
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/postCreate.css'
import axiosService from '../axios/axiosApis'
class PostCreate extends Component{
    constructor(props) {
        super(props);
        this.state={
            post:{
                title:'',
                description:''
            },
            file:{
                content:null,
                name:''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        debugger;
        axiosService.addNewPost(this.state);

    }

    onFileChange = event => {
        var binaryString='';
        var reader = new FileReader();
        var arrayBuffer = reader.readAsArrayBuffer(event.target.files[0]).result,
            array = new Uint8Array(arrayBuffer),
            binaryString = String.fromCharCode.apply(null, array);

            console.log(binaryString + "dsadsa");





        this.setState({file:{ content: binaryString, name:event.target.files[0].name}});

    };
    // On file upload (click the upload button)


    // File content to be displayed after
    // file upload is complete
    fileData = () => {
        if (this.state.file.content) {
            return (
                <div>
                    <p>File Name: {this.state.file.name}</p>
                    <p>File Type: {this.state.file.content.type}</p>
                </div>
            );
        }
    };
    render() {
        return(
            <div>
                <Navbar/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Наслов</Form.Label>
                            <Form.Control type="text" placeholder="Внеси наслов" onChange={e=>this.setState({post:{ ...this.state.post, title:  e.target.value}})} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Опис</Form.Label>
                            <Form.Control as="textarea" rows={20} placeholder="Внеси опис" onChange={e=>this.setState({post:{...this.state.post, description:  e.target.value}})} />
                        </Form.Group>
                        <div>
                            <div>
                                <input type="file" accept="image/*" onChange={this.onFileChange} />
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