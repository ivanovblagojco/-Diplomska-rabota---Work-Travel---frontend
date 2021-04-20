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
import { event } from "jquery";

class PostCreate extends Component{
    constructor(props) {
        super(props);
        this.state={
            id:-1,
            title:'',
            description:'',
            file:null,
            Posts:[],
            isLoading : true,
            page:0,
            size:5,
            totalElements:"",
            totalPages:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getUpdatesFromServer=this.getUpdatesFromServer.bind(this);
        this.handleClickGreen=this.handleClickGreen.bind(this);
        this.handleClickRed=this.handleClickRed.bind(this);
        this.handleNewPost=this.handleNewPost.bind(this);
    }
    componentDidMount(){
        axiosService.getLoggedUserPosts(this.state.page, this.state.size).then(data=>{
            if (data!==null){
                this.setState({
                    Posts:data.content,
                    isLoading:false,
                    totalElements:data.totalElements,
                    pageCount:data.totalPages
                 })
                console.log(data)
    
            }
        })

    }
    handleSubmit(event) {
        event.preventDefault();

        var formData = new FormData();
        formData.append("id", this.state.id);
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
    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({ page: selected }, () => {
            this.getUpdatesFromServer();
        });
    };
    getUpdatesFromServer(){
        axiosService.getLoggedUserPosts(this.state.page, this.state.size).then(data=>{
            if (data!==null){
                this.setState({
                    Posts:data.content,
                    isLoading:false,
                    totalElements:data.totalElements,
                    pageCount:data.totalPages
                 })
                console.log(data)
    
            }
        })

    }
    onFileChange = event => {
        this.setState({file:event.target.files[0]});
    };
    // On file upload (click the upload button)


    // File content to be displayed after
    // file upload is complete
    

    handleClickGreen(e){
        e.preventDefault();

        axiosService.getPost(e.target.value).then(data=>{
            document.getElementById("title").value=data.title;
            document.getElementById("description").value=data.description;
            console.log("data:"+data.mime_type+";base64,"+data.bytes);
            document.getElementById("image").style.display="block";
            document.getElementById("image").src="data:"+data.mime_type+";base64,"+data.bytes;
            document.getElementById("file").required=false;
            this.setState({
                id:e.target.value
            })
        })
        
    }
    handleClickRed(e){
        e.preventDefault();

        axiosService.deletePost(e.target.value).then(res=>{
            this.getUpdatesFromServer();
        })
    }
    handleNewPost(e){
        e.preventDefault();

        document.getElementById("title").value="";
        document.getElementById("description").value="";
        document.getElementById("file").value="";
        document.getElementById("image").style.display="none";
        document.getElementById("file").required=true;

        this.setState({
            id:-1
        })

    }
    render() {
        const isLoading = this.state.isLoading;
        const posts = this.state.Posts;

        if(isLoading)
            return(<div>Loading...</div>)
        let lista = posts.map(post=>{
            return(
                <li class="list-group-item">
                    <div class="todo-indicator bg-warning"></div>
                    <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                            <div class="widget-content-left">
                                <div class="widget-heading">{post.title}</div>
                                <div class="widget-subheading"><i>{post.date_created}</i></div>
                            </div>
                            <div class="widget-content-right"> 
                                <button type="button" value={post.id} onClick={this.handleClickGreen} class="fa fa-lg fa-edit"  style={{display:"contents", color:"green"}}></button> 
                                <button type="button" value={post.id} onClick={this.handleClickRed} class="fa fa-lg fa-trash"  style={{display:"contents", color:"red"}}></button> 
                            </div>
                        </div>
                    </div>
                </li>
            )
        })
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
                            <hr style={{border: "2px solid #f7b924"}}/>

                            <div >
                                <button type="button" class="fa fa-2x fa-tasks"  style={{display:"contents", color:"black"}}><i style={{fontSize:"26px"}}>Мои објави</i></button> 
                                <button type="button" className="btn btn-primary" onClick={this.handleNewPost} style={{display:"flex",float:"right"}}>Нова објава</button>
                            </div>
                            <hr/>

                                <div style={{minHeight:"420px"}}>
                                    <div>
                                        <div>
                                            <ul class=" list-group list-group-flush">
                                                {lista}
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
                                <Form.Control id="title" type="text" placeholder="Внеси наслов" onChange={e => this.setState({ title: e.target.value })} required />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Опис</Form.Label>
                                <Form.Control id="description" as="textarea" rows={7} placeholder="Внеси опис" onChange={e => this.setState({ description: e.target.value })} required />
                            </Form.Group>
                            <div>
                                <div>
                                    <img id="image" src="" style={{width:"100%", height:"300px", display:"none"}}/>
                                    <input id="file" type="file" accept="image/*" onChange={this.onFileChange} required/>
                                </div>
                                
                            </div>
                            <br />
                            <Button variant="primary" type="submit">
                                Зачувај и објави
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