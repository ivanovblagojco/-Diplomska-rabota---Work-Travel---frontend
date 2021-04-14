import {Component} from "react";
import "../css/postCard.css"
import {Link} from "react-router-dom";
class PostCard extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                    <div>
                        <div className="card text-white flex-md-row mb-4 shadow-sm h-md-250" style={{background:"#17a2b8",borderTopLeftRadius: "30px",
                        border:"3px solid gray"}}>
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-white">{this.props.post.title}</strong>

                                <div className="mb-1 text-white-50 small">{this.props.post.date_created}</div>
                                <p className="card-text mb-auto">{this.props.post.description.substring(0, 100)+"..."}
                                </p>
                                <Link className="btn btn-outline-light btn-sm" to={`/posts/${this.props.post.id}`}>Види повеќе</Link>

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