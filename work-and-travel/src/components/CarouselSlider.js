import {Component} from "react";
import {Carousel} from "react-bootstrap";
import axiosService from "../axios/postService";
import {Link} from "react-router-dom";
import {PulseLoader} from "react-spinners";
import '../css/loader.css'

class CarouselSlider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Posts:[],
            isLoading : true
        }
    }
    async componentDidMount() {
        debugger;
        const data = await axiosService.getLastThreePosts();

        this.setState({
            Posts:data,
            isLoading:false
        })
    }
    render() {

        const handleSelect = (selectedIndex, e) => {

            //setIndex(selectedIndex);
        };
        const posts = this.state.Posts;
        const isLoading=this.state.isLoading;
        if(isLoading)
            return (
                <div className="loader">
                    <PulseLoader color={"#202020"} loading={this.state.isLoading} size={40}/>
                </div>
            );
        return (
            <div className="w-100">
                <Carousel onSelect={handleSelect}>
                    <Carousel.Item>
                        <Link to={`/posts/${posts[0].id}`}>
                        <img
                            className="d-block w-100"
                            src={`data:${posts[0].mime_type};base64,${posts[0].bytes}`}
                            alt="First slide"
                            style={{height:"100vh", filter:"blur(4px)"}}
                        />
                        </Link>
                        <Carousel.Caption>
                            <h3>{posts[0].title}</h3>
                            <p>{posts[0].description.substring(0, 100)+"..."}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to={`/posts/${posts[1].id}`}>
                        <img
                            className="d-block w-100"
                            src={`data:${posts[1].mime_type};base64,${posts[1].bytes}`}
                            alt="Second slide"
                            style={{height:"100vh",filter:"blur(4px)"}}
                        />
                        </Link>
                        <Carousel.Caption>
                            <h3>{posts[1].title}</h3>
                            <p>{posts[1].description.substring(0, 100)+"..."}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to={`/posts/${posts[2].id}`}>
                        <img
                            className="d-block w-100"
                            src={`data:${posts[2].mime_type};base64,${posts[2].bytes}`}
                            alt="Third slide"
                            style={{height:"100vh", filter:"blur(4px)"}}
                        /></Link>

                        <Carousel.Caption>
                            <h3>{posts[2].title}</h3>
                            <p>{posts[2].description.substring(0, 100)+"..."}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br/>
            </div>
        );
    }
}
export default CarouselSlider;