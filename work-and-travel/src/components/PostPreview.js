import {Component} from "react";
import axiosService from '../axios/postService'
import Navbar from "./Navbar";
import Footer from "./Footer";

import commentService from '../axios/commentService'
import {Col} from "react-bootstrap";
import PostCard from "./PostCard";
import CommentPreview from "./CommentPreview";


class PostPreview extends Component{
    constructor(props) {
        super(props);
        this.state={
            Post:null,
            isLoading:true,
            comment:"",
            Comments: null
        }

        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

    }
    async componentDidMount() {
        const id = window.location.pathname.split('/')[2];
        console.log(id);

        const data = await axiosService.getPost(id);


        this.setState({
            Post:data,
            isLoading:false,
        })

        const data2 = await commentService.getAllComments(this.state.Post.id);
        this.setState({
            Comments:data2
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
                commentService.getAllComments(this.state.Post.id).then(data=>{
                    this.setState({
                        Comments:data
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

    render() {

        const post = this.state.Post;
        const isLoading=this.state.isLoading;
        const comments_list = this.state.Comments;

        let commentsShow;
        if(comments_list!==null) {
                commentsShow = comments_list.map(c => {
                return (
                    <CommentPreview comment={c}/>
                )
            })
        }


        if(isLoading)
            return (<div>Loading</div>);
        return(
        <div>
            <Navbar/>
            <div className="container">

                        <h1 className="mt-4">{post.title}</h1>
                        <p className="lead">
                            by
                            <a href="#">Start Bootstrap</a>
                        </p>
                        <hr/>
                        <p>Posted on January 1, 2019 at 12:00 PM</p>
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
                        </div>
                </div>
            <Footer/>
            </div>
        )
    }
}

export default PostPreview;