import {Component} from "react";
import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactItem from "./ContactItem";
import contactService from '../axios/contactService'
import ReactPaginate from 'react-paginate';

class Contacts extends Component{
    constructor(props){
        super(props)
        this.state={
            Contacts:[],
            isLoading : true,
            page:0,
            size:9,
            totalElements:"",
            totalPages:""
        }
    }
    async componentDidMount(){
        const data = await contactService.getAllContacts(this.state.page, this.state.size);
        if (data !== null) {
            this.setState({

                Contacts: data.content,
                isLoading: false,
                totalElements: data.totalElements,
                pageCount: data.totalPages,

            })
        }
    }
    async updateContacts(){
        const data = await contactService.getAllContacts(this.state.page, this.state.size);
        if (data !== null) {
            this.setState({

                Contacts: data.content,
                isLoading: false,
                totalElements: data.totalElements,
                pageCount: data.totalPages,

            })
        }
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({ page: selected }, () => {
            this.updateContacts();
        });
    };
    render(){
        const contacts = this.state.Contacts;
        const isLoading = this.state.isLoading;
        if(isLoading)
            return(<div>Loading...</div>)
        let list = contacts.map(contact=>{
            return(
                <div className="col-md-4">
                    <ContactItem contact={contact} />
                </div>
            )
        })
        return(
            <div style={{display:"block",marginTop:"200px"}}>
                <Navbar/>
                <h4 className="d-flex justify-content-center" style={{marginTop:"-20px", marginBottom:"80px", fontStyle:"italic", background:"#f7b924", padding:"10px", borderTop:"1px solid gray", borderBottom:"1px solid gray"}}> Прашања, пофалби, поплаки</h4>
                <div className="container row" style={{maxWidth:"100%", overflowX:"hidden"}}>
                    {list}
                </div>
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

export default Contacts;