import { Component } from "react";
import likeService from '../axios/likeService'

class Location extends Component{
    constructor(props){
        super(props);

        this.handleLikeOrDislike=this.handleLikeOrDislike.bind(this);
    }

    
    handleLikeOrDislike(e){
        e.preventDefault();
        const like={
            location_id:e.target.value,
            liker:localStorage.getItem("email")
        }
        likeService.createLikeOrDislike(like).then(res=>{
            this.props.updateParent();
        })
        
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
                                        <span class="text-danger mr-1">Допаѓања: {this.props.location.likes}</span>
                                    </h6>
                                    {
                                        this.props.location.is_liked===true ? 
                                        <button value={this.props.location.id} onClick={this.handleLikeOrDislike} type="button" class="fa fa-lg fa-heart  btn btn-danger btn-sm px-3 mb-2 material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Не ми се допаѓа">
                                        
                                        </button> : 
                                        <button value={this.props.location.id} onClick={this.handleLikeOrDislike} type="button" class="fa fa-lg fa-heart btn btn-warning btn-sm px-3 mb-2 material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Ми се допаѓа">
                                    
                                        </button>
                                
                                    }
                                    

                                </div>

                            </div>
        )
    }
}

export default Location;