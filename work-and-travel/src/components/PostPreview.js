import {Component} from "react";
import axiosService from '../axios/axiosApis'
import Navbar from "./Navbar";
import Footer from "./Footer";

class PostPreview extends Component{
    constructor(props) {
        super(props);
        this.state={
            Post:null,
            isLoading:true
        }
    }
    async componentDidMount() {
        const id = window.location.pathname.split('/')[2];
        console.log(id);

        const data = await axiosService.getPost(id);

        this.setState({
            Post:data,
            isLoading:false
        })
    }

    render() {
        const post = this.state.Post;
        const isLoading=this.state.isLoading;
        if(isLoading)
            return (<div>Loading</div>);
        return(

            <div className="container">
                        <Navbar/>
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
                        <p className="lead">{post.description}
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus
                            doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum
                            ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus,
                            dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt
                            ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!
                        </p>
                        <blockquote className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer posuere erat a ante.
                            </p>
                            <footer className="blockquote-footer">Someone famous in
                                <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum,
                            aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias
                            modi dicta saepe minima ab quo voluptatem obcaecati?
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis.
                            Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates
                            cupiditate voluptas illo saepe quaerat numquam recusandae? Qui,
                            necessitatibus, est!
                        </p>
                        <hr/>
                        <div className="card my-4">
                            <h5 className="card-header">Leave a Comment:</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3">d</textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="media mb-4">
                            <img className="d-flex mr-3 rounded-circle"
                                 src="http://placehold.it/50x50" alt=""/>
                            <div className="media-body">
                                <h5 className="mt-0">Commenter Name</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                nisi vulputate fringilla. Donec lacinia congue felis in
                                faucibus.
                            </div>
                        </div>
                        <div className="media mb-4">
                            <img className="d-flex mr-3 rounded-circle"
                                 src="http://placehold.it/50x50" alt=""/>
                            <div className="media-body">
                                <h5 className="mt-0">Commenter Name</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                nisi vulputate fringilla. Donec lacinia congue felis in
                                faucibus.
                                <div className="media mt-4">
                                    <img className="d-flex mr-3 rounded-circle"
                                         src="http://placehold.it/50x50" alt=""/>
                                    <div className="media-body">
                                        <h5 className="mt-0">Commenter Name</h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla
                                        vel metus scelerisque ante sollicitudin. Cras purus
                                        odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </div>
                                </div>
                                <div className="media mt-4">
                                    <img className="d-flex mr-3 rounded-circle"
                                         src="http://placehold.it/50x50" alt=""/>
                                    <div className="media-body">
                                        <h5 className="mt-0">Commenter Name</h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla
                                        vel metus scelerisque ante sollicitudin. Cras purus
                                        odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </div>
                                </div>
                            </div>
                        </div>
                <Footer/>
                </div>
        )
    }
}

export default PostPreview;