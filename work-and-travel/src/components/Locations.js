import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Col, Container, NavLink, Row} from "react-bootstrap";
import { Card } from "@material-ui/core";
import LocationCreate from "./LocationCreate";
import Location from './Location'
import ReactPaginate from 'react-paginate';
import locationService from '../axios/locationService'
class Locations extends Component{
    constructor(props){
        super(props);

        this.state={
            isLoading:true,
            Locatons:[],
            page:0,
            size:9,
            totalElements:"",
            totalPages:""
        }
        this.updateLocations=this.updateLocations.bind(this);
    }

    async componentDidMount(){
        const data = await locationService.getAllLocations(this.state.page, this.state.size);
        if (data !== null) {
            this.setState({

                Locations: data.content,
                isLoading: false,
                totalElements: data.totalElements,
                pageCount: data.totalPages,

            })
        }
        console.log(this.state.Locations)
    }
    async updateLocations(){
        const data = await locationService.getAllLocations(this.state.page, this.state.size);
        if (data !== null) {
            this.setState({

                Locations: data.content,
                isLoading: false,
                totalElements: data.totalElements,
                pageCount: data.totalPages,

            })
        }
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({ page: selected }, () => {
            this.updateLocations();
        });
    };
    render(){
        const isLoading=this.state.isLoading;
        const locations=this.state.Locations;

        if(isLoading)
            return(<div>Loading...</div>)
        let locationsCards=locations.map(location=>{
            return(
                
                <Col sm="4">
                    <Location location={location}/>     
                </Col>
            )
        })
        return(
            <div>
            <Navbar/>
            <LocationCreate updateParent={this.updateLocations}/>
            <Container fluid="sm">
                <Row>
                    {locationsCards}
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

export default Locations;