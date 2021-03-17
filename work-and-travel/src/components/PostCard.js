import {Component} from "react";
import "../css/postCard.css"
class PostCard extends Component{
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card text-white bg-primary flex-md-row mb-4 shadow-sm h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-white">World</strong>
                                <h6 className="mb-0">
                                    <a className="text-white" href="#">40 Percent of People Can’t Afford Basics</a>
                                </h6>
                                <div className="mb-1 text-white-50 small">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a
                                    natural lead-in to additional content.
                                </p>
                                <a className="btn btn-outline-light btn-sm" role="button"
                                   href="http://www.jquery2dotnet.com/">Continue reading</a>
                            </div>
                            <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]"
                                 src="//placeimg.com/250/250/arch" style = {{width: 200, height: 250}}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-white bg-success flex-md-row mb-4 shadow-sm h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-white">Health</strong>
                                <h6 className="mb-0">
                                    <a className="text-white" href="#">Food for Thought: Diet and Brain Health</a>
                                </h6>
                                <div className="mb-1 text-white-50 small">Nov 11</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a
                                    natural lead-in to additional content.
                                </p>
                                <a className="btn btn-outline-light btn-sm" href="http://www.jquery2dotnet.com/">Continue
                                    reading</a>
                            </div>
                            <img className="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]"
                                 src="//placeimg.com/250/250/nature" style = {{width: 200, height: 250}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostCard;