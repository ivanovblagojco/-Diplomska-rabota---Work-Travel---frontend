import {Component} from "react";
import Navbar from'./Navbar'
import Footer from "./Footer";
import PostCard from "./PostCard";
import axiosService from '../axios/axiosApis'
import {Col, Container, Row} from "react-bootstrap";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Posts:[],
            isLoading : true
        }
    }
    async componentDidMount() {
        debugger;
        const data = await axiosService.getAllPosts();

        this.setState({
            Posts:data,
            isLoading:false
        })
    }

    render() {
        const posts = this.state.Posts;
        const isLoading=this.state.isLoading;
        if(isLoading)
            return (<div>Loading</div>);
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
                <br/>
                <br/>
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