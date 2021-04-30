import {Component} from "react";
import Navbar from'./Navbar'
import Footer from "./Footer";
import PostCard from "./PostCard";
import axiosService from '../axios/postService'
import {Col, Container, NavLink, Row} from "react-bootstrap";
import CarouselSlider from "./CarouselSlider";
import {Link} from "react-router-dom";
import '../css/home.css'
import '../css/loader.css'
import {MoonLoader, PulseLoader} from "react-spinners";
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import TogglerM from './TogglerM'
class PostCards extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Posts:[],
            isLoading : true,
            page:0,
            size:6,
            totalElements:"",
            totalPages:"",
            last_clicked:"",
        }
        this.handleAgencyClick = this.handleAgencyClick.bind(this);
        this.handleUsersClick = this.handleUsersClick.bind(this);
        this.changePlace = this.changePlace.bind(this);
        this.handleAllClick = this.handleAllClick.bind(this);

    }
    async componentDidMount() {
        const data = await axiosService.getAllPosts("", this.state.page, this.state.size);

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
    async handleAllClick(place){
        const data = await axiosService.getAllPosts(place, this.state.page, this.state.size);
        
            
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
    async handleAgencyClick(place){
        const data = await axiosService.getAllPostsFromAgency(place,this.state.page, this.state.size);
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
    async handleUsersClick(place){
        const data = await axiosService.getAllPostsFromUsers(place,this.state.page, this.state.size);
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
            this.handleAllClick(null);
        }else if(this.state.last_clicked==="agency"){
            this.handleAgencyClick();
        }else if(this.state.last_clicked==="users"){
            this.handleUsersClick();
        }
    }

    changePlace(e){
        if(this.state.last_clicked==="all"){
            if(e.target.value===1){this.handleAllClick("Америка")}
            else if(e.target.value===2){this.handleAllClick("Германија")}
            else if(e.target.value===3){this.handleAllClick("Балкан")}
            else if(e.target.value===4){this.handleAllClick("Останато")}
        }else if(this.state.last_clicked==="agency"){
            if(e.target.value===1){this.handleAgencyClick("Америка")}
            else if(e.target.value===2){this.handleAgencyClick("Германија")}
            else if(e.target.value===3){this.handleAgencyClick("Балкан")}
            else if(e.target.value===4){this.handleAgencyClick("Останато")}
        }else if(this.state.last_clicked==="users"){
            if(e.target.value===1){this.handleAllClick("Америка")}
            else if(e.target.value===2){this.handleUsersClick("Германија")}
            else if(e.target.value===3){this.handleUsersClick("Балкан")}
            else if(e.target.value===4){this.handleUsersClick("Останато")}
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
                <Col sm="4">
                    <PostCard post={post}/>
                </Col>
            )
        })
        return(
            <div>
                <Navbar/>
                    <div className="d-flex justify-content-center">
                        <NavLink className="btn btn-outline-light btn-sm mr-1" style={{background :"#1F75FE"}} to="#" onClick={this.handleAgencyClick}>Објави од агенции</NavLink>
                        <NavLink className="btn btn-outline-light btn-sm ml-1" style={{background :"#1F75FE"}} to="#" onClick={this.handleUsersClick}>Објави од корисници</NavLink>
                        <NavLink className="btn btn-outline-light btn-sm ml-1" style={{background :"#1F75FE"}} to="#" onClick={this.handleAllClick}>Сите</NavLink>
                    </div>
                    <br/>
                <TogglerM updateParent={this.changePlace}/>
                <Container fluid="sm">
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
            </div>
        )
    }
}

export default PostCards;