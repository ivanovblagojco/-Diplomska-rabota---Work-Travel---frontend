import {Component} from "react";
import {Button, Form} from "react-bootstrap";
import Navbar from './Navbar'
import Footer from './Footer'
import axiosService from '../axios/postService'
import 'react-notifications-component/dist/theme.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactNotification from 'react-notifications-component'
import '../css/postCreate.css'
import ReactPaginate from 'react-paginate'

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
                <div class="row d-flex justify-content-center" style={{overflowX:"hidden", maxWidth:"100%"}}>
                    <div class="col-8 col-md-6">
                        <div class="card-hover-shadow-2x mb-3 card">
                            <div class="card-header-tab card-header">
                                <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="fa fa-tasks"></i>&nbsp;Мои објави</div>
                            </div>
                                <div style={{minHeight:"420px"}}>
                                    <div>
                                        <div>
                                            <ul class=" list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <div class="todo-indicator bg-warning"></div>
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left">
                                                                <div class="widget-heading">Call Sam For payments</div>
                                                                <div class="widget-subheading"><i>By Bob</i></div>
                                                            </div>
                                                            <div class="widget-content-right"> <button class="border-0 btn-transition btn btn-outline-success"> <i class="fa fa-check"></i></button> <button class="border-0 btn-transition btn btn-outline-danger"> <i class="fa fa-trash"></i> </button> </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="todo-indicator bg-warning"></div>
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left">
                                                                <div class="widget-heading">Call Sam For payments</div>
                                                                <div class="widget-subheading"><i>By Bob</i></div>
                                                            </div>
                                                            <div class="widget-content-right"> <button class="border-0 btn-transition btn btn-outline-success"> <i class="fa fa-check"></i></button> <button class="border-0 btn-transition btn btn-outline-danger"> <i class="fa fa-trash"></i> </button> </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                            <hr/>
                            <div class="d-flex justify-content-center">
                                <ReactPaginate
                                    previousLabel={'previous'}
                                    nextLabel={'next'}
                                    breakLabel={'...'}
                                    pageCount={this.state.pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handlePageClick}
                                    breakClassName={'page-item'}
                                    breakLinkClassName={'page-link'}
                                    containerClassName={'pagination'}
                                    pageClassName={'page-item'}
                                    pageLinkClassName={'page-link'}
                                    previousClassName={'page-item'}
                                    previousLinkClassName={'page-link'}
                                    nextClassName={'page-item'}
                                    nextLinkClassName={'page-link'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-8 col-md-4">

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Label>
                                Промена на постоечка и креирање на нова објава
                            </Form.Label>
                            <Form.Group controlId="title">
                                <Form.Label>Наслов</Form.Label>
                                <Form.Control type="text" placeholder="Внеси наслов" onChange={e => this.setState({ title: e.target.value })} required />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Опис</Form.Label>
                                <Form.Control as="textarea" rows={12} placeholder="Внеси опис" onChange={e => this.setState({ description: e.target.value })} required />
                            </Form.Group>
                            <div>
                                <div>
                                    <input type="file" accept="image/*" onChange={this.onFileChange} required />
                                </div>
                                {this.fileData()}
                            </div>
                            <br />
                            <Button variant="primary" type="submit">
                                Објави
                        </Button>
                        </Form>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default PostCreate;