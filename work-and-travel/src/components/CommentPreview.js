import {Component} from "react";

class CommentPreview extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="media mb-4">
                <img className="d-flex mr-3 rounded-circle"
                     src="http://placehold.it/50x50" alt=""/>
                <div className="media-body">
                    <h5 className="mt-0">{this.props.comment.email}</h5>
                    {this.props.comment.description}
                </div>
            </div>
        )
    }
}

export default CommentPreview;