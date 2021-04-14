import {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import MessageCreate from "./MessageCreate";
import commentService from "../axios/commentService"
class CommentPreview extends Component{
    constructor(props) {
        super(props);

        this.state={
            clickedCreateMessage:false
        }
        this.handleClickCreateMessage = this.handleClickCreateMessage.bind(this);
        this.updateState = this.updateState.bind(this);
        this.deleteComment=this.deleteComment.bind(this);
    }
    deleteComment(e){
        e.preventDefault();

        commentService.deleteComment(e.target.value).then(res=>{
            this.props.updateCommentss();
        })
    }
    updateState() {
        this.setState({ clickedCreateMessage:false });
    }

    handleClickCreateMessage() {
        this.setState({
            clickedCreateMessage: true
        });
    }

    render() {
        const email = this.props.comment.email;
        const id = this.props.comment.id;
        let buttonDelete=null;
        if(email === localStorage.getItem("email")){
            buttonDelete = (<button value={id} onClick={this.deleteComment} type="button" class="close" aria-label="Close" style={{display:"contents", color:"red"}}>
            &nbsp;x
        </button>)
        }
        return(
            <div className="media mb-4" style={{border:"3px dashed #17a2b8", padding:"10px", borderRadius: "30px"}}>
                <img className="d-flex mr-3 rounded-circle"
                     src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" style={{height:"50px", width:"50px"}} />
                <div className="media-body">
                    <h5 className="mt-0">{this.props.comment.email}
                        {buttonDelete}
                        <Button className="btn-success btn-sm" onClick={this.handleClickCreateMessage} style={{float:"right"}}>Испрати порака</Button>
                        {this.state.clickedCreateMessage ? <MessageCreate updateParent={ this.updateState } email={this.props.comment.email} /> : null}
                    </h5>
                    <p style={{fontSize:"12px"}}>{this.props.comment.date_created}</p>
                    {this.props.comment.description}
                </div>
            </div>
        )
    }
}

export default CommentPreview;