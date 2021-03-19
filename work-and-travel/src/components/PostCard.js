import {Component} from "react";
import "../css/postCard.css"
class PostCard extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                    <div>
                        <div className="card text-white bg-primary flex-md-row mb-4 shadow-sm h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-white">{this.props.post.title}</strong>

                                <div className="mb-1 text-white-50 small">Nov 12</div>
                                <p className="card-text mb-auto">{this.props.post.description}
                                </p>
                                <a className="btn btn-outline-light btn-sm" role="button"
                                   href="http://www.jquery2dotnet.com/">Continue reading</a>
                            </div>
                            <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]"
                                 src={`data:${this.props.post.mime_type};base64,${this.props.post.bytes}`} style = {{width: 200, height: 250}}/>
                        </div>
                    </div>
            </div>
        )
    }
}
export default PostCard;