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
import PostCards from "./PostCards";
import Locations from "./Locations";

class Home extends Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div>
                <Navbar/>
                <CarouselSlider/>
                <PostCards/>
                <Locations/>
            </div>
        )
    }
}

export default Home;