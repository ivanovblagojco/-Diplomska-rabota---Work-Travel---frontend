import {Component} from "react";
import axiosService from '../axios/postService'
import Navbar from "./Navbar";
import Footer from "./Footer";

import commentService from '../axios/commentService'
import {Col} from "react-bootstrap";
import PostCard from "./PostCard";
import CommentPreview from "./CommentPreview";
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

class PostPreview extends Component{
    constructor(props) {
        super(props);
        this.state={
            Post:null,
            isLoading:true,
            comment:"",
            Comments: null,
            page:0,
            size:3,
            totalElements:"",
            totalPages:""
        }

        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.updateComments = this.updateComments.bind(this);
    }
    async componentDidMount() {
        debugger;
        const id = window.location.pathname.split('/')[2];
        console.log(id);

        const data = await axiosService.getPost(id);


        this.setState({
            Post:data,
            isLoading:false,
        })

        const data2 = await commentService.getAllComments(this.state.page, this.state.size, this.state.Post.id);
        this.setState({
            Comments:data2.content,
            totalElements:data2.totalElements,
            pageCount:data2.totalPages

        })
    }
    updateComments(){
        commentService.getAllComments(this.state.page, this.state.size, this.state.Post.id).then(data2=>{
            this.setState({
                Comments:data2.content,
                totalElements:data2.totalElements,
                pageCount:data2.totalPages
    
            })
        })
    }
    handleCommentSubmit(){
        debugger;

        let commentHelperFront = {
            description:this.state.comment,
            post_id:this.state.Post.id,
            user_email:localStorage.getItem("email")
        }

        commentService.createComment(commentHelperFront).then(res=>{
            if(res!==undefined){
                commentService.getAllComments(this.state.page, this.state.size, this.state.Post.id).then(data=>{
                    this.setState({
                        Comments:data.content,
                        totalElements:data.totalElements,
                        pageCount:data.totalPages
                    })
                })
            }
        });
    }
    handleCommentChange(e){
        e.preventDefault();

        this.setState({
            comment:e.target.value
        })
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({ page: selected }, () => {
            this.getUpdatesFromServer();
        });
    };
    async getUpdatesFromServer(){
        const data2 = await commentService.getAllComments(this.state.page, this.state.size, this.state.Post.id);
        this.setState({
            Comments:data2.content,
            totalElements:data2.totalElements,
            pageCount:data2.totalPages

        })
    }
    render() {

        const post = this.state.Post;
        const isLoading=this.state.isLoading;
        const comments_list = this.state.Comments;

        let commentsShow;



        if(isLoading)
            return (<div>Loading</div>);
        if(comments_list!==null) {
            commentsShow = comments_list.map(c => {
                return (
                    <CommentPreview comment={c} updateCommentss={this.updateComments}/>
                )
            });
        }
        return(
        <div>
            <Navbar/>
            <div className="container">

                        <h1 className="mt-4">{post.title}</h1>
                        <p className="lead">
                            Креирано од: {post.creator}
                            <a href="#"></a>
                        </p>
                        <hr/>
                        <p>{post.date_created}</p>
                        <hr/>
                        <img className="img-fluid rounded" src={`data:${post.mime_type};base64,${post.bytes}`} alt="" style={{width:"100%", height:"300px"}}/>
                        <hr/>
                        <p className="lead">{post.title}
                        </p>
                        <p>{post.description}</p>
                        <hr/>



                        <div className="card my-4">
                            <h5 style={{color:"black"}} className="card-header">Остави коментар:</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3" onChange={this.handleCommentChange}></textarea>
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={this.handleCommentSubmit}>Внеси коментар</button>
                                </form>
                            </div>
                        </div>
                        <div>
                            {commentsShow}
                            <br/>
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
                </div>
            <Footer/>
            </div>
        )
    }
}

export default PostPreview;