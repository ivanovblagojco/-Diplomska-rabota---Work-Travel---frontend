import {Component} from "react";
import Navbar from'./Navbar'
import Footer from "./Footer";
import PostCard from "./PostCard";
import axiosService from '../axios/postService'
import {Col, Container, Row} from "react-bootstrap";
import CarouselSlider from "./CarouselSlider";
import {Link} from "react-router-dom";
import '../css/home.css'
import '../css/loader.css'
import {MoonLoader, PulseLoader} from "react-spinners";
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Posts:[],
            isLoading : true,
            page:0,
            size:3,
            totalElements:"",
            totalPages:"",
            last_clicked:""
        }
        this.handleAgencyClick = this.handleAgencyClick.bind(this);
        this.handleUsersClick = this.handleUsersClick.bind(this);
        this.handleAllClick = this.handleAllClick.bind(this);


    }
    async componentDidMount() {
        const data = await axiosService.getAllPosts(this.state.page, this.state.size);

        if (data!==null){
            this.setState({
                Posts:data.content,
                isLoading:false,
                totalElements:data.totalElements,
                pageCount:data.totalPages,
                last_clicked:"all"
            })
        }
    }
    async handleAllClick(){
        const data = await axiosService.getAllPosts(this.state.page, this.state.size);
        if (data!==null){
            this.setState({
                Posts:data.content,
                isLoading:false,
                totalElements:data.totalElements,
                pageCount:data.totalPages,
                last_clicked:"all"
            })
        }
        console.log(this.state);
    }
    async handleAgencyClick(){
        const data = await axiosService.getAllPostsFromAgency(this.state.page, this.state.size);
        if (data!==null){
            this.setState({
                Posts:data.content,
                isLoading:false,
                totalElements:data.totalElements,
                pageCount:data.totalPages,
                last_clicked:"agency"
            })
        }
        console.log(this.state);
    }
    async handleUsersClick(){
        const data = await axiosService.getAllPostsFromUsers(this.state.page, this.state.size);
        debugger;
        if (data!==null){
            this.setState({
                Posts:data.content,
                isLoading:false,
                totalElements:data.totalElements,
                pageCount:data.totalPages,
                last_clicked:"users"
            })
        }
        console.log(this.state.Posts)
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({ page: selected }, () => {
            this.getUpdatesFromServer();
        });
    };

    async getUpdatesFromServer(){
        if(this.state.last_clicked==="all"){
            this.handleAllClick();
        }else if(this.state.last_clicked==="agency"){
            this.handleAgencyClick();
        }else if(this.state.last_clicked==="users"){
            this.handleUsersClick();
        }
    }
    render() {
        const posts = this.state.Posts;
        const isLoading=this.state.isLoading;
        if(isLoading)
            return (<div className="loader">
                <PulseLoader color={"#202020"} loading={this.state.isLoading} size={40}/>
            </div>);
        let postCards = posts.map(post =>{
            return(
                <Col className="container" sm="5">
                    <PostCard post={post}/>
                </Col>
            )
        })
        return(
            <div>
                <Navbar/>
                <CarouselSlider/>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-outline-light btn-sm mr-1" style={{background :"#17a2b8"}} to="#" onClick={this.handleAgencyClick}>Објави од агенции</Link>
                        <Link className="btn btn-outline-light btn-sm ml-1" style={{background :"#17a2b8"}} to="#" onClick={this.handleUsersClick}>Објави од корисници</Link>
                        <Link className="btn btn-outline-light btn-sm ml-1" style={{background :"#17a2b8"}} to="#" onClick={this.handleAllClick}>Сите</Link>
                    </div>
                    <br/>

                <Container fluid>
                    <Row>
                        {postCards}
                    </Row>
                </Container>
                <div className="d-flex justify-content-center position-static">
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
                <Footer/>
            </div>
        )
    }
}

export default Home;