import { Component } from "react";

class Location extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="card mb-5">

                                <div class="view zoom overlay">
                                    <h4 class="mb-0"><span class="badge badge-transparent badge-pill badge-news"><i style={{ color: "blue" }} className="fa fa-2x fa-map-marker " /></span></h4>
                                    <a href="#!">
                                        <div class="mask">
                                            <div class="mask rgba-black-slight"></div>
                                        </div>
                                    </a>
                                </div>

                                <div class="card-body text-center">

                                    <h5>{this.props.location.country}</h5>
                                    <p class="small text-muted text-uppercase mb-2">{this.props.location.city}</p>
                                    <hr />
                                    <h6 class="mb-3">
                                        <span class="text-danger mr-1">Допаѓања: </span>
                                    </h6>
                                    <button type="button" class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                                        <i class="fa fa-lg fa-heart"></i>
                                    </button>

                                </div>

                            </div>
        )
    }
}

export default Location;