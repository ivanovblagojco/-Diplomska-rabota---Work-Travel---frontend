import {Component} from "react";
import {Button, Form} from "react-bootstrap";
import Navbar from './Navbar'
import Footer from './Footer'
import axiosService from '../axios/applicationService'
import 'react-notifications-component/dist/theme.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactNotification from 'react-notifications-component'
import '../css/applicationView.css'
import ReactPaginate from 'react-paginate'
import { event } from "jquery";
class ApplicationView extends Component{
    constructor(props){
        super(props);

        this.state={
            id:-1,
            name:'',
            surname:'',
            phone:'',
            country:'',
            city:'',
            citizenship:'',
            Applications:[],
            isLoading : true,
            page:0,
            size:5,
            totalElements:"",
            totalPages:""
        }
        this.getUpdatesFromServer=this.getUpdatesFromServer.bind(this);
        this.handleClickGreen=this.handleClickGreen.bind(this);
    }

    componentDidMount(){
        axiosService.getAllApplicationsForAgency(this.state.page, this.state.size).then(data=>{
            if (data!==null){
                this.setState({
                    Applications:data.content,
                    isLoading:false,
                    totalElements:data.totalElements,
                    pageCount:data.totalPages
                 })
                console.log(data)
    
            }
        })

    }
    
    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({ page: selected }, () => {
            this.getUpdatesFromServer();
        });
    };
    getUpdatesFromServer(){
        axiosService.getAllApplicationsForAgency(this.state.page, this.state.size).then(data=>{
            if (data!==null){
                this.setState({
                    Applications:data.content,
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

        axiosService.getApplication(e.target.value).then(data=>{
            document.getElementById("name").value=data.name;
            document.getElementById("surname").value=data.surname;
            document.getElementById("phone").value=data.phone;
            document.getElementById("country").value=data.country;
            document.getElementById("city").value=data.city;
            document.getElementById("citizenship").value=data.citizenship;

            this.setState({
                id:e.target.value
            })
        })
        
    }
  
   
    render(){
        const isLoading = this.state.isLoading;
        const applications = this.state.Applications;

        if(isLoading)
            return(<div>Loading...</div>)
        let lista = applications.map(app=>{
            return(
                <li class="list-group-item">
                    <div class="todo-indicator bg-warning"></div>
                    <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                            <div class="widget-content-left">
                                <div class="widget-heading">{app.name}&nbsp;{app.surname}</div>
                                <div class="widget-subheading"><i>{app.phone}</i></div>
                            </div>
                            <div class="widget-content-right"> 
                                <button type="button" value={app.id} onClick={this.handleClickGreen} class="fa fa-lg fa-check"  style={{display:"contents", color:"green"}}></button> 
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
                            <button type="button" class="fa fa-2x fa-tasks"  style={{display:"contents", color:"black"}}><i style={{fontSize:"26px"}}>Пристигнати апликации</i></button> 
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

                    <Form onSubmit={this.handleSubmit} style={{ background:"white", boxShadow:"7px 7px 7px 7px #f7f7f7", border:"1px solid white", borderRadius:"10px 10px 10px 10px",minHeight:"631px"}}>
                        <hr style={{border: "2px solid #f7b924"}}/>

                        <Form.Label>
                            Преглед на апликација
                        </Form.Label>
                        <Form.Group controlId="name">
                            <Form.Label>Име</Form.Label>
                            <Form.Control id="name" type="text" disabled/>
                        </Form.Group>
                        <Form.Group controlId="surname">
                            <Form.Label>Презиме</Form.Label>
                            <Form.Control id="surname" type="text" disabled/>
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control id="phone" type="text" disabled/>
                        </Form.Group>
                        <Form.Group controlId="country">
                            <Form.Label>Држава</Form.Label>
                            <Form.Control id="country" type="text" disabled/>
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>Град</Form.Label>
                            <Form.Control id="city" type="text" disabled/>
                        </Form.Group>
                        <Form.Group controlId="citizenship">
                            <Form.Label>Државјанство</Form.Label>
                            <Form.Control id="citizenship" type="text" disabled/>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}


export default ApplicationView;