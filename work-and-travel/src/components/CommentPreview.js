import {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import MessageCreate from "./MessageCreate";

class CommentPreview extends Component{
    constructor(props) {
        super(props);

        this.state={
            clickedCreateMessage:false
        }
        this.handleClickCreateMessage = this.handleClickCreateMessage.bind(this);
        this.updateState = this.updateState.bind(this);
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
        return(
            <div className="media mb-4">
                <img className="d-flex mr-3 rounded-circle"
                     src="http://placehold.it/50x50" alt=""/>
                <div className="media-body">
                    <h5 className="mt-0">{this.props.comment.email}
                        <Button className="btn-success btn-sm" onClick={this.handleClickCreateMessage} style={{float:"right"}}>Испрати порака</Button>
                        {this.state.clickedCreateMessage ? <MessageCreate updateParent={ this.updateState } email={this.props.comment.email} /> : null}
                    </h5>
                    {this.props.comment.description}
                </div>
            </div>
        )
    }
}

export default CommentPreview;