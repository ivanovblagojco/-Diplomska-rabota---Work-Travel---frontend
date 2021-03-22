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
import ClipLoader from "react-spinners/ClipLoader";
import {MoonLoader, PulseLoader} from "react-spinners";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Posts:[],
            isLoading : true
        }
        this.handleAgencyClick = this.handleAgencyClick.bind(this);
        this.handleUsersClick = this.handleUsersClick.bind(this);
        this.handleAllClick = this.handleAllClick.bind(this);


    }
    async componentDidMount() {
        const data = await axiosService.getAllPosts();

        if (data!==null){
            this.setState({
                Posts:data,
                isLoading:false
            })
        }
    }
    async handleAllClick(){
        const data = await axiosService.getAllPosts();
        if (data!==null){
            this.setState({
                Posts:data,
                isLoading:false
            })
        }
        console.log(this.state);
    }
    async handleAgencyClick(){
        const data = await axiosService.getAllPostsFromAgency();
        if (data!==null){
            this.setState({
                Posts:data,
                isLoading:false
            })
        }
        console.log(this.state);
    }
    async handleUsersClick(){
        const data = await axiosService.getAllPostsFromUsers();
        debugger;
        if (data!==null){
            this.setState({
                Posts:data,
                isLoading:false
            })
        }
        console.log(this.state);
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
                        <Link className="btn btn-outline-light btn-sm mr-1" to="#" onClick={this.handleAgencyClick}>Објави од агенции</Link>
                        <Link className="btn btn-outline-light btn-sm ml-1" to="#" onClick={this.handleUsersClick}>Објави од корисници</Link>
                        <Link className="btn btn-outline-light btn-sm ml-1" to="#" onClick={this.handleAllClick}>Сите</Link>
                    </div>
                    <br/>

                <Container fluid>
                    <Row>
                        {postCards}>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Home;